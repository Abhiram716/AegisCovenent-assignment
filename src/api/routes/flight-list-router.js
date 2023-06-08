import express from "express";
import {
  getFlights,
  createFlightDetails,
} from "../controllers/flight-list-controller.js";
import authenticateUser from "../middleware/authUser.js";
const router = express.Router();

router.get("/", authenticateUser, getFlights);

router.post("/create", authenticateUser, createFlightDetails);

export default router;
