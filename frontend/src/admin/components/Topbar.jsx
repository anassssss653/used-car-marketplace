import { Bell, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Topbar() {

  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/admin/login");
};

  return (
    <div className="flex justify-between items-center bg-white shadow-md px-8 py-5">

      <div>
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome to AutoMart Admin Panel
        </p>
      </div>

      <div className="flex items-center gap-6">

        <Bell
          size={24}
          className="cursor-pointer text-gray-600"
        />

        <div className="flex items-center gap-2">

          <UserCircle size={38} />

          <div>

            <h2 className="font-semibold">
              Admin
            </h2>

            <p className="text-sm text-gray-500">
              AutoMart
            </p>

          </div>
        </div>

          <button
  onClick={handleLogout}
  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
>
  Logout
</button>
      </div>
    </div>
  );
}

export default Topbar;