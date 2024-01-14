"use client"
import React from 'react';
import Navbar from './components/Navbar';
import Are_You_Vendor from './components/Are_You_Vendor';
import SmallNavbar from './components/SmallNavbar';
import MainHero from './components/MainHero';
import  MainContent from './components/MainContent';
import Main_Footer from './components/Main_Footer';

const Page = () => {

  return (

    
    <div>
       <Are_You_Vendor />
      <Navbar />
      <SmallNavbar/>
     
      {/* <div className="divider"></div> */}
     <div class="border-t mt-2 border-gray-300"></div>

      <MainHero />
      <div class="border-t mt-2 border-gray-300"></div>

      
     < MainContent/>
     <Main_Footer/> 
    </div>
  );
};

export default Page;