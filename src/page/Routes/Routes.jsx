/* eslint-disable no-unused-vars */

import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Search from "../Search/Search";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Register from "../Register/Register";

  const routes = createBrowserRouter([
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
            element: <Search></Search>
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

  export default routes