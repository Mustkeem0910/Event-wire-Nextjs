"use client";
import React, { useState } from 'react';
import { MdOutlineMenu, MdClose } from "react-icons/md";

const VendorNavbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <nav className="bg-grey-100 p-2 mx-4 mt-5 sm:mx-20 font-[Poppins] ">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left side: Company Name */}
          <div className="text-white">
            <h1 className="text-black text-2xl sm:text-lg md:text-xl font-semibold leading-10">
              COMPANY NAME
            </h1>
          </div>

          {/* Right side: Navigation Links */}
          <div className="flex-grow hidden md:flex gap-5 text-base leading-8 self-center whitespace-nowrap my-auto max-md:max-w-full justify-end">
            <a href="#" className="text-black cursor-pointer">
              VENDOR LOGIN
            </a>
            <a href="#" className="text-black cursor-pointer">
              FEATURES
            </a>
            <a href="#" className="text-black cursor-pointer">
              CONTACT US
            </a>
          </div>

          {/* Right side: Mobile Drawer Toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="text-black font-semibold mr-5 cursor-pointer"
              onClick={() => setShowDrawer(!showDrawer)}
            >
              <MdOutlineMenu className="text-3xl" />
            </button>
          </div>

          {/* Right side: Login and Join Now buttons (Desktop) */}
          <div className="hidden md:flex items-center">
            {/* You can add login and join now buttons here if needed */}
          </div>
        </div>
      </nav>

      {/* Responsive Side Drawer */}
      {showDrawer && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white w-64 p-4 absolute right-0 h-full overflow-y-auto">
            {/* Drawer Close Button (X Icon) */}
            <button
              className="text-black font-semibold cursor-pointer absolute top-2 right-2"
              onClick={() => setShowDrawer(false)}
            >
              <MdClose className="text-2xl" />
            </button>

            {/* Drawer Content */}
            <div className="flex flex-col gap-4">
              <a href="#" className="text-black cursor-pointer">
                VENDOR/VENUE LOGIN
              </a>
              <a href="#" className="text-black cursor-pointer">
                FEATURES
              </a>
              <a href="#" className="text-black cursor-pointer">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VendorNavbar;
