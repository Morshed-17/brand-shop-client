import { Outlet } from "react-router";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
    return (
        <div className="max-w-screen-xl mx-auto ">
            <Navbar></Navbar>
            <div className="my-12 px-5">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer position="top-center"/>
        </div>
    );
};

export default Layout;