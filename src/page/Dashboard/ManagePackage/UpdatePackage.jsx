import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import axios from "axios";

const UpdatePackage = () => {
  const axiosPublic = useAxiosPublic();


  const handlerSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const duration = e.target.duration.value;
    const image = e.target.image.files[0];
    const offer = e.target.offer.value;

    const formData = new FormData();  
    formData.append("image", image);  
    const response = axios.post('https://api.imgbb.com/1/upload?key=425000ec487abe2b84d0bb7de5769c3a',formData)
    // Upload the image to ImgBB  
    response.then((res) => {    
      const imageUrl = res.data.data.url;    
      axiosPublic.post('/addPackages', {      
        title,      
        description,      
        price,      
        duration,      
        image: imageUrl,      
        offer,    
      })    
      .then(res =>{      
        if(res.data.insertedId){          
          Swal.fire({            
            title: 'Update Package  successfully!',            
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
      e.target.reset(); // Reset the form after submission  
    }); 
  


}

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#F9A51A" }}>
          Update a Package
        </h2>
        <form onSubmit={handlerSubmit} className="space-y-6">
          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              name="title"
              type="text"
              id="title"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
              placeholder="Enter package title"
            />
          </div>

          {/* Description Field */}
          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
              placeholder="Enter package description"
            ></textarea>
          </div>

          {/* Price Field */}
          <div>
            <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
              Price
            </label>
            <input
              name="price"
              type="number"
              id="price"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
              placeholder="Enter package price"
            />
          </div>

          {/* Duration Field */}
          <div>
            <label htmlFor="duration" className="block text-gray-700 font-medium mb-2">
              Duration
            </label>
            <input
              name="duration"
              type="text"
              id="duration"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
              placeholder="Enter duration (e.g., 3 days, 1 week)"
            />
          </div>

          {/* Image Upload Field */}
          <div>
            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
              Image
            </label>
            <input
              name="image"
              type="file"
              id="image"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
            />
          </div>

          {/* Offer Field */}
          <div>
            <label htmlFor="offer" className="block text-gray-700 font-medium mb-2">
              Offer (Optional)
            </label>
            <input
              name="offer"
              type="text"
              id="offer"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
              placeholder="Enter any offer details"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-bold bg-orange-500 hover:bg-orange-600 shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePackage;
