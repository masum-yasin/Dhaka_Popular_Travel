import React from "react";
import "../../../Component/Travel/NavBar/NavBar.css";
import women from "../../../../public/image/download.jpg";
import travel from "../../../../public/image/dhaka-logo.png";
import { PiBellRingingBold } from "react-icons/pi";

// create a array of the navbar//
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
          <div className="flex gap-10 items-center ">
            <a
              href="https://populartravel.com.bd/"
              className="btn btn-ghost text-xl"
            >
              <img className="items-center mt-3" src={travel} alt="" />
            </a>
            {/* create a loop of this  navbar and show this nav item */}
            <div className=" text-white flex gap-3">
              {navItems.map((item, i) => (
                <a className="text-xl" href="">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-4 col-lg-6">
            <div className="text-neutral-100 text-xl">
              <PiBellRingingBold />
            </div>
            <img className="w-6 h-6 rounded-full" src={women} alt="" />
          </div>
        </div>
      </nav>
      {/*Navbar Ending  */}
    </>
  );
};

export default NavBar;
