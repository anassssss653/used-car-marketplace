import { useEffect, useState } from "react";
import API from "../services/api";
import CarCard from "../components/CarCard";

function Cars() {

  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  const [brand, setBrand] = useState("");
const [fuel, setFuel] = useState("");
const [transmission, setTransmission] = useState("");
const [sort, setSort] = useState("");

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await API.get("/cars");
      setCars(res.data);
    } catch (err) {
      console.error(err);
    }
  };

 

  const filteredCars = cars
  .filter((car) => {
    return (
      `${car.company} ${car.model}`
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (brand === "" || car.company === brand) &&
      (fuel === "" || car.fuel === fuel) &&
      (transmission === "" || car.transmission === transmission)
    );
  })
  .sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-12">
      <h1 className="text-4xl font-bold mb-8">
        Browse Used Cars
      </h1>
      <div className="bg-white shadow-xl rounded-2xl p-6 mb-10">

      <input
        type="text"
        placeholder="Search by company or model..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-96 border rounded-xl p-4 mb-10 outline-none focus:ring-2 focus:ring-green-500"
      />
      

      <div className="grid md:grid-cols-4 gap-4 mb-10">

  <select
    value={brand}
    onChange={(e) => setBrand(e.target.value)}
    className="border rounded-xl p-3"
  >
    <option value="">All Brands</option>

    {[...new Set(cars.map((car) => car.company))].map((company) => (
      <option key={company} value={company}>
        {company}
      </option>
    ))}
  </select>

  <select
    value={fuel}
    onChange={(e) => setFuel(e.target.value)}
    className="border rounded-xl p-3"
  >
    <option value="">All Fuel Types</option>
    <option>Petrol</option>
    <option>Diesel</option>
    <option>CNG</option>
    <option>Electric</option>
  </select>

  <select
    value={transmission}
    onChange={(e) => setTransmission(e.target.value)}
    className="border rounded-xl p-3"
  >
    <option value="">All Transmissions</option>
    <option>Manual</option>
    <option>Automatic</option>
  </select>

  <select
    value={sort}
    onChange={(e) => setSort(e.target.value)}
    className="border rounded-xl p-3"
  >
    <option value="">Sort by Price</option>
    <option value="low">Low to High</option>
    <option value="high">High to Low</option>
  </select>

  </div>

</div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))
        ) : (
          <p className="text-red-500 text-lg">
            No cars found.
          </p>
        )}
      </div>

    </div>
  );
}

export default Cars;