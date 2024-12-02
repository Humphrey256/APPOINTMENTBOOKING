<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Icon import
=======
import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorDashboard = () => {
<<<<<<< HEAD
    const [appointments, setAppointments] = useState([]);  // Ensure it's an empty array by default
=======
    const [appointments, setAppointments] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3
    const [doctorProfile, setDoctorProfile] = useState({
        name: '',
        email: '',
        qualifications: '',
        location: ''
    });
<<<<<<< HEAD
    const [slots, setSlots] = useState([]);  // Ensure it's an empty array by default
    const [newSlot, setNewSlot] = useState({
        day: '',
        startTime: '',
        endTime: '',
=======
    const [showProfileEdit, setShowProfileEdit] = useState(false);
    const [isProfileComplete, setIsProfileComplete] = useState(false); // Track profile completeness
    const [slots, setSlots] = useState([]); // For storing available slots
    const [newSlot, setNewSlot] = useState({
        date: '',
        day: '',
        startTime: '',
        endTime: '',
        available: true
>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3
    });
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const availableTimes = [
        '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
    ];

    useEffect(() => {
<<<<<<< HEAD
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

=======
        console.log('DoctorDashboard component loaded');
        fetchAppointments();
        fetchDoctorProfile();
        fetchSlots(); // Fetch the slots available for the doctor
    }, []);

>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3
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
<<<<<<< HEAD
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
=======
                    return fetchDoctorProfile(); // Fetch the updated profile
                } else {
                    throw new Error('Failed to update profile');
                }
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
                toast.error("Error updating profile!");
            });
    };

    const fetchAppointments = () => {
        const doctorId = localStorage.getItem('doctorId');
        if (!doctorId) {
            setErrorMessage("Doctor ID not found. Please log in again.");
            return;
        }

        fetch(`http://localhost:5000/api/v1/bookings/${doctorId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                if (!response.ok) throw new Error('No appointments found');
                return response.json();
            })
            .then((data) => {
                setAppointments(data.bookings);
            })
            .catch((error) => {
                setErrorMessage(error.message);
                console.error('Error fetching appointments:', error);
            });
    };

    const fetchDoctorProfile = () => {
        const doctorId = localStorage.getItem('doctorId');
        fetch(`http://localhost:5000/api/v1/doctors/${doctorId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch doctor profile');
                }
            })
            .then((data) => {
                setDoctorProfile(data);
                // Check if the profile is complete
                if (data.qualifications && data.location) {
                    setIsProfileComplete(true);
                }
            })
            .catch((error) => {
                console.error('Error fetching doctor profile:', error);
            });
    };

    // Fetch available time slots
    const fetchSlots = () => {
        const doctorId = localStorage.getItem('doctorId');
        fetch(`http://localhost:5000/api/v1/doctor/timeSlots/${doctorId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => response.json())
            .then((data) => setSlots(data.slots))
            .catch((error) => {
                setErrorMessage('Error fetching slots.');
                console.error('Error fetching slots:', error);
            });
    };

    const updateAppointmentStatus = (appointmentId, status) => {
        fetch(`http://localhost:5000/api/v1/bookings/update/${appointmentId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        })
            .then((response) => {
                if (response.ok) {
                    toast.success(`Appointment ${status === 'confirmed' ? 'confirmed' : 'canceled'} successfully!`);
                    setAppointments((prev) =>
                        prev.map((appointment) =>
                            appointment._id === appointmentId
                                ? { ...appointment, status }
                                : appointment
                        )
                    );
                } else {
                    throw new Error(`Failed to update appointment status to ${status}`);
                }
            })
            .catch((error) => {
                console.error(`Error updating appointment status to ${status}:`, error);
            });
    };

    const confirmAppointment = (appointmentId) => {
        updateAppointmentStatus(appointmentId, 'confirmed');
    };

    const cancelAppointment = (appointmentId) => {
        updateAppointmentStatus(appointmentId, 'canceled');
    };

    const clearAppointmentsHistory = () => {
        const doctorId = localStorage.getItem('doctorId');
        if (!doctorId) {
            setErrorMessage("Doctor ID not found. Please log in again.");
            return;
        }

        fetch(`http://localhost:5000/api/v1/bookings/clearhistory/${doctorId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                if (response.ok) {
                    setAppointments([]); // Clear local state
                    toast.success("Appointment history cleared successfully!");
                } else {
                    throw new Error('Failed to clear appointment history');
                }
            })
            .catch((error) => {
                setErrorMessage(error.message);
                toast.error("Error clearing appointment history!");
            });
    };

    const handleAddSlot = () => {
>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3
        const doctorId = localStorage.getItem('doctorId');
        if (!doctorId) {
            toast.error("Doctor ID not found. Please log in again.");
            return;
        }

<<<<<<< HEAD
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
=======
        fetch(`http://localhost:5000/api/v1/doctor/timeSlots/${doctorId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newSlot)
        })
            .then((response) => response.json())
            .then((data) => {
                setSlots((prevSlots) => [...prevSlots, data.slot]); // Update slots with new slot
                toast.success("New slot added successfully!");
                setNewSlot({ day: '', startTime: '', endTime: '' }); // Clear the new slot fields
            })
            .catch((error) => {
                console.error('Error adding slot:', error);
                toast.error("Error adding slot.");
            });
>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3
    };

    return (
        <section className="relative flex flex-col items-center p-5 space-y-8">
            <ToastContainer />
            <div className="w-full md:w-2/3 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-blue-500">Doctor Dashboard</h2>

<<<<<<< HEAD
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
=======
                {/* Display error message if it exists */}
                {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

                {/* Complete Profile Form */}
                {!isProfileComplete && (
                    <div className="mb-4 p-4 bg-yellow-100 rounded-md">
                        <h3 className="font-semibold text-xl text-blue-500">Complete Your Profile</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Qualifications"
                                value={doctorProfile.qualifications}
                                onChange={(e) => setDoctorProfile({ ...doctorProfile, qualifications: e.target.value })}
                                className="w-full p-2 border rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="Location"
                                value={doctorProfile.location}
                                onChange={(e) => setDoctorProfile({ ...doctorProfile, location: e.target.value })}
                                className="w-full p-2 border rounded-md"
                            />
                            <button onClick={handleProfileUpdate} className="bg-blue-500 text-white p-2 rounded-md mt-2">
                                Complete Profile
                            </button>
                        </div>
                    </div>
                )}

                {/* Doctor Profile */}
                <div className="mb-4 p-4 bg-white rounded-md shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-blue-500">Doctor Profile</h3>
                        <button
                            onClick={() => setShowProfileEdit(!showProfileEdit)}
                            className="text-blue-500 flex items-center"
                        >
                            <FaUserCircle size={20} className="mr-2" />
                            Edit Profile
                        </button>
                    </div>

                    {showProfileEdit ? (
                        <div>
                            <input
                                type="text"
                                placeholder="Update Qualifications"
                                value={doctorProfile.qualifications}
                                onChange={(e) => setDoctorProfile({ ...doctorProfile, qualifications: e.target.value })}
                                className="w-full p-2 border rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="Update Location"
                                value={doctorProfile.location}
                                onChange={(e) => setDoctorProfile({ ...doctorProfile, location: e.target.value })}
                                className="w-full p-2 border rounded-md"
                            />
                            <button
                                onClick={handleProfileUpdate}
                                className="bg-blue-500 text-white p-2 rounded-md mt-2"
                            >
                                Save Changes
                            </button>
                        </div>
                    ) : (
                        <div>
                            <p><strong>Name:</strong> {doctorProfile.name}</p>
                            <p><strong>Email:</strong> {doctorProfile.email}</p>
                            <p><strong>Qualifications:</strong> {doctorProfile.qualifications}</p>
                            <p><strong>Location:</strong> {doctorProfile.location}</p>
                        </div>
                    )}
                </div>

                {/* Available Time Slots */}
                <div className="mb-4 p-4 bg-white rounded-md shadow-md">
                    <h3 className="text-xl font-semibold text-blue-500">Available Time Slots</h3>
                    <div className="mb-4">

                        <select
                            value={newSlot.day}
                            onChange={(e) => setNewSlot({ ...newSlot, day: e.target.value })}
                            className="w-full p-2 border rounded-md mb-2"
                        >
                            <option value="">Select Day</option>
                            {daysOfWeek.map((day) => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>

                        <select
                            value={newSlot.startTime}
                            onChange={(e) => setNewSlot({ ...newSlot, startTime: e.target.value })}
                            className="w-full p-2 border rounded-md mb-2"
                        >
                            <option value="">Select Start Time</option>
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </select>

                        <select
                            value={newSlot.endTime}
                            onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })}
                            className="w-full p-2 border rounded-md"
                        >
                            <option value="">Select End Time</option>
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </select>

>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3
                        <button
                            onClick={handleAddSlot}
                            className="bg-blue-500 text-white p-2 rounded-md mt-2"
                        >
                            Add Slot
                        </button>
                    </div>
<<<<<<< HEAD
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
=======

                    <div className="space-y-2">
                        {slots.map((slot, index) => (
                            <div key={index} className="p-2 border-b">
                                <p><strong>Day:</strong> {slot.day}</p>
                                <p><strong>Time:</strong> {slot.startTime} - {slot.endTime}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Appointments */}
            <div className="w-full md:w-2/3 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-blue-500">Appointments</h2>
                <div>
                    {appointments.length === 0 ? (
                        <p>No appointments</p>
                    ) : (
                        appointments.map((appointment) => (
                            <div key={appointment._id} className="flex justify-between items-center mb-4">
                                <div>
                                    <p><strong>Patient:</strong> {appointment.patientName}</p>
                                    <p><strong>Reason:</strong> {appointment.reason}</p>
                                    <p><strong>Status:</strong> {appointment.status}</p>
                                </div>
                                <div>
                                    {appointment.status === 'pending' ? (
                                        <>
                                            <button
                                                onClick={() => confirmAppointment(appointment._id)}
                                                className="bg-green-500 text-white p-2 rounded-md mr-2"
                                            >
                                                Confirm
                                            </button>
                                            <button
                                                onClick={() => cancelAppointment(appointment._id)}
                                                className="bg-red-500 text-white p-2 rounded-md"
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    ) : null}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Clear Appointments History */}
                <div className="mt-4 text-center">
                    <button
                        onClick={clearAppointmentsHistory}
                        className="bg-red-500 text-white p-2 rounded-md"
                    >
                        Clear Appointment History
                    </button>
                </div>
>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3
            </div>
        </section>
    );
};

export default DoctorDashboard;
