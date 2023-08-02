import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import SingIn from "../Pages/SignIn/SingIn";
import SignUp from "../Pages/SignUp/SignUp";
import MyProducts from "../Pages/MyProducts/MyProducts";
import Products from "../Pages/Products/Products";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/login', element: <SingIn /> },
            { path: '/signUp', element: <SignUp /> },
            { path: '/myCart', element: <PrivateRoute><MyProducts /></PrivateRoute> },
            { path: '/products', element: <Products /> },
        ]
    },
]);


export default router