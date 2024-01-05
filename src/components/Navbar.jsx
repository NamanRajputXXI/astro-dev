"use client";
import React, { useState } from "react";
import Image from "next/image";
import DropDown from "./DropDown";
import Link from "next/link";
const Navbar = () => {
  const [isClick, setIsClick] = useState();

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="  bg-[#843FA1]   text-white ">
        <div className="  max-w-7xl mx-auto px-4">
          <div className="flex items-center w-full lg:justify-center h-16">
            <div className="hidden lg:flex w-full items-center justify-center gap-10">
              <Link href="/" className="font-medium md:text-lg rounded-lg p-2">
                Home
              </Link>
              <DropDown />

              <Link
                href="/blog"
                className="font-medium  md:text-lg   rounded-lg p-2"
              >
                Horoscopes
              </Link>
              <Link
                href="/blog"
                className="font-medium  md:text-lg   rounded-lg p-2"
              >
                Knowledge Bank
              </Link>
            </div>
            <div className="lg:hidden flex items-start">
              <button
                className="flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns=""
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns=""
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M4 6H16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* <Button display={"lg:flex hidden"} /> */}
          </div>

          {isClick && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className=" md:text-lg font-medium block rounded-lg p-2"
                >
                  Home
                </Link>

                <DropDown />
                <Link
                  href="/about"
                  className="font-medium  md:text-lg block rounded-lg p-2"
                >
                  Horoscopes
                </Link>

                <Link
                  href="/contact"
                  className="font-medium  md:text-lg block rounded-lg p-2"
                >
                  Knowledge Bank
                </Link>
                {/* <Button display={"flex"} /> */}
              </div>
            </div>
          )}
        </div>

        <hr />
      </nav>
    </>
  );
};

export default Navbar;
