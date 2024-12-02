import moment from 'moment';

import Doctor from "../models/DoctorSchema.js"; // Import the Doctor model


export const updateDoctor = async (req, res) => {
    const doctorId = req.params.doctorId;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            doctorId,
            { $set: req.body },
            { new: true }
        );

        if (!updatedDoctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedDoctor,
        });
    } catch (error) {
        console.error("Error updating doctor:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update doctor!",
            data: error.message,
        });
    }
};

export const deleteDoctor = async (req, res) => {
    const doctorId = req.params.doctorId;

    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(doctorId);

        if (!deletedDoctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Successfully deleted doctor",
        });
    } catch (error) {
        console.error("Error deleting doctor:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete doctor!",
            data: error.message,
        });
    }
};

export const getSingleDoctor = async (req, res) => {
    const doctorId = req.params.doctorId;

    try {
        const doctor = await Doctor.findById(doctorId)
            .populate("reviews")
            .select("-password");

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "No Doctor Found!",
            });
        }

        res.status(200).json({
            success: true,
            message: "Doctor Found",
            data: doctor,
        });
    } catch (error) {
        console.error("Error retrieving doctor:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve doctor!",
            data: error.message,
        });
    }
};

export const getAllDoctor = async (req, res) => {
    console.log("getAllDoctor controller reached");
    try {
        const { query } = req.query;
        let doctors;

        if (query) {
            doctors = await Doctor.find({
                isApproved: { $in: ["confirmed", "pending"] }, // Fetch both confirmed and pending doctors
                $or: [
                    { name: { $regex: query, $options: "i" } },
                    { qualifications: { $regex: query, $options: "i" } },
                ],
            }).select("name email photo qualifications isApproved");
        } else {
            doctors = await Doctor.find({ isApproved: { $in: ["confirmed", "pending"] } }) // Fetch both confirmed and pending doctors
                .select("name email photo qualifications isApproved");
        }

        res.status(200).json({
            success: true,
            message: "Doctors Found",
            data: doctors,
        });
    } catch (error) {
        console.error("Error fetching doctors:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve doctors!",
            data: error.message,
        });
    }
};

// Approve a doctor
export const approveDoctor = async (req, res) => {
    const doctorId = req.params.doctorId;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            doctorId,
            { isApproved: 'confirmed' }, // Set the doctor status to confirmed
            { new: true }
        ).select("name email photo qualifications isApproved");

        if (!updatedDoctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Doctor approved successfully",
            data: updatedDoctor,
        });
    } catch (error) {
        console.error("Error approving doctor:", error);
        res.status(500).json({
            success: false,
            message: "Failed to approve doctor",
            error: error.message,
        });
    }
};

// Reject a doctor (Update the approval status to 'not confirmed')
export const rejectDoctor = async (req, res) => {
    const doctorId = req.params.doctorId;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            doctorId,
            { isApproved: 'not confirmed' }, // Set the doctor status to not confirmed
            { new: true }
        ).select("name email photo qualifications isApproved");

        if (!updatedDoctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Doctor status updated to not confirmed",
            data: updatedDoctor,
        });
    } catch (error) {
        console.error("Error rejecting doctor:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update doctor status to not confirmed",
            error: error.message,
        });
    }
};

