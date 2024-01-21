"use client";
import React, { useState, useEffect } from 'react';
import { FaRegImages } from "react-icons/fa";
import { IoFilterOutline } from 'react-icons/io5';
import SingleCrads from './SingleCrads';
import { VscListSelection } from "react-icons/vsc";
import Filter from './Filter';
import { useSearchParams } from 'next/navigation'
import { getVenueTypeById, fetchVenues, getCityById } from '../api/api';
import { useRouter } from "next/navigation";

const VenuesCards = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const searchParams = useSearchParams();

const [venueData, setVenueData] = useState({ venues: [] });
const [cityData, setCityData] = useState(null);

useEffect(() => {
  const venueType = searchParams.get('venue_id');
  const city = searchParams.get('city_id');

  const fetchData = async () => {
    try {
      if (venueType && !city) {
        // If venueType is present and city is not, fetch data based on venueType only
        const fetchedVenueData = await getVenueTypeById(venueType);

        // Log the fetched venue data
        console.log("Fetched Venue Data:", fetchedVenueData);

        // Set the fetched venue data to the state
        setVenueData({ venues: fetchedVenueData.venues });
      } else if (venueType && city) {
        // If both venueType and city are present, fetch data based on them
        const fetchedVenueData = await getVenueTypeById(venueType);

        // Log the fetched venue data
        console.log("Fetched Venue Data:", fetchedVenueData);

        // Filter venues based on the city ID from suggestedCity
        const filteredVenues = fetchedVenueData.venues.filter(venue => parseInt(city) === venue.city);
        console.log("filteredVenues", filteredVenues);

        // Set the filtered venue data to the state
        setVenueData({ venues: filteredVenues });

        const fetchedCityData = await getCityById(city);
        setCityData(fetchedCityData);
        console.log("City Data:", fetchedCityData);
      } else if (!venueType && city) {
        // If only city is present, fetch all venues and then filter based on city
        const allVenues = await fetchVenues();
        const filteredVenues = allVenues.filter(venue => parseInt(city) === venue.city);

        // Set the filtered venue data to the state
        setVenueData({ venues: filteredVenues });

        const fetchedCityData = await getCityById(city);
        setCityData(fetchedCityData);
        console.log("City Data:", fetchedCityData);
      } else {
        // If either venueType or city is not present, fetch data using fetchVenues
        const fetchedVenueData = await fetchVenues();

        // Log the fetched venue data
        console.log("Fetched Venue Data:", fetchedVenueData);

        // Set the fetched venue data to the state
        setVenueData({ venues: fetchedVenueData });
      }
    } catch (error) {
      console.error('Error fetching venue data:', error);
    }
  };

  fetchData();
}, [searchParams]);

   // Add venueType and city to the dependency array
  
   const router = useRouter();

   const handleSlideClick = (id, name) => {
     router.push(`/biz/${name}?type=1&id=${id}`);
   };
 
  


  const renderSingleCrads = () => {
    if (!venueData || !venueData.venues) {
      console.error('Invalid data or missing city information.');
      return null;
    }
  
  
    return venueData.venues.map((venue) => (
      <SingleCrads key={venue.id} data={venue} city={cityData} onClick={() => handleSlideClick(venue.id,venue.name)}/>
    ));
  };
  

  


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const numberOfVenues = venueData && venueData.venues ? venueData.venues.length : 0;
  const resultText = numberOfVenues === 1 ? 'RESULT' : 'RESULTS';

  return (
    <>
      <div className='p-2 mt-5 flex items-center px-5 justify-between'>
        {/* Left side with text */}
        <div className='flex justify-start '>
          <div className='mr-2 xl:hidden 2xl:hidden 3xl:hidden'>
            <button
              className='border border-gray-500 rounded-lg px-6 py-2 hover:bg-gray-100 text-lg font-semibold flex items-center'
              onClick={toggleDrawer}
            >
              <IoFilterOutline size={18} className='mr-2 text-black font-semibold' />
              Filter
            </button>
          </div>

          <div className="text-md mt-2 text-black font-semibold opacity-70">{numberOfVenues} {resultText}</div>
        </div>

        {/* Right side with icon */}
       
        {/* <div className=' hidden md:block lg:block xl:block  2xl:block 3xl:block'>
        <div className='flex rounded-full bg-slate-100 p-1  '>
        <div className="flex items-center py-3 px-5  mr-2 rounded-full border hover:border-3 border-grey-500 hover:shadow-2xl hover:shadow-grey-500 cursor-pointer">
         
          <div className="text-black cursor-pointer">
            <VscListSelection size={24} />
          </div>

         
          <div className="ml-2 cursor-pointer">List</div>
        </div>
        <div className="flex items-center p-3 rounded-full border hover:border-3 border-grey-500 hover:shadow-2xl hover:shadow-grey-500 cursor-pointer">
        
          <div className="text-black cursor-pointer">
            <FaRegImages size={24} />
          </div>

         
          <div className="ml-2 cursor-pointer">Images</div>
        </div>
        </div>
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-5 lg:grid-cols-3 gap-4">
        {renderSingleCrads()}
      </div>


      {/* Drawer */}
      {isDrawerOpen && (
        <div className='fixed inset-y-0 left-0 z-50 w-64 bg-white border-r overflow-y-auto transition-transform transform ease-in-out duration-100'>
          <div className='flex justify-between items-center px-4 py-2 '>
            <h2 className='text-lg font-semibold'>Filters</h2>
            <button className='text-black text-4xl opacity-70' onClick={toggleDrawer}>
              &#10005;
            </button>
          </div>
        
       <div className='p-5'>
      
       <Filter/>






        <div class="border-t  border-gray-300"></div>


        

        <div class="border-t  border-gray-300"></div>
       </div>


      
        <div>

        </div>
        </div>
      )}
    </>
  );
};

export default VenuesCards;
