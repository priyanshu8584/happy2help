import { Link } from "react-router-dom";
import { AboutUs } from "./AboutUs";

export const AppBar = () => {
  return (
    <div className="text-sm bg-orange-300 h-12 flex px-3 justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 text-black">
          <Link to={"/home"} className="hover:text-orange-700">Home</Link>
          <Link to={"/AboutUs"} className="hover:text-orange-700">About Us</Link>
          <Link to={"/fundraisers"} className="hover:text-orange-700">Fundraisers</Link>
          <Link to={"/contact"} className="hover:text-orange-700">Contact Us</Link>
          <Link to={"/donate"} className="hover:text-orange-700">Donate Now</Link>
        </div>
        <div className="flex space-x-4 text-black">
          <button className="bg-orange-700 px-2 py-1 text-white rounded-lg">Login</button>
        </div>
      </div>
    </div>
  );
};
