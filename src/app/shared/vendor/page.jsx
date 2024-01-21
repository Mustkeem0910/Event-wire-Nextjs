"use client";
import React, { useEffect, useState } from 'react';
import { FaRegImages } from 'react-icons/fa';
import { VscListSelection } from 'react-icons/vsc';
import { IoFilterOutline } from 'react-icons/io5';
import SearchHero from '../SearchHero';
import SingleVendorCards from './SingleVendorCards'
import { useSearchParams } from 'next/navigation'
import { getVendorTypeById,getCityById, getVendors, getVendorTypes} from '@/app/api/api';
import Autosuggest from 'react-autosuggest';
import { useRouter } from "next/navigation";

const Page = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
const [cityData, setCityData] = useState(null);
const [vendorTypeName, setVendorTypeName] = useState(null);
const searchParams = useSearchParams();

const [vendorData, setVendorData] = useState({ vendors: [] });

useEffect(() => {
  
  const vendorType = searchParams.get('vendor_id');
  const city = searchParams.get('city_id');
  const fetchData = async () => {
    try {
      if (vendorType) {
        // Fetch vendor data only if vendor_id is present in the URL
        const fetchedVendorData = await getVendorTypeById(vendorType);
        setVendorTypeName(fetchedVendorData.name);
        // Log the fetched vendor data
        console.log("Fetched Vendor Data:", fetchedVendorData);

        // If city_id is present, filter vendors based on the city ID from the URL
        if (city) {
          const filteredVendors = fetchedVendorData.vendors.filter(vendor => parseInt(city) === vendor.city);
          console.log(filteredVendors);
          // Set the filtered vendor data to the state
          setVendorData({ vendors: filteredVendors });
        } else {
          // If city_id is not present, set all vendor data to the state
          setVendorData({ vendors: fetchedVendorData.vendors });
        }
      } else if (city) {
        // Fetch city data only if city_id is present in the URL
        const fetchedCityData = await getCityById(city);
        setCityData(fetchedCityData);
        console.log("City Data:", fetchedCityData);
      } else {
        // Fetch vendor data using the getVendors function when both vendor_id and city_id are not present
        const fetchedVendorData = await getVendors();
        setVendorData({ vendors: fetchedVendorData });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();

  console.log('city:', city);
  console.log('search:', vendorType);
}, [searchParams]); // Add vendorType and city to the dependency array

  const handleDateChange = (day) => {
    // Handle the selected date here
    setSelectedDate(day);
  };
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  

  const router = useRouter();
  const [vendorTypes, setVendorTypes] = useState([]);
  useEffect(() => {
    const fetchVendorTypes = async () => {
      try {
        // Fetch venue types from the API using the imported function
        const data = await getVendorTypes();
        setVendorTypes(data);
      } catch (error) {
        console.error("Error fetching venue types:", error);
      }
    };

    fetchVendorTypes();
  }, []);


  const cuisines = [
    'American',
    'Asian',
    'BBQ',
    'Caribbean',
    'French',
    'Italian',
    'Local',
    'Mediterranean',
    'Mexican',
    'Middle Eastern',
    'Seafood',
    'Southern',
    'Spanish',
];


const cateringServices = [
  'Breakfast / Brunch',
  'Buffet',
  'Cake Cutting',
  'Cocktail Reception',
  'Custom Menu',
  'Hors d\'oeuvres',
  'Plated',
  'Server(s)',
  'Stations',
  'Tastings',
];

const renderSingleCrads = () => {
  if (!vendorData || !vendorData.vendors) {
    console.error('Invalid data or missing city information.');
    return null;
  }

  return vendorData.vendors.map((vendor) => (
    <SingleVendorCards key={vendor.id} data={vendor} city={cityData} name={vendorTypeName} />
  ));
};


const numberOfVendors = vendorData && vendorData.vendors ? vendorData.vendors.length : 0;
const resultText = numberOfVendors === 1 ? 'RESULT' : 'RESULTS';


const [regionValue, setRegionValue] = useState('');
const [cityValue, setCityValue] = useState('');

// Mock data for suggestions (replace with your actual data)
const regionSuggestions = ['Region1', 'Region2', 'Region3'];
const citySuggestions = ['City1', 'City2', 'City3'];

// Define the input props for autosuggest
const regionInputProps = {
  placeholder: 'Region',
  value: regionValue,
  onChange: (event, { newValue }) => setRegionValue(newValue),
};

const cityInputProps = {
  placeholder: 'City/Town',
  value: cityValue,
  onChange: (event, { newValue }) => setCityValue(newValue),
};

// Implement the getSuggestions function to filter suggestions based on user input
const getSuggestions = (value, suggestionsArray) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : suggestionsArray.filter(
        suggestion => suggestion.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// Render the suggestions
const renderSuggestion = suggestion => <div>{suggestion}</div>;

  return (
    <>
      <SearchHero />

      {/* Heading */}
      <div className='flex mx-4 mt-5 sm:mx-20 justify-between font-[Poppins]'>
        {/* Left side with text */}
        <div className='flex justify-start '>
          <div className='mr-2'>
            <button
              className='border border-gray-500 rounded-lg px-6 py-2 hover:bg-gray-100 text-lg font-semibold flex items-center'
              onClick={toggleDrawer}
            >
              <IoFilterOutline size={18} className='mr-2 text-black font-semibold' />
              Filter
            </button>
          </div>

          <div className="text-md mt-2 text-black font-semibold opacity-70">{numberOfVendors} {resultText}</div>
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

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4  mx-4 mt-5 sm:mx-20 font-[Poppins]'>
      {renderSingleCrads()}
      </div>
     

      {/* Drawer */}
      {isDrawerOpen && (
        <div className='fixed inset-y-0 left-0 z-50  w-64 sm:w-96 bg-white border-r overflow-y-auto transition-transform transform ease-in-out duration-300'>
          <div className='flex justify-between items-center px-4 py-2 '>
            <h2 className='text-lg font-semibold'>Filters</h2>
            <button className='text-black text-4xl opacity-70' onClick={toggleDrawer}>
              &#10005;
            </button>
          </div>
        
       <div className='p-5'>
       <div className="collapse collapse-arrow mt-5">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-medium">Vendor type</div>
        <div className="collapse-content pr-20">
          <ul class=" flex flex-col">
            <li 
            class="inline-flex items-center font-semibold gap-x-2 py-3 px-4 text-sm font-medium   text-gray-800 rounded-lg hover:border-gray-200 hover:border hover:bg-primary hover:text-white focus:border-gray-200 focus:border"
            onClick={() => {
              console.log("Clicked!");
              router.push(
                `/shared/vendor`
              );
              toggleDrawer();
            }}>
              All types
            </li>
            {vendorTypes.map((type) => (
              <li
                key={type.id}
                onClick={() => {
                  console.log("Clicked!");
                  router.push(`/shared/vendor?vendor_id=${type.id}`);
                  toggleDrawer();
                }}
                className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 rounded-lg hover:border-gray-200 hover:border hover:bg-primary hover:text-white focus:border-gray-200 focus:border"
              >
                {type.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div class="border-t  border-gray-300"></div>
       <div className="collapse collapse-arrow mt-3">
  <input type="checkbox" /> 
  <div className="collapse-title text-md font-medium text-black  hover:text-primary focus:text-primary">
  Region
  </div>
  <div className="collapse-content ">
   {/* Search for Region */}
 
   <Autosuggest
        suggestions={getSuggestions(regionValue, regionSuggestions)}
        onSuggestionsFetchRequested={({ value }) => setRegionValue(value)}
        onSuggestionsClearRequested={() => setRegionValue('')}
        getSuggestionValue={value => value}
        renderSuggestion={renderSuggestion}
        inputProps={regionInputProps}
      />
          {/* Search for City/Town */}
          <div className="text-sm font-semibold mt-3 mb-3">City/Town</div>
          <Autosuggest
        suggestions={getSuggestions(cityValue, citySuggestions)}
        onSuggestionsFetchRequested={({ value }) => setCityValue(value)}
        onSuggestionsClearRequested={() => setCityValue('')}
        getSuggestionValue={value => value}
        renderSuggestion={renderSuggestion}
        inputProps={cityInputProps}
      />
        </div>
          

       
          
</div>



<div class="border-t  border-gray-300"></div>

{/* <div className="collapse collapse-arrow mt-5">
            <input type="checkbox" />
            <div className="collapse-title text-md font-medium">
                Cuisine
            </div>
            <div className="collapse-content pr-20">
                <ul className="flex flex-col">
                    {cuisines.map((cuisine, index) => (
                        <li
                            key={index}
                            className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-black rounded-lg "
                        >
                            <input type="checkbox" id={`cuisine-${index}`} />
                            <label htmlFor={`cuisine-${index}`}>{cuisine}</label>
                        </li>
                    ))}
                </ul>
            </div>
        </div> */}

        


        {/* <div className="collapse collapse-arrow mt-5">
            <input type="checkbox" />
            <div className="collapse-title text-md font-medium">
                Catering Services
            </div>
            <div className="collapse-content pr-20">
                <ul className="flex flex-col">
                    {cateringServices.map((service, index) => (
                        <li
                            key={index}
                            className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-black rounded-lg "
                        >
                            <input type="checkbox" id={`catering-service-${index}`} />
                            <label htmlFor={`catering-service-${index}`}>{service}</label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>   */}

       
       </div>


      
        <div>

        </div>
        </div>
      )}
    </>
  );
};

export default Page;
