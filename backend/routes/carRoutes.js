import express from "express";
import {
  getCars,
  getCarById,
  addCar,
  deleteCar,
  updateCar,
} from "../controllers/carController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getCars);
router.get("/:id", getCarById);

router.post("/", addCar);
router.delete("/:id", deleteCar);
router.put("/:id", updateCar);

export default router;