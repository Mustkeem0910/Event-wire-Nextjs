"use client";
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaShoppingBag, FaHome, FaStore, FaEnvelope, FaStar, FaCog, FaSignOutAlt, FaUser } from 'react-icons/fa';
import Link from 'next/link';


const Venue_Nav = () => {
  return (
    <>
      <nav className="bg-grey-100 p-2 mx-4 mt-5 sm:mx-20 font-[Poppins]  ">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left side: Company Name */}
          <div className="text-white">
            <h1 className="text-black text-2xl sm:text-lg md:text-xl font-semibold leading-10 cursor-pointer">
              COMPANY NAME
            </h1>
          </div>

          {/* Right side: Contact Icon and Phone Number */}
          <div className="flex items-center">
            {/* Contact Icon (Using React Icons) */}
            <div className="mr-2">
              <FaPhoneAlt size={20} />
            </div>

            {/* Phone Number */}
            <div>
            <p className="text-text100 text-sm md:text-base font-semibold mr-2 hidden sm:block">(91) 999-9999</p>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 border border-slate-600 rounded-full p-2">
                  <FaShoppingBag size={20} className="text-text100" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 menu bg-base-200 menu-md dropdown-content rounded-box w-72">
                <li>

                  <Link href="/profile">
                    <FaUser size={16} className="mr-2" />
                    Profile

                  </Link >
                </li>
                <li>
                  <Link href="/venue-home">
                    <FaHome size={16} className="mr-2" />
                    Home
                  </Link >
                </li>
                <li>
                  <Link href="/venue-home/storefront">
                    <FaStore size={16} className="mr-2" />
                    Storefront
                  </Link >
                </li>
                <li>
                  <Link href="/venue-home/enquiries">
                    <FaEnvelope size={16} className="mr-2" />
                    Enquiries
                  </Link >
                </li>
                <li>
                  <Link href="/venue-home/reviews">
                    <FaStar size={16} className="mr-2" />
                    Reviews
                  </Link >
                </li>
                <li>
                  <Link href="/venue-home/settings">
                    <FaCog size={16} className="mr-2" />
                    Settings
                  </Link >
                </li>
                <div className="divider"></div>
                <li>
                  <a>
                    <FaSignOutAlt size={16} className="mr-2" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </nav>
      
    </>
  );
};

export default Venue_Nav;