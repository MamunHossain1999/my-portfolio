import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";


const Main = () => {
    return (
        <div className="w-full mx-auto bg-black text-white">
          <div className=""> <Navbar/></div>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Main;