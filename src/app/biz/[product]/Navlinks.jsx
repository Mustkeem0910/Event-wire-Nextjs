import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaRegHandshake } from 'react-icons/fa6';
import Navbar_Product from './Navbar_Product';

const NavLinks = () => {
 

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-xl p-2 sm:p-5 z-10 ">
      <div className="flex items-center justify-between mx-4 sm:mx-4 xl:mx-20 2xl:mx-20 3xl:mx-20 font-[Poppins]">
   <Navbar_Product/>

        <div className="flex justify-center gap-2 hidden 2xl:block text-lg link  hover:link-black cursor-pointer">
    
        <div className='flex gap-2'>   <FaRegHandshake className="mt-2 flex text-lg" />  Hired?</div> 
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
