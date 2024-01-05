import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = () => {
  const [isAstrologyHovered, setIsAstrologyHovered] = useState(false);
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const handleAstrologyHover = () => {
    setIsAstrologyHovered(true);
    setIsProductHovered(false);
    setIsServicesHovered(false);
  };

  const handleProductHover = () => {
    setIsAstrologyHovered(false);
    setIsProductHovered(true);
    setIsServicesHovered(false);
  };
  const handleServicesHover = () => {
    setIsAstrologyHovered(false);
    setIsProductHovered(false);
    setIsServicesHovered(true);
  };

  const handleMouseLeave = () => {
    setIsAstrologyHovered(false);
    setIsProductHovered(false);
    setIsServicesHovered(false);
  };
  return (
    <>
      <div
        className="font-medium  items-center md:text-lg flex rounded-lg p-2 relative"
        onMouseEnter={handleAstrologyHover}
        onMouseLeave={handleMouseLeave}
      >
        Astrology
        <RiArrowDropDownLine size={30} />
        {isAstrologyHovered && (
          <div className="dropdown-content font-light text-base absolute z-[100] bg-white  w-[600px] h-fit p-5 top-12 ">
            <ul className="grid text-black w-fit  md:grid-cols-3 items-center justify-center gap-4">
              <li>Education/Studies</li>
              <li>Job & Career</li>
              <li>Business</li>
              <li>Wealth, Money & Finance</li>
              <li>Property & Real Estate</li>
              <li>Love & Relationship</li>
              <li>Marriage & Compatibility</li>
              <li>Displacement, Foreign & Abroad</li>
              <li>Children Astrology</li>
              <li>Disputes & Court Cases</li>
              <li>Health, Illness & Disease</li>
              <li>Any Particular Question/Query</li>
            </ul>
          </div>
        )}
      </div>
      <div
        className="font-medium  items-center  md:text-lg flex rounded-lg p-2 relative"
        onMouseEnter={handleProductHover}
        onMouseLeave={handleMouseLeave}
      >
        Products
        <RiArrowDropDownLine size={30} />
        {isProductHovered && (
          <div className="dropdown-content font-light text-base absolute z-[100] bg-white  w-[600px] h-fit p-5 top-12 ">
            <ul className="grid text-black w-fit  md:grid-cols-3 items-center justify-center gap-4">
              <li>Education/Studies</li>
              <li>Job & Career</li>
              <li>Business</li>
              <li>Wealth, Money & Finance</li>
              <li>Property & Real Estate</li>
              <li>Love & Relationship</li>
              <li>Marriage & Compatibility</li>
              <li>Displacement, Foreign & Abroad</li>
              <li>Children Astrology</li>
              <li>Disputes & Court Cases</li>
              <li>Health, Illness & Disease</li>
              <li>Any Particular Question/Query</li>
            </ul>
          </div>
        )}
      </div>
      <div
        className="font-medium  items-center  md:text-lg flex rounded-lg p-2 relative"
        onMouseEnter={handleServicesHover}
        onMouseLeave={handleMouseLeave}
      >
        Services
        <RiArrowDropDownLine size={30} />
        {isServicesHovered && (
          <div className="dropdown-content font-light text-base absolute z-[100] bg-white  w-[600px] h-fit p-5 top-12 ">
            <ul className="grid text-black w-fit  md:grid-cols-3 items-center justify-center gap-4">
              <li>Education/Studies</li>
              <li>Job & Career</li>
              <li>Business</li>
              <li>Wealth, Money & Finance</li>
              <li>Property & Real Estate</li>
              <li>Love & Relationship</li>
              <li>Marriage & Compatibility</li>
              <li>Displacement, Foreign & Abroad</li>
              <li>Children Astrology</li>
              <li>Disputes & Court Cases</li>
              <li>Health, Illness & Disease</li>
              <li>Any Particular Question/Query</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
