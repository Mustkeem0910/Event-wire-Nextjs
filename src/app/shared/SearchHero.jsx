"use client";
import React, { useState } from "react";
import Image from "next/image";
import MainHeroImage from "../../../public/SearchHero.PNG";
import { BsSearch } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const SearchHero = () => {
  const [search, setSearch] = useState("");

  const [vendorValue, setVendorValue] = useState("");
  const [vendorSuggestions, setVendorSuggestions] = useState([]);
  const [locationValue, setLocationValue] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  // Mock data for vendor suggestions (replace it with your actual data)
  const vendors = ["Vendor1", "Vendor2", "Vendor3", "Vendor4"];

  // Mock data for location suggestions (replace it with your actual data)
  const locations = ["Location1", "Location2", "Location3", "Location4"];

  // Function to get suggestions based on input value
  const getSuggestions = (inputValue, data) => {
    const trimmedValue = inputValue.trim().toLowerCase();
    const inputLength = trimmedValue.length;

    return inputLength === 0
      ? []
      : data.filter((item) => item.toLowerCase().includes(trimmedValue));
  };

  // Function to handle vendor input change
  const handleVendorChange = (event) => {
    const newValue = event.target.value;
    setVendorValue(newValue);
    setVendorSuggestions(getSuggestions(newValue, vendors));
  };

  // Function to handle vendor suggestion selection
  const handleVendorSelection = (value) => {
    setVendorValue(value);
    setVendorSuggestions([]);
  };

  // Function to handle location input change
  const handleLocationChange = (event) => {
    const newValue = event.target.value;
    setLocationValue(newValue);
    setLocationSuggestions(getSuggestions(newValue, locations));
  };

  // Function to handle location suggestion selection
  const handleLocationSelection = (value) => {
    setLocationValue(value);
    setLocationSuggestions([]);
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
                  href="#"
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
              {/* Search Input for Vendors */}
              <div className="flex items-center border shadow-lg rounded-l-md border-gray-300">
                <span className="ml-3 mr-1">
                  <BsSearch className="text-black" />
                </span>
                <input
                  type="search"
                  placeholder="Search for vendors"
                  value={vendorValue}
                  onChange={handleVendorChange}
                  className="px-4 py-4 focus:outline-none"
                />
                {vendorSuggestions.length > 0 && (
                  <ul className="absolute bg-white border border-gray-300 mt-2 p-4 top-14 rounded-lg shadow-xl w-full  ">
                    {vendorSuggestions.map((suggestion) => (
                      <li
                        key={suggestion}
                        onClick={() => handleVendorSelection(suggestion)}
                        className="cursor-pointer text-black flex justify-center mb-2"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Search Input for Location */}
              <div className="flex items-center border shadow-lg border-gray-300 ">
                <span className="ml-3 mr-1">
                  <IoLocationOutline className="text-black text-xl" />
                </span>
                <input
                  type="search"
                  placeholder="Location"
                  value={locationValue}
                  onChange={handleLocationChange}
                  className="px-4 py-4 xl:px-1 focus:outline-none"
                />
                {locationSuggestions.length > 0 && (
                  <ul className="absolute bg-white border border-gray-300 mt-2 top-14 p-2 rounded-md w-full">
                    {locationSuggestions.map((suggestion) => (
                      <li
                        key={suggestion}
                        onClick={() => handleLocationSelection(suggestion)}
                        className="cursor-pointer text-black flex justify-center mb-2"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Search Button */}
              <button className="bg-primary text-white shadow-lg px-4 py-4 rounded-r-md">
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
                  <input
                    type="search"
                    placeholder="Search for vendors"
                    value={vendorValue}
                    onChange={handleVendorChange}
                    className="px-4 py-2 focus:outline-none"
                  />
                  {vendorSuggestions.length > 0 && (
                    <ul className="absolute bg-white border border-gray-300 mt-2 p-4  rounded-lg shadow-xl w-full top-10 z-10 ">
                      {vendorSuggestions.map((suggestion) => (
                        <li
                          key={suggestion}
                          onClick={() => handleVendorSelection(suggestion)}
                          className="cursor-pointer text-black flex justify-center mb-2"
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Search Input for Location */}
                <div className="flex relative items-center border shadow-lg rounded-md border-gray-300">
                  <span className="ml-3 mr-1">
                    <IoLocationOutline className="text-black text-xl" />
                  </span>
                  <input
                    type="search"
                    placeholder="Location"
                    value={locationValue}
                    onChange={handleLocationChange}
                    className="px-4 py-2  focus:outline-none"
                  />
                  {locationSuggestions.length > 0 && (
                    <ul className="absolute bg-white border border-gray-300 mt-2 top-10 p-2 rounded-md w-full z-10">
                      {locationSuggestions.map((suggestion) => (
                        <li
                          key={suggestion}
                          onClick={() => handleLocationSelection(suggestion)}
                          className="cursor-pointer text-black flex justify-center mb-2"
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Search Button */}
                <button className=" bg-white shadow-lg px-4 py-2 rounded-md  text-black  font-semibold border border-black border-1  hover:bg-primary  hover:border-primary hover:text-white">
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
