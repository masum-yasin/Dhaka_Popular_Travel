import React from "react";
import "../../../Component/Travel/NavBar/NavBar.css";
import women from "../../../../public/image/download.jpg";
import bellring from "../../../../public/image/images.png";
import { TiPlus } from "react-icons/ti";

const navItems = [
  "Dashboard",
  "Meter Price",
  "Custom Price",
  "Calender",
  "Reports",
];

const NavBar = () => {
  return (
    <>
      {/* Navbar Start */}
      <nav className="bg-gray-900">
        <div className="container m-auto flex  h-16 navbar items-center justify-between row ">
          <div className=" text-white flex gap-3">
            {navItems.map((item, i) => (
              <a className="text-xl" href="">
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-4 col-lg-6">
            <img className="w-6 h-6 rounded-full" src={women} alt="" />
            <img className="w-6 h-6 rounded-full" src={bellring} alt="" />
          </div>
        </div>
      </nav>
      {/*Navbar Ending  */}
    </>
  );
};

export default NavBar;
