import { useState } from "react";
import API from "../services/api";

function AddCar() {
  const [formData, setFormData] = useState({
    company: "",
    model: "",
    year: "",
    fuel: "",
    transmission: "",
    km: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/cars", formData);

      alert("Car Added Successfully ✅");

      setFormData({
        company: "",
        model: "",
        year: "",
        fuel: "",
        transmission: "",
        km: "",
        price: "",
        image: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Add Used Car
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid gap-5"
      >

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="model"
          placeholder="Model"
          value={formData.model}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="fuel"
          placeholder="Fuel Type"
          value={formData.fuel}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="transmission"
          placeholder="Transmission"
          value={formData.transmission}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          name="km"
          placeholder="Kilometers Driven"
          value={formData.km}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          className="border p-3 rounded-lg"
        />

        <button
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
        >
          Add Car
        </button>

      </form>

    </div>
  );
}

export default AddCar;