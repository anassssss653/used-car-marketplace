import { BrowserRouter, Routes, Route , useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Dashboard from "./admin/Dashboard";
import AddCar from "./admin/AddCar";
import ViewCars from "./admin/ViewCars";
import EditCar from "./admin/EditCar";
import AdminLayout from "./admin/AdminLayout";
import Footer from "./components/Footer";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}

      <Routes>
        {/* Customer Website */}
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  }
>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="view-cars" element={<ViewCars />} />
          <Route path="edit-car/:id" element={<EditCar />} />
        </Route>
      </Routes>
      {!isAdmin && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;