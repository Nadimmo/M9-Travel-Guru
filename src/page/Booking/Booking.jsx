import '../Home/home.css'
import BookingForm from "./BookingForm"
const Booking = () => {
  return (
    <div className="back min-h-screen p-5 lg:grid grid-cols-2 gap-10 items-center bg-gray-100 font-sans">
         {/* Left Side Text */}
      <div data-aos="fade-down" className="space-y-5 ml-10 text-white">
        <h1 className="text-6xl font-bold  uppercase">Cox&apos;s Bazar</h1>
        <p className="text-lg text-left">
        Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
        </p>
      </div>
      {/* Right Side Swiper */}
      <div className="w-full h-full lg:mt-0 mt-5">
       <BookingForm></BookingForm>
      </div>
    </div>
  )
}

export default Booking