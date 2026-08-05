import { Link } from "react-router-dom";
import { ShieldCheck, CarFront, BadgeIndianRupee, Users } from "lucide-react";

function About() {
  return (
    <div className="pt-28">

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About AutoMart
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AutoMart is your trusted marketplace for buying premium quality
            used cars with complete transparency and confidence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"
            alt="Car"
            className="rounded-2xl shadow-xl"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              We started AutoMart with one simple goal—to make buying used
              cars easy, transparent, and affordable. Every vehicle listed on
              our platform is carefully verified so customers can purchase
              with confidence.
            </p>

            <p className="text-gray-600 leading-8">
              Whether you're buying your first car or upgrading to your dream
              vehicle, AutoMart helps you find the perfect match.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose AutoMart?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <ShieldCheck className="mx-auto text-blue-600 mb-4" size={45} />
              <h3 className="text-xl font-bold">Verified Cars</h3>
              <p className="text-gray-600 mt-3">
                Every car is inspected before listing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <BadgeIndianRupee className="mx-auto text-blue-600 mb-4" size={45} />
              <h3 className="text-xl font-bold">Best Prices</h3>
              <p className="text-gray-600 mt-3">
                Fair pricing with complete transparency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <CarFront className="mx-auto text-blue-600 mb-4" size={45} />
              <h3 className="text-xl font-bold">Wide Selection</h3>
              <p className="text-gray-600 mt-3">
                Choose from premium used cars.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Users className="mx-auto text-blue-600 mb-4" size={45} />
              <h3 className="text-xl font-bold">Trusted Support</h3>
              <p className="text-gray-600 mt-3">
                Friendly support throughout your journey.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-5xl font-bold text-blue-600">500+</h2>
              <p className="mt-3 text-gray-600">Cars Available</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-blue-600">10K+</h2>
              <p className="mt-3 text-gray-600">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-blue-600">99%</h2>
              <p className="mt-3 text-gray-600">Customer Satisfaction</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-blue-600">24/7</h2>
              <p className="mt-3 text-gray-600">Customer Support</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Dream Car?
          </h2>

          <p className="text-lg mb-8">
            Browse hundreds of verified used cars at the best prices.
          </p>

          <Link
            to="/cars"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Explore Cars
          </Link>

        </div>
      </section>

    </div>
  );
}

export default About;