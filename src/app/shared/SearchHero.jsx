"use client";
import React, { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import Image from "next/image";
import MainHeroImage from "../../../public/SearchHero.PNG";
import { BsSearch } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { useSearchParams } from 'next/navigation'
import {
  getVendorTypes,
  getVenueTypes,
  getCities,
  getStates,
  getVenueTypeById,
  fetchVenues,
  getCityById,
  getVendorTypeById,
  fetchVendors,
} from "../api/api";
import { useRouter } from "next/navigation";

const SearchHero = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [venueValue, setVenueValue] = useState("");
  const [venueSuggestions, setVenueSuggestions] = useState([]);

  const [locationValue, setLocationValue] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  const [selectedSuggestion, setSelectedSuggestion] = useState({
    title: "",
    suggestion: null,
  });
  const [selectedLocationSuggestion, setSelectedLocationSuggestion] =
    useState(null);

  const [venueTypes, setVenueTypes] = useState([]);
  const [vendorTypes, setVendorTypes] = useState([]);

  const [venueData, setVenueData] = useState({ venues: [] });
  const [vendorData, setVendorData] = useState({ vendors: [] });
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedVenueTypes = await getVenueTypes();
        const fetchedVendorTypes = await getVendorTypes();
        setVenueTypes(fetchedVenueTypes);
        setVendorTypes(fetchedVendorTypes);
      } catch (error) {
        console.error("Error fetching venue and vendor types:", error);
      }
    };

    fetchData();
  }, []);

  // Second useEffect for the main data fetching based on URL parameters
  useEffect(() => {
    const fetchData = async () => {
      try {
        const venueType = searchParams.get("venue_id");
        const city = searchParams.get("city_id");
        const vendorType = searchParams.get("vendor_id");
        const path = window.location.pathname;

        if (path === "/shared/") {
          if (venueType && !city) {
            const fetchedVenueData = await getVenueTypeById(venueType);
            setVenueData({ venues: fetchedVenueData.venues });
          } else if (venueType && city) {
            const fetchedVenueData = await getVenueTypeById(venueType);
            const filteredVenues = fetchedVenueData.venues.filter(
              (venue) => parseInt(city) === venue.city
            );
            setVenueData({ venues: filteredVenues });
            const fetchedCityData = await getCityById(city);
            setCityData(fetchedCityData);
          } else if (!venueType && city) {
            const allVenues = await fetchVenues();
            const filteredVenues = allVenues.filter(
              (venue) => parseInt(city) === venue.city
            );
            setVenueData({ venues: filteredVenues });
            const fetchedCityData = await getCityById(city);
            setCityData(fetchedCityData);
          } else {
            const fetchedVenueData = await fetchVenues();
            setVenueData({ venues: fetchedVenueData });
          }
        } else if (path === "/shared/vendor/") {
          if (vendorType && !city) {
            const fetchedVendorData = await getVendorTypeById(vendorType);
            setVendorData({ vendors: fetchedVendorData.vendors });
          } else if (vendorType && city) {
            const fetchedVendorData = await getVendorTypeById(vendorType);
            const filteredVendors = fetchedVendorData.vendors.filter(
              (vendor) => parseInt(city) === vendor.city
            );
            setVendorData({ vendors: filteredVendors });
            const fetchedCityData = await getCityById(city);
            setCityData(fetchedCityData);
          } else if (!vendorType && city) {
            const allVendors = await fetchVendors();
            const filteredVendors = allVendors.filter(
              (vendor) => parseInt(city) === vendor.city
            );
            setVendorData({ vendors: filteredVendors });
            const fetchedCityData = await getCityById(city);
            setCityData(fetchedCityData);
          } else {
            const fetchedVendorData = await fetchVendors();
            setVendorData({ vendors: fetchedVendorData });
          }
        }
      } catch (error) {
        console.error("Error fetching venue or vendor data:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  const getVenueSuggestions = async (value) => {
    try {
      const venueTypes = await getVenueTypes();
      const vendorTypes = await getVendorTypes();

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

      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;

      return inputLength === 0
        ? []
        : allVenueSuggestions
            .map((section) => ({
              ...section,
              suggestions: section.suggestions.filter((suggestion) =>
                suggestion.text.toLowerCase().includes(inputValue)
              ),
            }))
            .filter((section) => section.suggestions.length > 0);
    } catch (error) {
      console.error("Error fetching venue suggestions:", error);
      return [];
    }
  };

  const getLocationSuggestions = async (value) => {
    try {
      const states = await getStates();

      const allLocationSuggestions = states.map((state) => ({
        title: state.name,
        suggestions: state.cities.map((city) => ({
          id: city.id.toString(),
          text: city.name,
        })),
      }));

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
    } catch (error) {
      console.error("Error fetching venue suggestions:", error);
      setVenueSuggestions([]);
    }
  };

  const onLocationSuggestionsFetchRequested = async ({ value }) => {
    try {
      const suggestions = await getLocationSuggestions(value);
      setLocationSuggestions(suggestions);
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
      setLocationSuggestions([]);
    }
  };

  const onSuggestionsClearRequested = () => {
    setVenueSuggestions([]);
    setLocationSuggestions([]);
  };

  const onVenueSuggestionSelected = (event, { suggestion }) => {
    let sectionTitle = "N/A";

    if (suggestion) {
      if (venueTypes.some((venue) => venue.type === suggestion.text)) {
        sectionTitle = "Venues";
      } else if (
        vendorTypes.some((vendorType) => vendorType.name === suggestion.text)
      ) {
        sectionTitle = "Vendors";
      }
    }

    setSelectedSuggestion({
      title: sectionTitle,
      suggestion,
    });

    // Log to console
    console.log("Selected Venue Suggestion:", suggestion);
    console.log("Section Title:", sectionTitle);
  };

  const onLocationSuggestionSelected = (event, { suggestion }) => {
    setSelectedLocationSuggestion(suggestion);
    console.log("Selected Location Suggestion:", suggestion);
    // You can perform additional actions here if needed
  };

  const getSuggestionValue = (suggestion) => suggestion.text;

  const renderSuggestion = (suggestion) => (
    <div className="suggestion-item mb-1">
      {suggestion.section ? (
        <div className="section-title mb-2">
          <strong>{suggestion.section.title}</strong>
        </div>
      ) : (
        <div>{suggestion.text}</div>
      )}
    </div>
  );

  const renderSectionTitle = (section) => (
    <div className="section-title mb-2">
      <strong>{section.title}</strong>
    </div>
  );

  const getSectionSuggestions = (section) => {
    if (section && section.suggestions) {
      return section.suggestions;
    }
    return [];
  };

  const search = () => {
    // You can pass the selected data as query parameters
    if (selectedSuggestion.title === "Venues") {
      router.push(
        `/shared?venue_id=${selectedSuggestion.suggestion.id}&city_id=${selectedLocationSuggestion.id}`
      );
    } else if (selectedSuggestion.title === "Vendors") {
      router.push(
        `/shared/vendor?vendor_id=${selectedSuggestion.suggestion.id}&city_id=${selectedLocationSuggestion.id}`
      );
    }
  };

  const venueInputProps = {
    placeholder: "Search for items",
    value: venueValue,
    onChange: (event, { newValue }) => setVenueValue(newValue),
    className: "px-4 py-4 focus:outline-none",
  };

  const locationInputProps = {
    ...venueInputProps,
    placeholder: "Search for locations",
    value: locationValue,
    onChange: (event, { newValue }) => setLocationValue(newValue),
  };

  return (
    <>
      {/* Main Content */}
      <div className="flex mx-4 sm:mx-20  font-[Poppins]">
        {/* Left Content */}
        <div className="w-full  sm:w-full  md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-1/2   ">
          {/* Breadcrumbs */}
          <div className="mt-5 hidden  sm:hidden  md:block lg:block xl:block 2xl:block 3xl:block">
            {/* Breadcrumbs */}
            <ol
              className="flex items-center whitespace-nowrap"
              aria-label="Breadcrumb"
            >
              <li className="inline-flex items-center">
                <a
                  className="flex items-center text-sm text-black hover:text-primary focus:outline-none focus:text-primary "
                  href="/"
                >
                  Home
                </a>
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600 mx-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 13L10 3"
                    stroke="currentColor"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li className="inline-flex items-center">
                <a
                  className="flex items-center text-sm text-black hover:text-primary focus:outline-none focus:text-primary"
                  href="#"
                >
                  Wedding Venues
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600 mx-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 13L10 3"
                      stroke="currentColor"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="inline-flex items-center">
                <a
                  className="flex items-center text-sm text-black hover:text-primary focus:outline-none focus:text-primary"
                  href="#"
                >
                  Alabama Birmingham
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600 mx-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 13L10 3"
                      stroke="currentColor"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>
          <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mt-5 text-black">
            Birmingham <span> Wedding Venues</span>
          </h1>
          {/* Sreach */}
          <div className="hidden sm:block md:block lg:block xl:block 2xl:block 3xl:block">
            <div className="w-1/2 mt-5 relative flex items-center shadow-lg ">
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
              <div className="flex items-center border shadow-lg border-gray-300 ">
                <span className="ml-3 mr-1">
                  <IoLocationOutline className="text-black text-xl" />
                </span>
                <Autosuggest
                  multiSection={true}
                  suggestions={locationSuggestions}
                  onSuggestionsFetchRequested={
                    onLocationSuggestionsFetchRequested
                  }
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
              <button
                className="bg-primary text-white shadow-lg px-4 py-4 rounded-r-md"
                onClick={search}
              >
                Search
              </button>
            </div>
          </div>

          {/* Small Search */}
          <div className=" sm:hidden  md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hiddden">
            <div className="flex justify-center items-center">
              <div className="w-full  relative mt-3 flex flex-col justify-evenly  gap-4 ">
                {/* Search Input for Vendors */}
                <div className="flex relatives items-center border shadow-lg rounded-md border-gray-300">
                  <span className="ml-3 mr-1">
                    <BsSearch className="text-black" />
                  </span>
                  <Autosuggest
                    multiSection={true}
                    suggestions={venueSuggestions}
                    onSuggestionsFetchRequested={
                      onVenueSuggestionsFetchRequested
                    }
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
                    onSuggestionsFetchRequested={
                      onLocationSuggestionsFetchRequested
                    }
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
                <button
                  className=" bg-white shadow-lg px-4 py-2 rounded-md  text-black  font-semibold border border-black border-1  hover:bg-primary  hover:border-primary hover:text-white"
                  onClick={search}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-1/2  hidden xl:block ">
          <Image src={MainHeroImage} alt="logo" className="object-contain" />
        </div>
      </div>
      {/* <div class="border-t  border-gray-300"></div> */}
    </>
  );
};
export default SearchHero;
