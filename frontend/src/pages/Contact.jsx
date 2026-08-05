import { Mail, Phone, MapPin, Clock } from "lucide-react";

function Contact() {
  return (
    <div className="pt-28">

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about buying or selling a car? Our team is always
            ready to help you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
            <MapPin className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-600">
              New Delhi, India
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
            <Phone className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600">
              +91 98765 43210
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
            <Mail className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">
              support@automart.com
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
            <Clock className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Business Hours</h3>
            <p className="text-gray-600">
              Mon - Sat <br />
              9:00 AM - 7:00 PM
            </p>
          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white shadow-xl rounded-2xl p-10">

            <h2 className="text-3xl font-bold mb-8 text-center">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-2xl overflow-hidden shadow-xl">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=New+Delhi&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;