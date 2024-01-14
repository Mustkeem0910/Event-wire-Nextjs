import React from 'react';
import Link from 'next/link';
import { TiCogOutline } from 'react-icons/ti';
import { FaRegStar } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { MdStore } from 'react-icons/md';
import { RiHome8Line } from 'react-icons/ri';


const VenueBar = () => {
  return (
    <div classname="">
    
      <div className="flex justify-between mx-4 sm:mx-20 font-[Poppins] hidden lg:flex ">
        {/* Icon 1 with Text 1 */}
        <div className="flex flex-row">
          <Link href="/venue-home">
          <div className="flex flex-col mr-10 items-center ">
      <div >
        <RiHome8Line className="text-4xl" />
      </div>
      <p className="text-center hover:text-primary">Home</p>
    </div>
          </Link>

          {/* Icon 2 with Text 2 */}
          <Link href="/venue-home/storefront">
            <div className="flex flex-col mr-10 ml-10 items-center">
              <div>
                <MdStore className="text-4xl" />
              </div>
              <p className="text-center hover:text-primary">Storefront</p>
            </div>
          </Link>

          {/* Icon 3 with Text 3 */}
          <Link href="/venue-home/enquiries">
            <div className="flex flex-col mr-10 ml-10 items-center">
              <div>
                <MdOutlineEmail className="text-4xl" />
              </div>
              <p className="text-center hover:text-primary">Enquiries</p>
            </div>
          </Link>

          {/* Icon 4 with Text 4 */}
          <Link href="/venue-home/reviews">
            <div className="flex flex-col mr-10 ml-10 items-center">
              <div>
                <FaRegStar className="text-4xl" />
              </div>
              <p className="text-center hover:text-primary">Reviews</p>
            </div>
          </Link>

          {/* Icon 5 with Text 5 */}
          <Link href="/venue-home/settings">
            <div className="flex flex-col mr-10 ml-10 items-center">
              <div>
                <TiCogOutline className="text-4xl" />
              </div>
              <p className="text-center hover:text-primary">Settings</p>
            </div>
          </Link>
        </div>
        {/* Right Side with Progress Bar */}
        <Link href="/venue-home/your-storefront">
          <div className="flex flex-col cursor-pointer">
            <p className="text-center mb-3 ">Create Your Storefront(3/3)</p>
            <div>
              <progress className="progress w-56" value={50} max="100"></progress>
            </div>
          </div>
        </Link>
      </div>
      <div className="divider hidden lg:flex "></div>

     
    </div>
  );
};

export default VenueBar;