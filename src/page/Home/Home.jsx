import { FaArrowRight } from "react-icons/fa";
import Banner from "../Banner/Banner";
import './home.css'
const Home = () => {
  return (
    <div className="back min-h-screen p-5 lg:grid grid-cols-2 gap-10 items-center bg-gray-100 font-sans">
      {/* Left Side Text */}
      <div className="space-y-5 ml-10 text-white">
        <h1 className="text-6xl font-bold  uppercase">Cox&apos;s Bazar</h1>
        <p className="text-lg text-left">
          Cox&apos;s Bazar is a city, fishing port, tourism center, and  <br />district headquarters in southeastern Bangladesh. It <br /> is  famous mostly for its long natural sandy beach.
        </p>
        <button className="px-6 py-3 bg-[#F9A51A] text-black  font-semibold rounded-lg hover:bg-violet-500 hover:text-white transition duration-300">
          Booking <FaArrowRight className="inline-block ml-2" />
        </button>
      </div>
      {/* Right Side Swiper */}
      <div className="w-full h-full lg:mt-0 mt-5">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
