import express from "express";
import {
    getAllReviews,
    createReview,
} from "../controllers/reviewController.js";
<<<<<<< HEAD
import { authenticate, restrict } from "../auth/verifyToken.js";
=======
import { authenticate, restrict } from "../auth/verifytoken.js";
>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3

const router = express.Router({ mergeParams: true });

router
    .route("/")
    .get(getAllReviews)
    .post(authenticate, restrict(["patient"]), createReview);

export default router;