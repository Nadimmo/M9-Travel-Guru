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
        // admin dashboard
        {
          path:'allUsers',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);

  export default Route;