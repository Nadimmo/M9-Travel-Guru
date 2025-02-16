import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const { isAdmin } = useAdmin()
  // console.log(isAdmin)
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 text-white lg:w-1/4 p-6">
        <h2 className="lg:text-2xl font-bold mb-6">Dashboard</h2>
        {/* Admin Links */}
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
      <div className="w-3/4 bg-gray-100 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
