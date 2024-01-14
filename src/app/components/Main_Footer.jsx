import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs"; 
const Main_Footer = () => {
  return (
    
         <div >
        <footer className="footer   p-10 mt-10  bg-base-200 text-base-content">
  <nav>
    <header className=" text-lg text-black font-semibold  hover:text-primary ">Company name</header> 
    <a href="#" className="link link-hover hover:link-primary">Weddings Home</a>
    <a href="#" className="link link-hover hover:link-primary">About Us</a>
    <a href="#" className="link link-hover hover:link-primary">Editorial Team & Policies</a>
    <a href="#" className="link link-hover hover:link-primary">Nondiscrimination</a>
    <a href="#" className="link link-hover hover:link-primary">Careers</a>
    <a href="#" className="link link-hover hover:link-primary">Press Center</a>
    <a href="#" className="link link-hover hover:link-primary">Advertising</a>
    <a href="#" className="link link-hover hover:link-primary">Terms of Use</a>
    <a href="#" className="link link-hover hover:link-primary">Privacy Policy</a>
    <a href="#" className="link link-hover hover:link-primary">Do Not Sell My Info</a>
    <a href="#" className="link link-hover hover:link-primary">CA Privacy</a>
    <a href="#" className="link link-hover hover:link-primary">Web Accessibility</a>
    <a href="#" className="link link-hover hover:link-primary">Contact Us</a>

    <header className="text-lg text-black font-semibold mt-4 hover:text-primary">Find Vendors</header>
    <a href="#" className="link link-hover hover:link-primary">Directory</a>
    <a href="#" className="link link-hover hover:link-primary">Reviews</a>
    <a href="#" className="link link-hover hover:link-primary">Couples’ Choice Awards®</a>
   

  </nav> 

  <nav>
  <header className="text-lg text-black font-semibold mt-4 hover:text-primary">Planning Tools</header>
    <a href="#" className="link link-hover hover:link-primary"> Invitations</a>
    <a href="#" className="link link-hover hover:link-primary">Checklist</a>
    <a href="#" className="link link-hover hover:link-primary">Guest List</a>
    <a href="#" className="link link-hover hover:link-primary">Budget</a>
    <a href="#" className="link link-hover hover:link-primary">Vendor Manager</a>
    <a href="#" className="link link-hover hover:link-primary">Seating Chart</a>
    <a href="#" className="link link-hover hover:link-primary">Hotel Blocks</a>
    <a href="#" className="link link-hover hover:link-primary">Cost Guide</a>
    <a href="#" className="link link-hover hover:link-primary">Help</a>
  </nav>

  <nav>
  <header className="text-lg text-black font-semibold mt-4 hover:text-primary   ">Are you a vendor?</header>
    <a href="#" className="link link-hover hover:link-primary">Learn about Company Name for Business</a>
    <a href="#" className="link link-hover hover:link-primary">Visit vendor support</a>
    

  </nav>
 
  <nav>
    <header className="footer-title hover:text-primary">Follow us on</header> 
    <div className="grid grid-flow-col gap-4">
  <a><FaFacebook size={24} className='hover:text-primary' /></a>
  <a><BsTwitterX size={24} className='hover:text-primary' /></a>
  <a><FaInstagram size={24}  className='hover:text-primary' /></a>
  <a><FaPinterest size={24}  className='hover:text-primary' /></a>
</div>
  </nav>
</footer>
<footer className="footer footer-center p-4 bg-base-300 ">
  <aside>
    <p className='text-black font-[Poppins] '>Copyright © 2023 - All right reserved by COMAPANY NAME Industries Ltd</p>
  </aside>
</footer>
    </div>
  
  )
}

export default Main_Footer