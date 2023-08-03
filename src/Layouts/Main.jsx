import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";


const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;