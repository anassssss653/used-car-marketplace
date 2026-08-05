import { Link } from "react-router-dom";
import { LayoutDashboard, PlusCircle, CarFront } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-10 text-green-400">
        AutoMart
      </h1>

      <nav className="space-y-4">

        <Link
          to="/admin"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/admin/add-car"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <PlusCircle size={20} />
          Add Car
        </Link>

        <Link
          to="/admin/view-cars"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <CarFront size={20} />
          View Cars
        </Link>

      </nav>

    </div>
  );
}

export default Sidebar;