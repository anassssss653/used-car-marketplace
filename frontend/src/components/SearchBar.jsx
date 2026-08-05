import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">

      <input
        type="text"
        placeholder="Search by company or model..."
        className="flex-1 px-5 py-4 rounded-xl text-black outline-none"
      />

      <button className="bg-green-500 hover:bg-green-600 px-6 py-4 rounded-xl flex items-center justify-center gap-2 font-semibold transition">
        <Search size={20} />
        Search
      </button>

    </div>
  );
}

export default SearchBar;