// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Style.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img
              src="https://i.ibb.co.com/qygsgth/Sajek.png"
              alt="Sajek"
              className="relative rounded-lg hover:cursor-pointer transition-transform transform hover:scale-110 hover:rotate-2 hover:shadow-xl duration-500 ease-in-out hover:border-4 hover:border-[#F9A51A] hover:border-opacity-100 hover:rounded-2xl"
            />
            <h3 className="absolute top-[65%] uppercase left-1/2 transform -translate-x-1/2 text-white text-lg font-bold">
              Sajek Valley
            </h3>
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="https://i.ibb.co.com/CQSnKzF/Sreemongol.png"
              alt="Sreemongol"
              className="relative rounded-lg hover:cursor-pointer transition-transform transform hover:scale-110 hover:rotate-2 hover:shadow-xl duration-500 ease-in-out hover:border-4 hover:border-[#F9A51A] hover:border-opacity-100 hover:rounded-2xl"
            />
            <h3 className="absolute top-[65%] uppercase left-1/2 transform -translate-x-1/2 text-white text-lg font-bold">
              Sreemongol
            </h3>
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="https://i.ibb.co.com/9VPswN2/sundorbon.png"
              alt="Sunbdarbans"
              className="relative rounded-lg hover:cursor-pointer transition-transform transform hover:scale-110 hover:rotate-2 hover:shadow-xl duration-500 ease-in-out hover:border-4 hover:border-[#F9A51A] hover:border-opacity-100 hover:rounded-2xl"
            />
            <h3 className="absolute top-[65%] uppercase left-1/2 transform -translate-x-1/2 text-white text-lg font-bold">
              Sundarbans
            </h3>
        </SwiperSlide>
  
      
      </Swiper>
    </div>
  );
};

export default Banner;
