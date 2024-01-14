import React from 'react'
import Link from 'next/link';

const list = () => {
  return (
   <>

      {/* Menu Div */}
      <div className="menu shadow bg-base-300 w-56  rounded-box mt-5">
        <ul>
          <li><Link href="/venue-home/storefront" className="text-text100 hover:bg-primary hover:text-white mb-2">
       Basic Information
    </Link></li>
          
          
          
          <li> <Link href="/venue-home/storefront/gallery" className="text-text100 hover:bg-primary hover:text-white">
       Add Gallery
    </Link></li>
          <li><a className="text-text100 text hover:bg-primary hover:text-white mb-2">Item 1</a></li>
          
          <li><a className="text-text100 text hover:bg-primary hover:text-white ">Item 3</a></li>
          <li><a className="text-text100 text hover:bg-primary hover:text-white mb-2">Item 1</a></li>
          
          <li><a className="text-text100 text hover:bg-primary hover:text-white ">Item 3</a></li>
        </ul>
      </div>

      
      
      </>
   
  )
}

export default list