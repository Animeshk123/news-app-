
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <>
          <div className="w-screen py-4 h-auto bg-blue-600 shadow-lg">
            <div className="px-4 container mx-auto">
              <NavLink to="/">
              <p className="text-white text-xl capitalize">News ApI</p>
              </NavLink>
            </div>
          </div>
        </>
        );
}

export default Navbar;
