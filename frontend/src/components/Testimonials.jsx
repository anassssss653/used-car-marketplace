const reviews = [
  {
    name: "Rahul Sharma",
    city: "Delhi",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Excellent service! The car was exactly as described and the buying process was smooth.",
  },
  {
    name: "Ayesha Khan",
    city: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "AutoMart helped me find the perfect family car at a great price. Highly recommended!",
  },
  {
    name: "Vikram Singh",
    city: "Jaipur",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    review:
      "Professional team, transparent pricing, and a hassle-free experience from start to finish.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">What Our Customers Say</h2>

          <p className="text-gray-500 mt-4 text-lg">
            Trusted by thousands of happy customers across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg">{review.name}</h3>
                  <p className="text-gray-500">{review.city}</p>
                </div>
              </div>

              <div className="text-yellow-500 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 leading-7">
                "{review.review}"
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}