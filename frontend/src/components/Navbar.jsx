import { Link, NavLink } from "react-router-dom";
import { Menu, X, CarFront } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition duration-300 ${
      isActive
        ? "text-blue-400"
        : "text-white hover:text-blue-400"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <CarFront className="text-blue-500" size={34} />
         <span className="text-3xl font-bold tracking-wide text-white">
            AutoMart
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-lg">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/cars" className={navLinkClass}>
              Cars
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Admin Button */}
        <Link
          to="/admin"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
        >
          Admin
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-6 space-y-5 text-lg">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/cars"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Cars
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            to="/admin"
            className="block bg-blue-600 text-center py-3 rounded-xl"
            onClick={() => setOpen(false)}
          >
            Admin
          </NavLink>
        </div>
      )}
    </nav>
  );
}