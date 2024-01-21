import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaRegHandshake } from 'react-icons/fa6';


const Navbar_Product = () => {
    const sections = ['about', 'faq', 'reviews', 'pricing', 'map'];
  return (
    <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-500">
    {sections.map((section) => (
      <ScrollLink
        key={section}
        to={section}
        spy={true}
        smooth={true}
        offset={-100} // Adjust offset based on your layout
        duration={500}
        className="inline-block px-4 py-1 m-2 border border-gray-300 text-lg rounded-md cursor-pointer hover:border-2 hover:border-primary hover:bg-blue-100 cursor-pointer"
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </ScrollLink>
    ))}
  </div>
  )
}

export default Navbar_Product