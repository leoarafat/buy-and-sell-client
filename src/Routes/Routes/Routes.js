import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

import Category from "../../pages/Home/Home/Category/Category";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyService from "../../pages/MyService/MyService";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/myService",
        element: <MyService />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: <Category />,
      },
      {
        path: "/dashboard",
        errorElement: <ErrorPage/>,
        element: 
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>, children: [
            {
                path: '/dashboard', element: <MyOrders/>
            }
          ]
        
      },
    ],
  },
]);
