import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function AdminLayout() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;