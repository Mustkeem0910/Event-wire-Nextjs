"use client";
import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import { BsSearch } from 'react-icons/bs';
import { IoLocationOutline } from "react-icons/io5";
import { getVendorTypes,getVenueTypes, getCities,getStates } from '../api/api';
import { useRouter } from 'next/navigation'

const SearchFilter = () => {
  const router = useRouter();

  const [venueValue, setVenueValue] = useState('');
  const [venueSuggestions, setVenueSuggestions] = useState([]);
  
  const [locationValue, setLocationValue] = useState('');
  const [locationSuggestions, setLocationSuggestions] = useState([]);


  const [selectedSuggestion, setSelectedSuggestion] = useState({
    title: '',
    suggestion: null,
  });
  const [selectedLocationSuggestion, setSelectedLocationSuggestion] = useState(null);

  const [venueTypes, setVenueTypes] = useState([]);
  const [vendorTypes, setVendorTypes] = useState([]);


  useEffect(() => {
    // Fetch venue and vendor types when the component mounts
    const fetchData = async () => {
      try {
        const fetchedVenueTypes = await getVenueTypes();
        const fetchedVendorTypes = await getVendorTypes();
        setVenueTypes(fetchedVenueTypes);
        setVendorTypes(fetchedVendorTypes);
      } catch (error) {
        console.error('Error fetching venue and vendor types:', error);
      }
    };

    fetchData();
  }, []);

  


  const getVenueSuggestions = async (value) => {
    try {
        const venueTypes = await getVenueTypes();
        const vendorTypes = await getVendorTypes();
        console.log("vendorTypes", vendorTypes);
        console.log("venueTypes", venueTypes);

        const allVenueSuggestions = [
            {
                title: "Venues",
                suggestions: venueTypes.map((venue) => ({
                    id: venue.id.toString(),
                    text: venue.type,
                })),
            },
            {
                title: "Vendors",
                suggestions: vendorTypes.map((vendorType) => ({
                    id: vendorType.id.toString(),
                    text: vendorType.name,
                })),
            },
        ];
        console.log("allVenueSuggestions", allVenueSuggestions);

        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0
        ? []
        : allVenueSuggestions
            .map(section => ({
              ...section,
              suggestions: section.suggestions.filter(suggestion =>
                suggestion.text.toLowerCase().includes(inputValue)
              ),
            }))
            .filter(section => section.suggestions.length > 0);
        
    } catch (error) {
        console.error('Error fetching venue suggestions:', error);
        return [];
    }
};

const getLocationSuggestions = async (value) => {
  try {
    // Fetch states and cities asynchronously
    // Modify the following lines based on how you fetch the data for states and cities
    const states = await getStates(); // Replace getStates with the actual function to fetch states

    const allLocationSuggestions = states.map((state) => ({
      title: state.name,
      suggestions: state.cities.map((city) => ({
        id: city.id.toString(),
        text: city.name,
      })),
    }));

    console.log("allLocationSuggestions", allLocationSuggestions);

    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : allLocationSuggestions
          .map((section) => ({
            ...section,
            suggestions: section.suggestions.filter((suggestion) =>
              suggestion.text.toLowerCase().includes(inputValue)
            ),
          }))
          .filter((section) => section.suggestions.length > 0);
  } catch (error) {
    console.error("Error fetching location suggestions:", error);
    return [];
  }
};



  const onVenueSuggestionsFetchRequested = async ({ value }) => {
    try {
      const suggestions = await getVenueSuggestions(value);
      setVenueSuggestions(suggestions);
      console.log("venueSuggestions",venueSuggestions);
    } catch (error) {
      console.error('Error fetching venue suggestions:', error);
      setVenueSuggestions([]); // Set suggestions to an empty array in case of an error
    }
  };
  

  const onLocationSuggestionsFetchRequested = async ({ value }) => {
    try {
      const suggestions = await getLocationSuggestions(value);
      setLocationSuggestions(suggestions);
      console.log("locationSuggestions",locationSuggestions);
    } catch (error) {
      console.error('Error fetching location suggestions:', error);
      setLocationSuggestions([]);
    }
  };
  

  const onSuggestionsClearRequested = () => {
    setVenueSuggestions([]);
    setLocationSuggestions([]);
  };



  const onVenueSuggestionSelected = (event, { suggestion }) => {
    let sectionTitle = 'N/A';
  
    if (suggestion) {
      if (venueTypes.some(venue => venue.type === suggestion.text)) {
        sectionTitle = 'Venues';
      } else if (vendorTypes.some(vendorType => vendorType.name === suggestion.text)) {
        sectionTitle = 'Vendors';
      }
    }
  
    setSelectedSuggestion({
      title: sectionTitle,
      suggestion,
    });
    
    
    // Log to console
    console.log('Selected Venue Suggestion:', suggestion);
    console.log('Section Title:', sectionTitle);
  };
  
  
  
  
  
  const onLocationSuggestionSelected = (event, { suggestion }) => {
    setSelectedLocationSuggestion(suggestion);
    console.log('Selected Location Suggestion:', suggestion);
    // You can perform additional actions here if needed
  };
  

  const getSuggestionValue = suggestion => suggestion.text;

  const renderSuggestion = suggestion => (
    <div className='suggestion-item mb-1'>
      {suggestion.section ? (
        <div className='section-title mb-2'>
          <strong>{suggestion.section.title}</strong>
        </div>
      ) : (
        <div>{suggestion.text}</div>
      )}
    </div>
  );

  const renderSectionTitle = section => (
    <div className='section-title mb-2'>
      <strong>{section.title}</strong>
    </div>
  );

  const getSectionSuggestions = section => {
    if (section && section.suggestions) {
      console.log("section.suggestions",section.suggestions);
      return section.suggestions;
    }
    return [];
  };
  

  const search = () => {
    // You can pass the selected data as query parameters
    if(selectedSuggestion.title=='Venues'){
      router.push(
        `/shared?venue_id=${selectedSuggestion.suggestion.id}&city_id=${selectedLocationSuggestion.id}`,
      );
    }
    else if(selectedSuggestion.title=='Vendors'){
      router.push(
        `/shared/vendor?vendor_id=${selectedSuggestion.suggestion.id}&city_id=${selectedLocationSuggestion.id}`,
      );
    }
  };

  const venueInputProps = {
    placeholder: 'Search for items',
    value: venueValue,
    onChange: (event, { newValue }) => setVenueValue(newValue),
    className: "px-4 py-2 sm:py-4  focus:outline-none",
  };

  const locationInputProps = {
    ...venueInputProps,
    placeholder: 'Search for locations',
    value: locationValue,
    onChange: (event, { newValue }) => setLocationValue(newValue),
  };

  return (
    <>
    {/* ================== Left Content for Large Screens===========  */}
    <div className="w-1/2 mt-20 xl:mt-20 2xl:mt-24 hidden xl:block 2xl:block 3xl:block">
      <h1 className="text-4xl font-bold text-black">
        Let&rsquo;s find your dream team
      </h1>
      <p className="text-lg text-text100 mt-4">
        Search over 250,000 local professionals with reviews, pricing, availability, and more.
      </p>

      <div className="w-1/2 mt-5 flex items-center shadow-lg">
        {/* Search Input for Venues with Autosuggest */}
        <div className="flex items-center relative border shadow-lg rounded-l-md border-gray-300">
          <span className="ml-3 mr-1">
            <BsSearch className="text-black " />
          </span>
          <Autosuggest
            multiSection={true}
            suggestions={venueSuggestions}
            onSuggestionsFetchRequested={onVenueSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            renderSectionTitle={renderSectionTitle}
            getSectionSuggestions={getSectionSuggestions}
            onSuggestionSelected={onVenueSuggestionSelected}
            inputProps={venueInputProps}
          />
        </div>

        {/* Search Input for Location */}
        <div className="flex items-center border shadow-lg border-gray-300">
          <span className="ml-3 mr-1">
            <IoLocationOutline className="text-black text-xl" />
          </span>
          <Autosuggest
            multiSection={true}
            suggestions={locationSuggestions}
            onSuggestionsFetchRequested={onLocationSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            renderSectionTitle={renderSectionTitle}
            getSectionSuggestions={getSectionSuggestions}
            onSuggestionSelected={onLocationSuggestionSelected}
            inputProps={locationInputProps}
          />
        </div>

        {/* Search Button */}
        <button className="bg-primary text-white shadow-lg px-4 py-4 rounded-r-md" onClick={search}>
          Search
        </button>
      </div>
    </div>

    {/* ================== Left Content for Medium Screens===========  */}
<div className=" w-full    my-7  hidden xl:hidden lg:block md:block sm:block  ">
        <h1 className="text-3xl sm:text-xl md:text-2xl lg:text-3xl flex justify-center  font-bold text-black">
          Let&rsquo;s find your dream team
        </h1>
        <p className="text-lg sm:text-sm md:text-sm lg:text-lg align-center flex justify-center text-text100 mt-4">
          Search over 250,000 local professionals with reviews, pricing,
          availability, and more.
        </p>

        <div className="flex justify-center items-center ">
          <div className="w-1/2 mt-5  relative flex justify-center items-center shadow-lg">
            {/* Search Input for Vendors */}
            <div className="flex items-center border shadow-lg rounded-l-md border-gray-300">
              <span className="ml-3 mr-1">
                <BsSearch className="text-black" />
              </span>
              <Autosuggest
            multiSection={true}
            suggestions={venueSuggestions}
            onSuggestionsFetchRequested={onVenueSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            renderSectionTitle={renderSectionTitle}
            getSectionSuggestions={getSectionSuggestions}
            onSuggestionSelected={onVenueSuggestionSelected}
            inputProps={venueInputProps}
          />

            </div>

            {/* Search Input for Location */}
            <div className="flex items-center border shadow-lg border-gray-300 ">
              <span className="ml-3 mr-1">
                <IoLocationOutline className="text-black text-xl" />
              </span>
              <Autosuggest
            multiSection={true}
            suggestions={locationSuggestions}
            onSuggestionsFetchRequested={onLocationSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            renderSectionTitle={renderSectionTitle}
            getSectionSuggestions={getSectionSuggestions}
            onSuggestionSelected={onLocationSuggestionSelected}
            inputProps={locationInputProps}
          />

            </div>

            {/* Search Button */}
            <button className="bg-primary text-white shadow-lg px-4 py-4 rounded-r-md" onClick={search}>
              Search
            </button>
          </div>
        </div>


      </div>



 {/* Left Content for Small Screens */}
 <div className="w-full p-2 mt-3 lg:hidden md:hidden sm:hidden">
        <h1 className="text-xl  flex justify-center font-bold text-black">
          Let&rsquo;s find your dream team
        </h1>
        <p className="text-sm text-center flex justify-center text-text100 mt-3">
          Search over 250,000 local professionals with reviews, pricing,
          availability, and more.
        </p>
        {/* Make this Sperate fucntion */}
        <div className="flex justify-center items-center">
          <div className="w-full  relative mt-3 flex flex-col justify-evenly mx-4 gap-4 ">
            {/* Search Input for Vendors */}
            <div className="flex relatives items-center border shadow-lg rounded-md border-gray-300">
              <span className="ml-3 mr-1">
                <BsSearch className="text-black" />
              </span>
              <Autosuggest
            multiSection={true}
            suggestions={venueSuggestions}
            onSuggestionsFetchRequested={onVenueSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            renderSectionTitle={renderSectionTitle}
            getSectionSuggestions={getSectionSuggestions}
            onSuggestionSelected={onVenueSuggestionSelected}
            inputProps={venueInputProps}
          />
            </div>

            {/* Search Input for Location */}
            <div className="flex relative items-center border shadow-lg rounded-md border-gray-300">
              <span className="ml-3 mr-1">
                <IoLocationOutline className="text-black text-xl" />
              </span>
              <Autosuggest
            multiSection={true}
            suggestions={locationSuggestions}
            onSuggestionsFetchRequested={onLocationSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            renderSectionTitle={renderSectionTitle}
            getSectionSuggestions={getSectionSuggestions}
            onSuggestionSelected={onLocationSuggestionSelected}
            inputProps={locationInputProps}
          />
            </div>

            {/* Search Button */}
            <button className=" bg-white shadow-lg px-4 py-2 rounded-md  text-black  font-semibold border border-black border-1  hover:bg-primary  hover:border-primary hover:text-white" onClick={search}>
              Search
            </button>
          </div>
        </div>
      </div>




</>
  );
};

export default SearchFilter;