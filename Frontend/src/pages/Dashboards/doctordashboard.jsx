import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Icon import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorDashboard = () => {
    const [appointments, setAppointments] = useState([]);  // Ensure it's an empty array by default
    const [doctorProfile, setDoctorProfile] = useState({
        name: '',
        email: '',
        qualifications: '',
        location: ''
    });
    const [slots, setSlots] = useState([]);  // Ensure it's an empty array by default
    const [newSlot, setNewSlot] = useState({
        day: '',
        startTime: '',
        endTime: '',
    });
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const availableTimes = [
        '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
    ];

    useEffect(() => {
        fetchAppointments();
        fetchDoctorProfile();
        fetchSlots(); // Fetch available time slots
    }, []);

    const fetchAppointments = () => {
        const doctorId = localStorage.getItem('doctorId');
        if (!doctorId) {
            toast.error("Doctor ID not found. Please log in again.");
            return;
        }

        fetch(`http://localhost:5000/api/v1/bookings/${doctorId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => response.json())
            .then((data) => setAppointments(data.bookings || []))  // Ensure we set an empty array if undefined
            .catch((error) => toast.error("Error fetching appointments."));
    };

    const fetchSlots = () => {
        const doctorId = localStorage.getItem('doctorId');
        fetch(`http://localhost:5000/api/v1/doctors/timeSlots/${doctorId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => response.json())
            .then((data) => setSlots(data.slots || []))  // Ensure we set an empty array if undefined
            .catch((error) => toast.error("Error fetching available slots."));
    };

    const fetchDoctorProfile = () => {
        const doctorId = localStorage.getItem('doctorId');
        fetch(`http://localhost:5000/api/v1/doctors/${doctorId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => response.json())
            .then((data) => setDoctorProfile(data))
            .catch((error) => toast.error("Error fetching doctor profile."));
    };

    const handleAddSlot = () => {
        const doctorId = localStorage.getItem('doctorId');
        if (!doctorId) {
            toast.error("Doctor ID not found. Please log in again.");
            return;
        }
        console.log("New Slot Data:", newSlot); // Check the structure and values of newSlot

        fetch(`http://localhost:5000/api/v1/doctors/timeSlots/add/${doctorId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newSlot)
        })
            .then((response) => response.json())
            .then((data) => {
                setSlots([...slots, data.slot]);
                toast.success("New slot added successfully!");
                setNewSlot({ day: '', startTime: '', endTime: '' });
            })
            .catch((error) => toast.error("Error adding slot."));
    };

    const handleProfileUpdate = () => {
        const doctorId = localStorage.getItem('doctorId');
        fetch(`http://localhost:5000/api/v1/doctors/update/${doctorId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(doctorProfile)
        })
            .then((response) => {
                if (response.ok) {
                    toast.success("Profile updated successfully!");
                    fetchDoctorProfile(); // Fetch the updated profile
                } else {
                    toast.error("Failed to update profile.");
                }
            })
            .catch((error) => toast.error("Error updating profile."));
    };

    const confirmAppointment = (appointmentId) => {
        const doctorId = localStorage.getItem('doctorId');
        if (!doctorId) {
            toast.error("Doctor ID not found. Please log in again.");
            return;
        }

        fetch(`http://localhost:5000/api/v1/bookings/confirm/${appointmentId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ doctorId, status: 'confirmed' }) // Update status to confirmed
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    toast.success("Appointment confirmed successfully.");
                    setAppointments(appointments.map((appointment) => 
                        appointment._id === appointmentId ? { ...appointment, status: 'confirmed' } : appointment
                    ));
                } else {
                    toast.error("Failed to confirm the appointment.");
                }
            })
            .catch((error) => toast.error("Error confirming appointment."));
    };

    const cancelAppointment = (appointmentId) => {
        const doctorId = localStorage.getItem('doctorId');
        if (!doctorId) {
            toast.error("Doctor ID not found. Please log in again.");
            return;
        }

        fetch(`http://localhost:5000/api/v1/bookings/cancel/${appointmentId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ doctorId, status: 'canceled' }) // Update status to canceled
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    toast.success("Appointment canceled successfully.");
                    setAppointments(appointments.filter((appointment) => appointment._id !== appointmentId)); // Remove the canceled appointment from the state
                } else {
                    toast.error("Failed to cancel the appointment.");
                }
            })
            .catch((error) => toast.error("Error canceling appointment."));
    };

    return (
        <section className="relative flex flex-col items-center p-5 space-y-8">
            <ToastContainer />
            <div className="w-full md:w-2/3 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-blue-500">Doctor Dashboard</h2>

                {/* Profile Update Section */}
                <div className="mb-4 p-4 bg-white rounded-md shadow-md">
                    <h3 className="text-xl font-semibold text-blue-500">Doctor Profile</h3>
                    <div className="flex items-center space-x-4">
                        <FaUserCircle className="text-4xl text-blue-500" />
                        <div>
                            <p className="text-xl font-semibold">{doctorProfile.name}</p>
                            <p className="text-sm text-gray-500">{doctorProfile.email}</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 mt-4">
                        <input
                            type="text"
                            placeholder="Qualifications"
                            value={doctorProfile.qualifications}
                            onChange={(e) => setDoctorProfile({ ...doctorProfile, qualifications: e.target.value })}
                            className="p-2 border rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={doctorProfile.location}
                            onChange={(e) => setDoctorProfile({ ...doctorProfile, location: e.target.value })}
                            className="p-2 border rounded-md"
                        />
                        <button
                            onClick={handleProfileUpdate}
                            className="bg-blue-500 text-white p-2 rounded-md mt-2"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>

                {/* Available Slots Section */}
                <div className="mb-4 p-4 bg-white rounded-md shadow-md">
                    <h3 className="text-xl font-semibold text-blue-500">Available Slots</h3>
                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                            <select
                                value={newSlot.day}
                                onChange={(e) => setNewSlot({ ...newSlot, day: e.target.value })}
                                className="p-2 border rounded-md w-full md:w-auto"
                            >
                                <option value="">Select Day</option>
                                {daysOfWeek.map((day, index) => (
                                    <option key={index} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={newSlot.startTime}
                                onChange={(e) => setNewSlot({ ...newSlot, startTime: e.target.value })}
                                className="p-2 border rounded-md w-full md:w-auto"
                            >
                                <option value="">Select Start Time</option>
                                {availableTimes.map((time, index) => (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={newSlot.endTime}
                                onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })}
                                className="p-2 border rounded-md w-full md:w-auto"
                            >
                                <option value="">Select End Time</option>
                                {availableTimes.map((time, index) => (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            onClick={handleAddSlot}
                            className="bg-blue-500 text-white p-2 rounded-md mt-2"
                        >
                            Add Slot
                        </button>
                    </div>
                </div>

                {/* Appointments Section */}
                <div className="mb-4 p-4 bg-white rounded-md shadow-md">
                    <h3 className="text-xl font-semibold text-blue-500">Appointments</h3>
                    {appointments.length > 0 ? (
                        <div className="space-y-4">
                            {appointments.map((appointment) => (
                                <div
                                    key={appointment._id}
                                    className="flex justify-between items-center p-4 bg-gray-100 rounded-md"
                                >
                                    <div className="flex flex-col">
                                        <span className="font-semibold">{appointment.patientName}</span>
                                        <span className="text-sm text-gray-500">{appointment.appointmentDate}</span>
                                    </div>
                                    <div className="flex space-x-4">
                                        {appointment.status === 'pending' && (
                                            <button
                                                onClick={() => confirmAppointment(appointment._id)}
                                                className="bg-green-500 text-white p-2 rounded-md"
                                            >
                                                Confirm
                                            </button>
                                        )}
                                        <button
                                            onClick={() => cancelAppointment(appointment._id)}
                                            className="bg-red-500 text-white p-2 rounded-md"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No appointments found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DoctorDashboard;
