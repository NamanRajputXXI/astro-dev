import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
const Header = () => {
  return (
    <header>
      <div className="max-w-7xl lg:relative py-5 md:px-10 px-5 mx-auto hidden lg:flex items-center justify-between">
        <img
          src="https://www.astrodevam.com/media/logo/websites/1/LOGO-removebg-preview.png"
          alt=""
          className="w-56 h-20"
        />
        <div className="flex items-center gap-8">
          <div className="flex items-center">
            <input
              type="text"
              className="flex border-[1px] px-3 border-purple-700 w-64 py-1 items-center "
              placeholder="Search entire store here..."
            />
            <CiSearch className="ml-[-30px]" size={20} color="" />
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center p-2 rounded-full bg-purple-700">
              <IoCall size={25} color="white" />
            </div>

            <div className="flex flex-col ">
              <p> Call Us Now</p>
              <p>+91-9034242357</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center p-2 rounded-full bg-purple-700">
              <IoBag size={25} color="white" />
            </div>

            <div className="flex flex-col ">
              <p> My Cart</p>
              <p>Items</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
