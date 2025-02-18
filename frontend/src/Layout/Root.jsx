import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-Jost">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
