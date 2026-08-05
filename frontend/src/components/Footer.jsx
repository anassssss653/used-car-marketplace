import {
  CarFront,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CarFront className="text-blue-500" size={32} />
              <h2 className="text-3xl font-bold">
                AutoMart
              </h2>
            </div>

            <p className="text-gray-400 leading-7">
              Buy premium quality used cars from trusted sellers across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

           <div className="space-y-3">
  <Link
    to="/"
    className="block hover:text-blue-500 duration-300"
  >
    Home
  </Link>

  <Link
    to="/cars"
    className="block hover:text-blue-500 duration-300"
  >
    Cars
  </Link>

  <Link
    to="/about"
    className="block hover:text-blue-500 duration-300"
  >
    About
  </Link>

  <Link
    to="/contact"
    className="block hover:text-blue-500 duration-300"
  >
    Contact
  </Link>
</div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <MapPin />
                <span>Delhi, India</span>
              </div>

              <div className="flex gap-3">
                <Phone />
                <span>+91 xxxxxxxxxx</span>
              </div>

              <div className="flex gap-3">
                <Mail />
                <span>support@automart.com</span>
              </div>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5">
           
            
            </div>
          </div>

        </div>

        <hr className="border-gray-700 my-10" />

        <p className="text-center text-gray-400">
          © 2026 AutoMart. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}