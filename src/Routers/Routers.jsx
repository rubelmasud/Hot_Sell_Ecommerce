import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import SingIn from "../Pages/SignIn/SingIn";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/login', element: <SingIn /> },
            { path: '/signUp', element: <SignUp /> },
        ]
    },
]);


export default router