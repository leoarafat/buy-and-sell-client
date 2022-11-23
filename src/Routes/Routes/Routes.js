import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyService from "../../pages/MyService/MyService";
import Register from "../../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/', element:<Main/>,children:[
            {
                path: '/', element: <Home/>
            },
            {
                path: '/', element: <Home/>
            },
            {
                path: '/login', element: <Login/>
            },
            {
                path: '/register', element: <Register/>
            },
            {
                path: '/myService', element: <MyService/>
            },
            {
                path: '/blog', element: <Blog/>
            },
        ]
    }
])