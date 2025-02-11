import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#000212] text-white">
      <img
        src="https://i.ibb.co.com/B08FxFc/404.webp"
        alt="Error"
        className="w-2/3 max-w-lg"
      />
      <h1 className="text-3xl font-bold text-red-600 mt-4">Page Not Found</h1>
      <p className="text-white mt-2">Oops! The page you are looking for does not exist.</p>
      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-transform duration-300 ease-in-out hover:animate-bounce">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
