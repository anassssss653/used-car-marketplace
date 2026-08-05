import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function EditCar() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    fetchCar();
  }, []);

  const fetchCar = async () => {
    try {
      const res = await API.get(`/cars/${id}`);
      setFormData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/cars/${id}`, formData);

      alert("Car Updated Successfully ✅");

      navigate("/admin/view-cars");
    } catch (error) {
      console.log(error);
      alert("Failed to update car");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-8">Edit Car</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="model"
          placeholder="Model"
          value={formData.model}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="fuel"
          placeholder="Fuel"
          value={formData.fuel}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="transmission"
          placeholder="Transmission"
          value={formData.transmission}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="number"
          name="km"
          placeholder="KM Driven"
          value={formData.km}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="border p-3 rounded col-span-2"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          className="border p-3 rounded col-span-2"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded col-span-2"
        >
          Update Car
        </button>

      </form>
    </div>
  );
}

export default EditCar;