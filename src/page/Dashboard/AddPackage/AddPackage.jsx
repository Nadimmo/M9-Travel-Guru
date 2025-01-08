
const AddPackage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#F9A51A" }}>
          Add a New Package
        </h2>
        <form className="space-y-6">
          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
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

export default AddPackage;
