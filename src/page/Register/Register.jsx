/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useContext } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const {loginWithGoogle ,user, register, profileUpdate } = useContext(AuthContext)
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()
  // console.log(name)

  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const name = firstName + " " + lastName;
    const userInfo = {
      name: name,
      email: email,
    }
    // console.log(userInfo)
    // Perform server-side validation here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    register(email, password)
      .then(res => {
        profileUpdate(name)
        axiosPublic.post('/users', userInfo)
          .then(res => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Created user successfully",
                showConfirmButton: false,
                timer: 1500
              });
            }
            form.reset()
            navigate('/')
          })
      })
      .catch(err => {
        alert(err.message)
      })
  }

  const handlerGoogleLogin = (e) => {
    e.preventDefault()
    loginWithGoogle()
     .then(res => {
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
        }
        axiosPublic.post('/users', userInfo)
         .then(res => {
           if (res.data.insertedId) {
             Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Created user successfully",
               showConfirmButton: false,
               timer: 1500
             });
           }else{
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Created user successfully",
              showConfirmButton: false,
              timer: 1500
            });
           }
           form.reset()
           navigate('/')
         })
        navigate('/')
      })
     .catch(err => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1500
        })
      })
  }



  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">

      <div  data-aos="flip-right" className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handlerSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              First Name
            </label>
            <input
              name="firstName"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F9A51A] focus:outline-none"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Last Name
            </label>
            <input
              name="lastName"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F9A51A] focus:outline-none"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F9A51A] focus:outline-none"
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
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F9A51A] focus:outline-none"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#F9A51A] text-white py-2 px-4 rounded-md hover:bg-violet-500 transition-colors"
          >
            Create Account
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#F9A51A] hover:underline">
            Log in
          </Link>
        </p>
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        {/* social login */}
        <div>
          <button onClick={handlerGoogleLogin} className="w-full py-2 px-4 border rounded-2xl flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-100 transition-colors">
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
  );
};

export default Register
