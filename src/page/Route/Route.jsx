/* eslint-disable no-unused-vars */

import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Booking from "../Booking/Booking";
import SearchPage from "../SearchPage/SearchPage";
import About from "../About/About";
import Dashboard from "./Dashboard";
import MyBooking from "../Dashboard/MyBooking/MyBooking";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import AddReview from "../Dashboard/AddReview/AddReview";
import MyDestination from "../Dashboard/MyDestination/MyDestination";
import AllBooking from "../Dashboard/AllBooking/AllBooking";
import AddPackage from "../Dashboard/AddPackage/AddPackage";
import ManagePackage from "../Dashboard/ManagePackage/ManagePackage";
import UpdatePackage from "../Dashboard/ManagePackage/UpdatePackage";

  const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
            path:"/search",
            element: <SearchPage></SearchPage>
        },
        {
            path:"/booking",
            element: <Booking></Booking>
        },
        {
            path:'/contact',
            element: <Contact></Contact>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:"/register",
            element: <Register></Register>
        }
      ]
    },
    {
      path:'/dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        // user dashboard
        {
          path:'booking',
          element: <MyBooking></MyBooking>
        },
        {
          path:'review',
          element: <AddReview></AddReview>
        },
        {
          path:'destination',
          element: <MyDestination></MyDestination>
        },
        // admin dashboard
        {
          path:'allUsers',
          element: <AllUsers></AllUsers>
        },
        {
          path:'allBooking',
          element: <AllBooking></AllBooking>
        },
        {
          path: 'addPackage',
          element: <AddPackage></AddPackage>
        },
        {
          path: 'manage',
          element: <ManagePackage></ManagePackage>
        },
        {
          path: 'updatePackage/:id',  // dynamic routes  
          element: <UpdatePackage></UpdatePackage>,  
          loader: ({params})=> fetch(`http://localhost:5000/packages/${params.id}`) 
        }
      ]
    }
  ]);

  export default Route;