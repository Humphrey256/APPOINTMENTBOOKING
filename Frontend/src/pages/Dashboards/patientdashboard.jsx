import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const PatientDashboard = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        phoneNumber: '',
        time: '',
        reason: '',
        doctorId: '',
        userId: '',
    });
    

    const [timeSlots, setTimeSlots] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [appointmentStatus, setAppointmentStatus] = useState('');
    const [submittedDetails, setSubmittedDetails] = useState(null);  // Keep track of submitted details

    const navigate = useNavigate();

    const fetchDoctors = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:5000/api/v1/doctors', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (!response.ok) throw new Error('Failed to fetch doctors');

            const data = await response.json();
            const confirmedDoctors = data.data.filter((doctor) => doctor.isApproved === 'confirmed');
            setDoctors(confirmedDoctors);

            if (confirmedDoctors.length > 0) {
                setSelectedDoctor(confirmedDoctors[0]);
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    doctorId: confirmedDoctors[0]._id,
                }));
                fetchTimeSlots(confirmedDoctors[0]._id);
            }
        } catch (error) {
            toast.error('Failed to fetch doctors. Please try again.', { position: 'top-right' });
        }
    }, []);

    const fetchTimeSlots = async (doctorId) => {
        console.log("Fetching time slots for doctor:", doctorId);
        try {
            const response = await fetch(`http://localhost:5000/api/v1/doctors/timeSlots/${doctorId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Full response data:", data); // Log the full response for inspection
                console.log("Fetched slots:", data.timeSlots); // Log the expected slots field

                // Make sure you're correctly accessing the slots field based on the API response structure
                if (data.timeSlots) {
                    setTimeSlots(data.timeSlots);
                } else {
                    console.log("Slots field not found in the response.");
                    setTimeSlots([]);
                }
            } else {
                console.log("Failed to fetch time slots.");
                setTimeSlots([]);
                toast.error('Failed to fetch available time slots.', { position: 'top-right' });
            }
        } catch (error) {
            console.log("Error fetching time slots:", error);
            toast.error('Error fetching time slots. Please try again.', { position: 'top-right' });
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        if (!token || !userId) {
            navigate('/login');
        } else {
            setFormData((prevFormData) => ({ ...prevFormData, userId }));
            fetchDoctors();
        }
    }, [fetchDoctors, navigate]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDoctorSelect = (doctor) => {
        setSelectedDoctor(doctor);
        setFormData({
            ...formData,
            doctorId: doctor._id,
        });
        fetchTimeSlots(doctor._id);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/v1/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const bookingData = await response.json();
                setSubmittedDetails(bookingData); // Store submitted details
                setFormData({
                    patientName: '',
                    phoneNumber: '',
                    time: '',
                    reason: '',
                    doctorId: '',
                    userId: formData.userId,
                });
                setErrorMessage('');
                setAppointmentStatus('Success');
                toast.success('Appointment booked successfully!');
                setTimeout(() => {
                    navigate('/patientdashboard');
                }, 3000);
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Failed to submit appointment');
                setAppointmentStatus('Failed');
            }
        } catch (error) {
            setErrorMessage('An unexpected error occurred. Please try again.');
            setAppointmentStatus('Failed');
        }
    };

    return (
        <section className="flex justify-center">
            <div className="flex flex-col md:flex-row w-full max-w-6xl p-5 space-y-4 md:space-x-4">
                <div className="w-full md:w-1/2 p-5">
                    <h2 className="font-bold text-lg mb-4 text-blue-500">Select a Doctor</h2>
                    {doctors && doctors.length > 0 ? (
                        <div className="flex overflow-x-auto space-x-4">
                            {doctors.map((doctor) => (
                                <div
                                    key={doctor._id}
                                    onClick={() => handleDoctorSelect(doctor)}
                                    className={`cursor-pointer p-4 border-2 rounded-lg flex-none w-64 ${formData.doctorId === doctor._id ? 'bg-blue-500 text-white' : ''
                                        }`}
                                >
                                    <div className="flex flex-col items-center space-y-2">
                                        <img
                                            src={`http://localhost:5000/${doctor.photo}`}
                                            alt={doctor.name}
                                            className="w-24 h-24 rounded-full object-cover"
                                        />
                                        <div className="text-center">
                                            <p className="font-bold text-lg">{doctor.name}</p>
                                            <p className="text-sm">{doctor.specialty || 'General'}</p>
                                            <p className="text-sm">{doctor.qualifications?.join(', ')}</p>
                                            <p className="text-sm text-gray-600">Experience: {doctor.experiences?.length || 0} years</p>
                                            <p className="text-sm text-gray-600">Rating: {doctor.averageRating || 'Not Rated'}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No available doctors</p>
                    )}
                </div>

                <div className="w-full md:w-1/2 p-5">
                    {selectedDoctor ? (
                        <>
                            <div className="border p-4 rounded-lg mb-4">
                                <h3 className="font-bold text-xl mb-2">{selectedDoctor.name}</h3>
                                <img
                                    src={`http://localhost:5000/${selectedDoctor.photo}`}
                                    alt={selectedDoctor.name}
                                    className="w-32 h-32 rounded-full mb-4 object-cover"
                                />
                                <p className="text-lg">{selectedDoctor.specialty || 'General'}</p>
                                <p className="text-sm">{selectedDoctor.qualifications?.join(', ')}</p>
                                <p className="text-sm">Experience: {selectedDoctor.experiences?.length || 0} years</p>
                                <p className="text-sm">Rating: {selectedDoctor.averageRating || 'Not Rated'}</p>
                            </div>

                            <h2 className="font-bold text-lg mb-4 text-blue-500">Book Appointment</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Patient Name"
                                    name="patientName"
                                    value={formData.patientName}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border-2 border-blue-500 rounded mt-2"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border-2 border-blue-500 rounded mt-2"
                                    required
                                />

                                <select
                                    name="time"
                                    value={formData.time}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border-2 border-blue-500 rounded mt-2"
                                    required
                                >
                                    <option value="">Select Time</option>
                                    {Array.isArray(timeSlots) && timeSlots.length > 0 ? (
                                        timeSlots.map((slot) => {
                                            // Construct a string for the time using startTime and endTime
                                            const time = `${slot.startTime} - ${slot.endTime}`;
                                            return (
                                                <option key={slot._id} value={time}>
                                                    {time} ({slot.day})
                                                </option>
                                            );
                                        })
                                    ) : (
                                        <option value="">No available times</option>
                                    )}
                                </select>


                                <textarea
                                    name="reason"
                                    placeholder="Reason for Appointment"
                                    value={formData.reason}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border-2 border-blue-500 rounded mt-2"
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white p-2 rounded mt-4"
                                >
                                    Submit
                                </button>
                            </form>
                        </>
                    ) : (
                        <p>Please select a doctor to book an appointment.</p>
                    )}

                    {appointmentStatus && (
                        <div className={`mt-4 text-center text-lg ${appointmentStatus === 'Success' ? 'text-green-600' : 'text-red-600'}`}>
                            {appointmentStatus === 'Success' ? 'Appointment booked successfully!' : 'Failed to book appointment.'}
                        </div>
                    )}

                    {submittedDetails && (
                        <div className="mt-4 text-center text-lg">
                            <h3 className="font-bold">Submitted Appointment Details:</h3>
                            <p><strong>Patient Name:</strong> {submittedDetails.patientName}</p>
                            <p><strong>Phone Number:</strong> {submittedDetails.phoneNumber}</p>
                            <p><strong>Appointment Date:</strong> {submittedDetails.appointmentDate}</p>
                            <p><strong>Time:</strong> {submittedDetails.time}</p>
                            <p><strong>Reason:</strong> {submittedDetails.reason}</p>
                        </div>
                    )}

                    {errorMessage && (
                        <div className="mt-4 text-center text-lg text-red-600">
                            {errorMessage}
                        </div>
                    )}
                </div>
            </div>

            <ToastContainer />
        </section>
    );
};

export default PatientDashboard;
