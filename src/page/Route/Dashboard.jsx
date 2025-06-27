import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Dashboard = () => {
  const { isAdmin } = useAdmin()
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isAdmin)
  return (
    <div className="min-h-screen ">
      <button className='md:hidden p-3 bg-gradient-to-b from-blue-600 to-blue-400 text-white  hover:bg-gray-700 transition duration-300' onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={24} />
      </button>
      <div className="flex min-h-screen">
        {/* Admin Links */}
        <div className={`bg-gradient-to-b from-blue-600 to-blue-400 text-white lg:w-1/4 p-6 
      ${isOpen ? 'block' : 'hidden'} md:block`}>
          {
            isAdmin ? <> <div>
              <ul className="space-y-3">
                <NavLink
                  to="/dashboard/addPackage"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-blue-700 rounded-md shadow-lg"
                      : "block px-4 py-2 hover:bg-blue-500 rounded-md transition duration-200"
                  }
                >
                  Add Package
                </NavLink>
                <NavLink
                  to="/dashboard/manage"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-blue-700 rounded-md shadow-lg"
                      : "block px-4 py-2 hover:bg-blue-500 rounded-md transition duration-200"
                  }
                >
                  Manage Package
                </NavLink>
                <NavLink
                  to="/dashboard/allBooking"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-blue-700 rounded-md shadow-lg"
                      : "block px-4 py-2 hover:bg-blue-500 rounded-md transition duration-200"
                  }
                >
                  All Booking
                </NavLink>
                <NavLink
                  to="/dashboard/allUsers"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-blue-700 rounded-md shadow-lg"
                      : "block px-4 py-2 hover:bg-blue-500 rounded-md transition duration-200"
                  }
                >
                  Manage User
                </NavLink>
                <NavLink
                  to="/dashboard/userRequests"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-blue-700 rounded-md shadow-lg"
                      : "block px-4 py-2 hover:bg-blue-500 rounded-md transition duration-200"
                  }
                >
                  User Request
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-blue-700 rounded-md shadow-lg"
                      : "block px-4 py-2 hover:bg-blue-500 rounded-md transition duration-200"
                  }
                >
                  Home
                </NavLink>
              </ul>
            </div></> : <> {/* User Links */}
              <div className="mb-8">
                <ul className="space-y-3">
                  <NavLink
                    to="/dashboard/booking"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 bg-blue-700 rounded-md shadow-lg"
                        : "block px-4 py-2 hover:bg-blue-500 rounded-md transition duration-200"
                    }
                  >
                    My Booking
                  </NavLink>
                  <NavLink
                    to="/dashboard/review"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 bg-blue-700 rounded-md shadow-lg"
                        : "block px-4 py-2 hover:bg-blue-500 rounded-md transition duration-200"
                    }
                  >
                    Add Review
                  </NavLink>
                  <NavLink
                    to="/dashboard/destination"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 bg-blue-700 rounded-md shadow-lg"
                        : "block px-4 py-2 hover:bg-blue-500 rounded-md transition duration-200"
                    }
                  >
                    My Destination
                  </NavLink>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 bg-blue-700 rounded-md shadow-lg"
                        : "block px-4 py-2 hover:bg-blue-500 rounded-md transition duration-200"
                    }
                  >
                    Payment History
                  </NavLink>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 bg-blue-700 rounded-md shadow-lg"
                        : "block px-4 py-2 hover:bg-blue-500 rounded-md transition duration-200"
                    }
                  >
                    Home
                  </NavLink>
                </ul>
              </div>
            </>
          }
        </div>
        {/* Content Area */}
        <div className="lg:w-3/4 bg-gray-100  lg:p-8 mx-auto w-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
