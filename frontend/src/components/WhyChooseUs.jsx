import {
  ShieldCheck,
  BadgeIndianRupee,
  CarFront,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} className="text-blue-600" />,
    title: "Verified Cars",
    description: "Every car is inspected and verified before listing.",
  },
  {
    icon: <BadgeIndianRupee size={40} className="text-blue-600" />,
    title: "Best Prices",
    description: "Competitive pricing with complete transparency.",
  },
  {
    icon: <CarFront size={40} className="text-blue-600" />,
    title: "Wide Selection",
    description: "Choose from a large collection of quality used cars.",
  },
  {
    icon: <Headset size={40} className="text-blue-600" />,
    title: "24/7 Support",
    description: "Our team is always ready to help you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">Why Choose AutoMart?</h2>

          <p className="text-gray-500 mt-4 text-lg">
            We make buying a used car simple, safe and affordable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}