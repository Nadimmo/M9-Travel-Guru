/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react"
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import Swal from "sweetalert2"


export const Login = () => {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    const handlerSubmit = (e)=>{
        e.preventDefault()
       const form = e.target 
       const email = form.email.value;
       const password = form.password.value;
        login(email, password)
        .then(res =>{
            if(res.user){
                Swal.fire({
                    title: 'Logged In Successfully',
                    text: 'Welcome back!',
                    icon: 'success',
                    confirmButtonText: 'Continue',
                })
                form.reset()
                navigate("/")
            }
        })
       .catch(err =>{
        Swal.fire({
            title: 'Error!',
            text: err.message,
            icon: 'error',
            confirmButtonText: 'Try Again',
        })
       })
    }
 
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl">
                <h2 className="text-4xl text-left font-bold  text-gray-800 mb-6">
                    Login
                </h2>
                <form onSubmit={handlerSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email Address
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="w-full px-4 py-2 border  rounded-md focus:ring-2 focus:ring-[#F9A51A] focus:outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F9A51A] focus:outline-none"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#F9A51A] text-white py-2 px-4 rounded-md hover:bg-violet-500 transition-colors"
                    >
                        Sing in
                    </button>
                </form>
                <p className="text-sm text-gray-600 text-center mt-6">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-[#F9A51A] hover:underline">
                        Sign up
                    </Link>
                </p>
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="mx-2 text-gray-500">or</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>
                {/* social login */}
                <div>
                    <button className="w-full py-2 px-4 border rounded-2xl flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-100 transition-colors">
                        <FcGoogle className="w-6 h-6  " />
                        <span>Sign up with Google</span>
                    </button>
                    <button className="w-full mt-2 py-2 px-4 border rounded-2xl flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-100 transition-colors">
                        <FaFacebook className="w-6 h-6 text-[#3076FF]" />
                        <span>Sign up with Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login