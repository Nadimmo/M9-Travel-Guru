import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAdmin from "../../Hooks/useAdmin";

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const  navigate  = useNavigate()
  const {isAdmin } = useAdmin()

  const handlerSignOut = (e) => {
    e.preventDefault()
    logOut()
        .then(() => {
            Swal.fire({
                title: 'Logged out successfully!',
                text: 'You will be redirected to the home page.',
                icon: 'success',
                confirmButtonText: 'Continue'
            })
            navigate("/")
        })
}


  const Links = <>
    <li> <NavLink to="/"><a href="">Home</a></NavLink></li>
    <li> <NavLink to="/about"><a href="">About</a></NavLink></li>
    <li> <NavLink to="/booking"><a href="">Destination</a></NavLink></li>
    <li> <NavLink to="/search"><a href="">Search</a></NavLink></li>
    {user && isAdmin &&  <li> <NavLink to="/dashboard/addPackage"><a href="">Dashboard</a></NavLink></li>}
    {user && !isAdmin &&  <li> <NavLink to="/dashboard/booking"><a href="">Dashboard</a></NavLink></li>}
    <li> <NavLink to="/contact"><a href="">Contact</a></NavLink></li>
  </>
  return (
    <div className="navbar bg-base-100 font-sans shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Links}
          </ul>
        </div>
        <a className="ml-5 text-xl">Travel Guru</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          {Links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? <>
          <button onClick={handlerSignOut}><a className="font-bold btn bg-[#F9A51A] hover:bg-violet-500 text-white">Sign Out</a></button>
        </> : <> <NavLink to={'/login'}><a className="font-bold btn bg-[#F9A51A] hover:bg-violet-500 text-white">Login</a></NavLink></>}
      </div>
    </div>
  );
};

export default Header;
