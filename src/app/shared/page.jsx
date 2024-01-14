'use client';
import React from 'react'
import SearchHero from './SearchHero'
import Filter from './Filter'
import VenuesCards from './VenuesCards'

import Main_Footer from '../components/Main_Footer'

 
const page = () => {
  return (
    <>
    <SearchHero/>
<div className='flex mx-4 sm:mx-20  font-[Poppins]'>
  <div className='w-1/4 hidden xl:block 2xl:block 3xl:block'>
<Filter/>
  </div>
  <div className='w-full xl:w-3/4 2xl:w-3/4 3xl:w-3/4 '>
    <VenuesCards/>
  </div>
</div>

    </>
   
  )
}

export default page