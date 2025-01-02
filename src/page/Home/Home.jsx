import { FaArrowRight } from "react-icons/fa";
import Banner from "./Banner/Banner";
import './home.css'
import { Link } from "react-router-dom";
import PopularDestinations from "./PopularDestination/PopuularDestinations";
import FeaturedTravelPackages from "./FeaturedTravelPackages/FeaturedTravelPackages";
import HowItWorks from "./HowItWorks/HowItWorks";
import WhyChoosUs from "./WhyChoosUs/WhyChoosUs";
const Home = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="back min-h-screen p-5 lg:grid grid-cols-2 gap-10 items-center bg-gray-100 font-sans">
        {/* Left Side Text */}
        <div className="space-y-5 ml-10 text-white">
          <h1 className="text-6xl font-bold  uppercase">Cox&apos;s Bazar</h1>
          <p className="text-lg text-left">
            Cox&apos;s Bazar is a city, fishing port, tourism center, and  <br />district headquarters in southeastern Bangladesh. It <br /> is  famous mostly for its long natural sandy beach.
          </p>
          <Link to='/booking' className="btn px-6 py-3 outline-none border-none bg-[#F9A51A] text-black  font-semibold rounded-lg hover:bg-violet-500 hover:text-white transition duration-300">
            Booking <FaArrowRight className="inline-block ml-2" />
          </Link>
        </div>
        {/* Right Side Swiper */}
        <div className="w-full h-full lg:mt-0 mt-5">
          <Banner></Banner>
        </div>
      </div>
      {/* // Popular Destinations */}
      <PopularDestinations></PopularDestinations>
      {/* Featured travel package */}
      <FeaturedTravelPackages></FeaturedTravelPackages>
      {/* how it works */}
      <HowItWorks></HowItWorks>
      {/* why choose use */}
      <WhyChoosUs></WhyChoosUs>
    </div>

  );
};

export default Home;
