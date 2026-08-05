import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
        <div className="max-w-3xl text-white">

          <p className="uppercase tracking-[6px] text-blue-400 mb-4">
            Premium Used Cars
          </p>

          <h1 className="text-6xl font-extrabold leading-tight">
            Find Your
            <span className="text-blue-500"> Dream Car </span>
            Today
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Explore certified used cars from trusted sellers at
            unbeatable prices.
          </p>

          <div className="mt-10 flex gap-4">


            <Link
              to="/cars"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition shadow-lg hover:scale-105"
            >
              Explore Cars
            </Link>

            <Link
              to="/contact"
             className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition hover:scale-105"
            >
              Contact Us
            </Link>

          </div>

           <div className="flex gap-10 mt-12">
  <div>
    <h2 className="text-3xl font-bold">500+</h2>
    <p className="text-gray-300">Cars Available</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold">10K+</h2>
    <p className="text-gray-300">Happy Customers</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold">99%</h2>
    <p className="text-gray-300">Customer Satisfaction</p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}

export default Hero;