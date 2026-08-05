import { useEffect, useState } from "react";
import StatCard from "./components/StatCard";
import API from "../services/api";

function Dashboard() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await API.get("/cars");
      setCars(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Total Cars
  const totalCars = cars.length;

  // Total Inventory Value
  const totalValue = cars.reduce(
    (sum, car) => sum + Number(car.price),
    0
  );

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">

        <StatCard
          title="Total Cars"
          value={totalCars}
          color="bg-blue-600"
        />

        <StatCard
          title="Available Cars"
          value={totalCars}
          color="bg-green-600"
        />

        <StatCard
          title="Total Value"
          value={`₹${totalValue.toLocaleString("en-IN")}`}
          color="bg-purple-600"
        />

      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-md p-8">

        <h2 className="text-2xl font-bold mb-3">
          Welcome 👋
        </h2>
        
        <p className="text-gray-600">
          Manage your used cars from the sidebar.
        </p>

      </div>
      <div className="mt-10 bg-white rounded-2xl shadow-md p-6">
  <h2 className="text-2xl font-bold mb-6">Recent Cars</h2>

  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="text-left p-3">Image</th>
          <th className="text-left p-3">Company</th>
          <th className="text-left p-3">Model</th>
          <th className="text-left p-3">Price</th>
        </tr>
      </thead>

      <tbody>
        {cars.slice(0, 5).map((car) => (
          <tr key={car._id} className="border-b hover:bg-gray-50">
            <td className="p-3">
              <img
                src={car.image}
                alt={car.model}
                className="w-20 h-14 object-cover rounded"
              />
            </td>

            <td className="p-3">{car.company}</td>

            <td className="p-3">{car.model}</td>

            <td className="p-3 font-semibold text-green-600">
              ₹{Number(car.price).toLocaleString("en-IN")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    </>
  );
}

export default Dashboard;