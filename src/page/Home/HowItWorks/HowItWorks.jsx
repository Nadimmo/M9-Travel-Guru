import { FaSearch, FaBalanceScale, FaPlane } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSearch className="text-blue-500 text-4xl mb-4" />,
    title: "Search for a Trip",
    description: "Find your perfect destination with ease using our intuitive search tool.",
  },
  {
    id: 2,
    icon: <FaBalanceScale className="text-blue-500 text-4xl mb-4" />,
    title: "Compare Options",
    description: "Evaluate multiple packages and choose the best one for your needs.",
  },
  {
    id: 3,
    icon: <FaPlane className="text-blue-500 text-4xl mb-4" />,
    title: "Book and Enjoy",
    description: "Complete your booking and get ready for an unforgettable experience.",
  },
];

const HowItWorks = () => {
  return (
    <div data-aos="fade-up"
      className="bg-gray-50 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {step.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
