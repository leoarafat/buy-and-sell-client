import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import AdminPanel from "../../pages/Dashboard/AdminPanel/AdminPanel";
import AllUser from "../../pages/Dashboard/AllUser/AllUser";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import WelcomePage from "../../pages/Dashboard/Dashboard/WelcomePage/WelcomePage";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../pages/Dashboard/MyProduct/MyProduct";
import Payment from "../../pages/Dashboard/Payment/Payment";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import AddProduct from "../../pages/Home/Home/AllProducts/AddProduct/AddProduct";

import Category from "../../pages/Home/Home/Category/Category";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyService from "../../pages/MyService/MyService";
import Register from "../../pages/Register/Register";
import AdminRoute from "../AdminRoutes/AdminRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoutes from "../SellerRoutes/SellerRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: <PrivateRoute><Category /></PrivateRoute>
      },
      {
        path: "/dashboard",
        errorElement: <ErrorPage />,
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <WelcomePage />,
          },
          {
            path: "/dashboard/myOrder",
            element: <MyOrders />
          },
          {
            path: "/dashboard/allUser",
            element: (
              <AdminRoute>
                <AllUser />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/payment/:id",
            element: (
             <PrivateRoute><Payment /></PrivateRoute>
            ),
            loader: ({ params }) =>
              fetch(`http://localhost:5000/bookings/${params.id}`),
          },
          {
            path: "/dashboard/addProduct",
            element: <AddProduct />,
          },
          {
            path: "/dashboard/myProducts",
            element: <MyProduct />
          },
        ],
      },
    ],
  },
]);
