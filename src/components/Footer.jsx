import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" max-w-screen relative flex justify-center items-center  h-fit  flex-col gap-10 bg-[#5f2a7a] pb-20 ">
      <div className="max-w-7xl  flex justify-center items-center text-white  mx-auto ">
        <div className="grid lg:grid-cols-4 py-10 md:px-10 px-5 justify-center items-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
          <div className="flex flex-col  gap-5">
            <h5 className="text-xl  font-semibold">Contact</h5>
            <ul className="flex flex-col gap-5">
              <li>
                Ground Floor-39 (Gate No.-3), Ansal Fortune Arcade, Sector-18,
                Noida - 201 301 Delhi NCR, India
              </li>
              <li>+91-9034242357</li>
              <li>astro@astrodevam.com</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h5 className="text-xl font-semibold">ASTRODEVAM</h5>
            <ul>
              <li>Blog</li>
              <li>About Us</li>
              <li>Photos & Videos Gallery</li>
              <li>Terms Conditions</li>
              <li>For Suppliers</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h5 className="text-xl font-semibold">HELP</h5>
            <ul>
              <li>Rss Feed</li>
              <li>FAQS</li>
              <li>Why US</li>
              <li>Write a Review</li>
              <li>Ask any Query</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h5 className="text-xl font-semibold">INFORMATION</h5>
            <ul>
              <li>Your Account</li>
              <li>Payment Options</li>
              <li>Privilege Member</li>
              <li>Site Map</li>
              <li>Advanced Search</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mb-20 items-center justify-center">
        <div className="flex items-center justify-center border-[1px] border-white w-[40px] h-[40px]">
          <FaFacebookF color="white" />
        </div>
        <div className="flex items-center justify-center border-[1px] border-white w-[40px] h-[40px]">
          <FaFacebookF color="white" />
        </div>
        <div className="flex items-center justify-center border-[1px] border-white w-[40px] h-[40px]">
          <FaFacebookF color="white" />
        </div>
        <div className="flex items-center justify-center border-[1px] border-white w-[40px] h-[40px]">
          <FaFacebookF color="white" />
        </div>
        <div className="flex items-center justify-center border-[1px] border-white w-[40px] h-[40px]">
          <FaFacebookF color="white" />
        </div>
        <div className="flex items-center justify-center border-[1px] border-white w-[40px] h-[40px]">
          <FaFacebookF color="white" />
        </div>
      </div>
      <div className="flex bg-[#38184a] sm:flex-row flex-col sm:gap-0 gap-5 py-4 text-white absolute bottom-0 min-w-full justify-between px-10 items-center">
        <p>Copyright © 2023. All Rights Reserved. Designed by AstroDevam.com</p>
        <div className="flex items-center justify-center gap-2">
          <FaCcVisa color="white" size={30} />
          <FaCcVisa color="white" size={30} />
          <FaCcVisa color="white" size={30} />
          <FaCcVisa color="white" size={30} />
          <FaCcVisa color="white" size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
