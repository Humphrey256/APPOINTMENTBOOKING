import express from "express";
import {
    createBooking,
    getUserBookings,
    getDoctorBookings,
    updateBookingStatus,
<<<<<<< HEAD
    confirmBooking,
    rescheduleBooking,
    clearBookingHistory,
=======
    confirmbooking,
    reschedulebooking,
    clearbookingHistory,
>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3
    getAllBookings, // Add this import for getting all bookings
} from "../controllers/bookingController.js";

const router = express.Router();

// Book an appointment
router.post("/", createBooking);  // Ensure this route is correctly defined

// Get all bookings for a specific user
router.get("/user/:userId", getUserBookings);

// Get all bookings for a specific doctor
router.get("/:doctorId", getDoctorBookings);  // Updated route for clarity

// Get all bookings
router.get("/", getAllBookings);  // New route to get all bookings

// Update booking status (for confirming appointment)
router.patch("/update/:bookingId", updateBookingStatus);  // Keep the route to update status

// Confirm appointment
<<<<<<< HEAD
router.patch("/confirm/:bookingId", confirmBooking);  // This route remains the same

// Reschedule appointment
router.patch("/reschedule/:bookingId", rescheduleBooking);  // This route remains the same

// Clear appointment history for a specific doctor
router.delete("/clearhistory/:doctorId", clearBookingHistory);
=======
router.patch("/confirm/:bookingId", confirmbooking);  // This route remains the same

// Reschedule appointment
router.patch("/reschedule/:bookingId", reschedulebooking);  // This route remains the same

// Clear appointment history for a specific doctor
router.delete("/clearhistory/:doctorId", clearbookingHistory);
>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3

export default router;