// Function to add a new time slot for a doctor
// Add Time Slot
export const addTimeSlot = async (req, res) => {
    console.log("add slot controller reached");
    console.log("Incoming request to add slot");
    console.log("Request Body:", req.body);
    console.log("Request Params:", req.params);

    try {
        const doctorId = req.params.doctorId;
        const { day, startTime, endTime } = req.body;

        // Basic validation for required fields
        if (!doctorId || !day || !startTime || !endTime) {
            console.log("Validation failed: Missing required fields");
            return res.status(400).json({ message: 'Doctor ID, day, start time, and end time are required.' });
        }

        // Validate that the start time and end time are in the correct format and the slot is exactly 1 hour
        const start = moment(startTime, "HH:mm"); // strict parsing to ensure exact format
        const end = moment(endTime, "HH:mm"); // strict parsing to ensure exact format

        if (!start.isValid() || !end.isValid()) {
            console.log("Validation failed: Invalid time format");
            return res.status(400).json({ message: 'Start time and end time must be valid and in the format HH:mm.' });
        }

        // Check if the time slot is exactly 1 hour long
        if (end.diff(start, 'minutes') !== 60) {
            console.log("Validation failed: Time slot is not exactly one hour");
            return res.status(400).json({ message: 'Time slots must be exactly one hour long.' });
        }

        // Retrieve the doctor from the database
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            console.log("Doctor not found with ID:", doctorId);
            return res.status(404).json({ message: 'Doctor not found.' });
        }

        // Check if the doctor already has a time slot at the requested time
        const existingSlot = doctor.timeSlots.find(slot => slot.day === day && slot.startTime === startTime);
        if (existingSlot) {
            console.log(`Time slot conflict: Doctor already has a slot on ${day} at ${startTime}`);
            return res.status(409).json({ message: `Time slot on ${day} at ${startTime} already exists.` });
        }

        // Create the new time slot object
        const newSlot = { day, startTime, endTime, available: true };
        doctor.timeSlots.push(newSlot);

        // Save the updated doctor document with the new time slot
        await doctor.save();

        console.log('Time slot added successfully:', newSlot);
        console.log("Updated time slots:", doctor.timeSlots);

        // Return a success response
        return res.status(200).json({ message: 'Time slot added successfully.', timeSlots: doctor.timeSlots });

    } catch (error) {
        console.error('Error adding time slot:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

// Get Time Slots
export const getTimeSlots = async (req, res) => {
    try {
        const doctorId = req.params.doctorId || req.body._id; // Extract doctor ID from token middleware
        const doctor = await Doctor.findById(doctorId);

        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found.' });
        }

        console.log('Get Time Slots Controller Reached:', doctor.timeSlots);
        res.status(200).json({ timeSlots: doctor.timeSlots });
    } catch (error) {
        console.error('Error fetching time slots:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

// Delete Time Slot
export const deleteTimeSlot = async (req, res) => {
    try {
        const doctorId = req.params.doctorId || req.body._id; // Extract doctor ID from token middleware
        const { slotId } = req.params;

        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found.' });
        }

        const slotIndex = doctor.timeSlots.findIndex((slot) => slot._id.toString() === slotId);
        if (slotIndex === -1) {
            return res.status(404).json({ message: 'Time slot not found.' });
        }

        const removedSlot = doctor.timeSlots.splice(slotIndex, 1);
        await doctor.save();

        console.log('Delete Time Slot Controller Reached:', removedSlot);
        res.status(200).json({ message: 'Time slot deleted successfully.', timeSlots: doctor.timeSlots });
    } catch (error) {
        console.error('Error deleting time slot:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

// Update Time Slot
export const updateTimeSlot = async (req, res) => {
    try {
        const { doctorId, day, startTime, endTime, available } = req.body; // Extract from the request body
        const { slotId } = req.params;

        if (!doctorId || !day || !startTime || !endTime || available === undefined) {
            return res.status(400).json({ message: 'Doctor ID, day, start time, end time, and availability status are required.' });
        }

        // Validate 1-hour duration
        const start = moment(startTime, "HH:mm");
        const end = moment(endTime, "HH:mm");
        if (!start.isValid() || !end.isValid() || end.diff(start, 'minutes') !== 60) {
            return res.status(400).json({ message: 'Time slots must be exactly one hour long.' });
        }

        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found.' });
        }

        const slotIndex = doctor.timeSlots.findIndex((slot) => slot._id.toString() === slotId);
        if (slotIndex === -1) {
            return res.status(404).json({ message: 'Time slot not found.' });
        }

        doctor.timeSlots[slotIndex] = { day, startTime, endTime, available }; // Update the slot
        await doctor.save();

        console.log('Update Time Slot Controller Reached:', doctor.timeSlots[slotIndex]);
        res.status(200).json({ message: 'Time slot updated successfully.', timeSlots: doctor.timeSlots });
    } catch (error) {
        console.error('Error updating time slot:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};
