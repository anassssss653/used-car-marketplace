import { Link } from "react-router-dom";

const brands = [
  "BMW",
  "Audi",
  "Toyota",
  "Hyundai",
  "Honda",
  "Mercedes",
];

export default function Brands() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">Browse by Brand</h2>
          <p className="text-gray-500 mt-4">
            Choose your favorite car brand
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand}
              to={`/cars?brand=${brand}`}
              className="bg-gray-100 rounded-2xl p-8 text-center hover:bg-blue-600 hover:text-white transition shadow-md hover:shadow-xl"
            >
              <h3 className="text-xl font-bold">{brand}</h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}