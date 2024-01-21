"use client"
import React from 'react';
import { FiPhoneOutgoing } from "react-icons/fi";

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 py-4 px-3 xl:hidden 2xl:hidden 3xl:hidden  flex justify-between items-center   gap-4">
     
     
      {/* Combined Div with Button and Contact Icon */}
      <div className='border border-primary border-1 flex hover:bg-primary text-white flex-col justify-center px-3 py-4 rounded-md transition duration-300'>
          <FiPhoneOutgoing className="mr-2 text-primary hover:text-white transition duration-100" />
        </div>


        <button className="btn bg-primary flex-grow text-white py-3 btn btn-md px-4 rounded cursor-pointer hover:bg-primary hover:text-white border border-primary transition duration-300">
          Request Pricing
        </button>

       
    
    </div>
  );
};

export default BottomNavBar;
