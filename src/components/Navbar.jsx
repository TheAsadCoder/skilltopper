import React from "react";
import { FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-3xl h-[220px] overflow-hidden mx-auto border-b-1 border-white bg-gray-700 relative radius-top">
      <img
        src="bg.png"
        alt="background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-300 opacity-50 z-10"></div>
      <div className="absolute flex flex-col items-center inset-0 z-20 px-3">
        <img
          src="logo.png"
          alt=""
          className="z-30 -mt-3 w-[220px] h-[80px] sm:w-[40%] sm:h-[45%] logo"
        />
        <h1 className="text-[16px] -mt-3  sm:text-[20px] font-bold text-white drop-shadow-[3px_3px_0px_#000] text-center">
          Registration Form of Frontend Development Course
        </h1>
        <div className="flex space-x-4 mt-4 ">
          <div className="bg-white p-2 rounded-full cursor-pointer shadow-lg shadow-gray-700">
            <a
              href="https://www.linkedin.com/in/muhammad-asad-coder/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900"
            >
              <i className="text-2xl">
                <FaLinkedin />
              </i>
            </a>
          </div>

          <div className="bg-white p-2 rounded-full cursor-pointer shadow-lg shadow-gray-700">
            <a
              href="https://www.youtube.com/@codingsikhao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              <i className="text-2xl">
                <FaYoutube />
              </i>
            </a>
          </div>

          <div className="bg-white p-2 rounded-full cursor-pointer shadow-lg shadow-gray-700">
            <a
              href="https://www.facebook.com/profile.php?id=61551117972893"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <i className="text-2xl">
                <FaFacebook />
              </i>
            </a>
          </div>
        </div>


        <div className="absolute text-[13px] sm:text-[16px] flex justify-between  radius-top bottom-0  gap-1 rd  bg-[#2f2f2f]">
          <NavLink to="/">
            <button className="border-button px-2 sm:px-4 py-2 cursor-pointer text-white  ">
              Registration
            </button>
          </NavLink>
          <NavLink to="/id-card">
            <button className="border-button px-2 sm:px-4 py-2 cursor-pointer text-white">
              Download ID Card
            </button>
          </NavLink>
          <NavLink to="/result">
            <button className="border-button px-2 sm:px-4 py-2 cursor-pointer text-white active:bg-indigo-500">
              Results
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
