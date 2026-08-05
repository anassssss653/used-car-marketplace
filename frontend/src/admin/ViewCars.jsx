import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Search, Plus } from "lucide-react";
import API from "../services/api";

function ViewCars() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const res = await API.get("/cars");
    setCars(res.data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this car?"
    );
    
    if (!confirmDelete) return;

    await API.delete(`/cars/${id}`);

    fetchCars();
  };

  const filteredCars = cars.filter(
  (car) =>
    car.company.toLowerCase().includes(search.toLowerCase()) ||
    car.model.toLowerCase().includes(search.toLowerCase())
);


  return (
   
    <div className="max-w-7xl mx-auto p-8">

  <div className="flex justify-between items-center mb-8">

    <h1 className="text-4xl font-bold">
      All Cars
    </h1>

    <Link
      to="/admin/add-car"
      className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700"
    >
      <Plus size={20}/>
      Add Car
    </Link>

  </div>

  <div className="relative mb-6">

    <Search
      className="absolute left-3 top-3 text-gray-400"
      size={20}
    />

    <input
      type="text"
      placeholder="Search by company or model..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className="w-full border rounded-lg pl-10 pr-4 py-3"
    />

  </div>

  <div className="bg-white rounded-xl shadow overflow-hidden">

    <table className="w-full">

      <thead className="bg-slate-900 text-white">

        <tr>

          <th className="p-4">Image</th>
          <th>Company</th>
          <th>Model</th>
          <th>Year</th>
          <th>Price</th>
          <th>Status</th>
          <th>Actions</th>

        </tr>

      </thead>

      <tbody>

        {filteredCars.map((car)=>(

          <tr
            key={car._id}
            className="border-b hover:bg-gray-50 transition"
          >

            <td className="p-3">
              <img
                src={car.image}
                alt={car.model}
                className="w-24 h-16 object-cover rounded-lg"
              />
            </td>

            <td>{car.company}</td>

            <td>{car.model}</td>

            <td>{car.year}</td>

            <td className="font-semibold text-green-600">
              ₹ {Number(car.price).toLocaleString("en-IN")}
            </td>

            <td>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Available
              </span>
            </td>

            <td>

              <div className="flex gap-3 justify-center">

                <Link
                  to={`/admin/edit-car/${car._id}`}
                  className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                  <Pencil size={18}/>
                </Link>

                <button
                  onClick={()=>handleDelete(car._id)}
                  className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
                >
                  <Trash2 size={18}/>
                </button>

              </div>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>
  );
}

export default ViewCars;