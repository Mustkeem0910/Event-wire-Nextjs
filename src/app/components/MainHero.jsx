import React from 'react';
import Image from 'next/image';
import MainHeroImage from '../../../public/newHero.PNG';
import MainHero2Image from '../../../public/MainHero.png';
import SearchFilter from './SearchFilter';

// import { IoMdSearch, IoIosPin } from 'react-icons/io';

const MainHero = () => {
 

  return (
    <>
    <div className="flex flex-col flex-col-reverse xl:flex-row mx-0 xl:mx-20 2xl:mx-20   font-[Poppins]">
     <SearchFilter/>

      {/* Right Content */}
      <div className=" w-full lg:w-full md:w-full sm:w-full x:w-1/2 2xl:w-1/2  flex justify-end ">
  <Image src={MainHeroImage} alt="logo" className="  fill hidden xl:block  " />
  <Image src={MainHero2Image} alt="hero pic 2 " className="  object-cover   sm:block xl:hidden" />
  
</div>
    </div>


    </>
  );
};

export default MainHero;