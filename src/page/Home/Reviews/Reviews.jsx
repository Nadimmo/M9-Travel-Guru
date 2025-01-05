import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core styles
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles
import { Navigation } from 'swiper/modules';
import useReview from '../../Hooks/useReview';

const Testimonials = () => {
  const {reviews} = useReview()
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          What Our Users Say
        </h2>
        <Swiper
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Number of slides to show at a time
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides on small screens
            },
            1024: {
              slidesPerView: 3, // 3 slides on larger screens
            },
          }}
          navigation={true} // Enable navigation arrows
          pagination={{ clickable: true }} // Enable pagination dots
          loop={true} // Loop the slides infinitely
          modules={[Navigation]} // Add Navigation module here
          className="swiper-container"
        >
          {reviews.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800">{testimonial.name}</h3>
                    <p className="font-semibold text-sm text-gray-800">{testimonial.designation}</p>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: testimonial.rating }).map((_, idx) => (
                        <FaStar key={idx} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
