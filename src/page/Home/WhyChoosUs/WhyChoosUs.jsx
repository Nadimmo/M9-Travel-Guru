import { FaDollarSign, FaHeadset, FaLock } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaDollarSign className="text-green-500 text-4xl mb-4" />,
    title: "Best Price Guarantee",
    description: "We offer competitive pricing to ensure you get the best deals for your trips.",
  },
  {
    id: 2,
    icon: <FaHeadset className="text-blue-500 text-4xl mb-4" />,
    title: "24/7 Customer Support",
    description: "Our dedicated team is here to assist you anytime, anywhere.",
  },
  {
    id: 3,
    icon: <FaLock className="text-red-500 text-4xl mb-4" />,
    title: "Secure Booking & Payment",
    description: "Your safety and security are our top priorities with advanced encryption technology.",
  },
];

const WhyChoosUs = () => {
  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoosUs;
