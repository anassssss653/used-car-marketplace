import { Calendar, Fuel, Gauge, Settings } from "lucide-react";
import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

      <img
        src={car.image}
        alt={car.model}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {car.company} {car.model}
        </h2>

        <p className="text-blue-600 text-2xl font-bold mt-2">
          ₹{Number(car.price).toLocaleString("en-IN")}
        </p>

        <div className="grid grid-cols-2 gap-3 mt-5 text-gray-600">

          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{car.year}</span>
          </div>

          <div className="flex items-center gap-2">
            <Fuel size={18} />
            <span>{car.fuel}</span>
          </div>

          <div className="flex items-center gap-2">
            <Settings size={18} />
            <span>{car.transmission}</span>
          </div>

          <div className="flex items-center gap-2">
            <Gauge size={18} />
            <span>{car.km}</span>
          </div>

        </div>

       <Link to={`/cars/${car._id}`}>
  <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
    View Details
  </button>
</Link>

      </div>
    </div>
  );
}

export default CarCard;