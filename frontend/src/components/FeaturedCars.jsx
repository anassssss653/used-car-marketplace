import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function FeaturedCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await API.get("/cars");
      setCars(res.data.slice(0, 6));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold">
            Featured Cars
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Discover our premium collection of quality used cars.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {cars.map((car) => (
            <div
              key={car._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {car.company} {car.model}
                </h3>

                <div className="mt-4 space-y-2 text-gray-600">

                  <p>📅 {car.year}</p>

                  <p>⛽ {car.fuel}</p>

                  <p>⚙ {car.transmission}</p>

                  <p>🛣 {car.km.toLocaleString()} km</p>

                </div>

                <h2 className="text-3xl font-bold text-blue-600 mt-5">
                  ₹{car.price.toLocaleString("en-IN")}
                </h2>

                <Link
                  to={`/cars/${car._id}`}
                  className="block mt-6 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
                >
                  View Details
                </Link>

              </div>
            </div>
          ))}

        </div>

        <div className="text-center mt-12">

          <Link
            to="/cars"
            className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
          >
            View All Cars
          </Link>

        </div>

      </div>

    </section>
  );
}