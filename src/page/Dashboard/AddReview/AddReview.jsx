import Rating from 'react-rating';
import { FaStar, FaRegStar } from 'react-icons/fa';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState } from 'react';

const AddReview = () => {
    const axiosPublic = useAxiosPublic()
    const [ratings, setRating] = useState(0)

    const handleRatingChange  = (newRating)=>{
        setRating(newRating)
    }


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Collect data using e.target.[name].value
    const name = form.name.value;
    const designation = form.designation.value;
    const rating = ratings || 0; // Default to 0 if no rating
    const image = form.image.files[0]; // Get the uploaded file
    const quote = form.message.value;

    // Create form data for image upload
    const formData = new FormData();
    formData.append("image", image);

    const response = axios.post('https://api.imgbb.com/1/upload?key=425000ec487abe2b84d0bb7de5769c3a',formData)
    // Upload the image to ImgBB
    response.then((res) => {
      const imageUrl = res.data.data.url;
      axiosPublic.post('/reviews', {
        name,
        designation,
        rating,
        image: imageUrl,
        quote,
      })
      .then(res =>{
        if(res.data.insertedId){
            Swal.fire({
                title: 'Review submitted successfully!',
                text: 'Thank you for your feedback.',
                icon: 'success',
              });
        }
      })
      .catch(err =>{
        Swal.fire({
            title: 'Error!',
            text: err.message,
            icon: 'error',
          });
      })
      form.reset(); // Reset the form after submission
    });

    // Log the collected data
    console.log({ name, designation, rating, image, quote });

    // You can add logic to send this data to the backend
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-10 px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Submit Your Review</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Designation Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 focus:ring focus:ring-[#F9A51A] focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="designation"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                placeholder="Enter your designation"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 focus:ring focus:ring-[#F9A51A] focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Rating and Image Upload Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="rating" className="block text-sm font-semibold text-gray-600 mb-1">
                Rating
              </label>
              <Rating
                emptySymbol={<FaRegStar className="text-gray-400 text-xl" />}
                fullSymbol={<FaStar className="text-[#F9A51A] text-xl" />}
                className="flex justify-start"
                name="rating"
                onChange={ handleRatingChange}
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-semibold text-gray-600 mb-1">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 focus:ring focus:ring-[#F9A51A] focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Review Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Review Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your review here..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 focus:ring focus:ring-[#F9A51A] focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#F9A51A] transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
