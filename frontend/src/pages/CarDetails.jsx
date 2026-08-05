import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetchCar();
  }, []);

  const fetchCar = async () => {
    try {
      const res = await API.get(`/cars/${id}`);
      setCar(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!car) {
    return (
      <h1 className="text-center mt-20 text-3xl">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <img
        src={car.image}
        alt={car.model}
        className="w-full h-[500px] object-cover rounded-3xl"
      />

      <h1 className="text-5xl font-bold mt-10">
        {car.company} {car.model}
      </h1>

      <p className="text-green-600 text-4xl font-bold mt-4">
        ₹ {car.price.toLocaleString()}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10 text-xl">
        <p><strong>Year:</strong> {car.year}</p>
        <p><strong>Fuel:</strong> {car.fuel}</p>
        <p><strong>Transmission:</strong> {car.transmission}</p>
        <p><strong>KM Driven:</strong> {car.km}</p>
      </div>

      <p className="mt-10 text-lg">
        {car.description}
      </p>

    </div>
  );
}

export default CarDetails;