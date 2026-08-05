import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    fuel: {
      type: String,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    km: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Car", carSchema);