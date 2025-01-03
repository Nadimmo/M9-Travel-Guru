/* eslint-disable no-unused-vars */

import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Booking from "../Booking/Booking";
import SearchPage from "../SearchPage/SearchPage";

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
  ]);

  export default Route;