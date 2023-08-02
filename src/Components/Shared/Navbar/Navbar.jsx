import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from 'react-icons/fa';

const Navbar = () => {

    const menuItems =
        <div className="md:flex gap-5 items-center text-[16px] font-medium ">
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : "default"} > Home </NavLink>
            </li>
            <li>
                <NavLink to="/colleges" className={({ isActive }) => isActive ? "active" : "default"}>Shop </NavLink>
            </li>
            <li>
                <NavLink to="/admission" className={({ isActive }) => isActive ? "active" : "default"}>Blog </NavLink>
            </li>
            <li>
                <NavLink to="/admission" className={({ isActive }) => isActive ? "active" : "default"}>About </NavLink>
            </li>
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <FaCartPlus size={20} />
                    <span className="badge badge-sm indicator-item">0</span>
                </div>
            </label>
            <Link to='/login' className='text-lg  bg-slate-400 w-fit px-4 py-1 text-white '>SignIn </Link>
        </div>


    return (
        <div className="navbar shadow-box">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52 bg-white">
                        {menuItems}
                    </ul>
                </div>
                <a href="">
                    <img className="w-20 h-20 " src="https://i.ibb.co/7JHsfPh/hot-sale-template-23-2147514438-removebg-preview.png" alt="hot-sale-template-23-2147514438-removebg-preview" border="0"></img>
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;