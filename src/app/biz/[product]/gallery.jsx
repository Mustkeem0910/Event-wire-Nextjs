"use client";
import React, { useState, useEffect, useCallback } from "react";
import Nav from "./Nav";
import NavLinks from "./Navlinks";
import Navbar_Product from "./Navbar_Product";
import Coursel_Gallery from "./Coursel_Gallery";
import BottomNavBar from "./BottomNavBar";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { TbCoins } from "react-icons/tb";
import { FiPhoneOutgoing } from "react-icons/fi";
import { useSearchParams } from "next/navigation";
import { fetchVenuesById, fetchVendorsById } from "@/app/api/api";

const gallery = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const searchParams = useSearchParams();

  const [venueData, setVenueData] = useState({});
  const [vendorData, setVendorData] = useState({});
  const [firstImage, setFirstImage] = useState('');
  const [secondImage, setSecondImage] = useState('');
  const [thirdImage, setThirdImage] = useState('');
  const [fourthImage, setFourthImage] = useState('');

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const aboutSection = document.getElementById("about");
    const faqSection = document.getElementById("faq");
    const reviewsSection = document.getElementById("reviews");
    const pricingSection = document.getElementById("pricing");
    const mapSection = document.getElementById("map");

    if (
      (aboutSection && scrollY >= aboutSection.offsetTop) ||
      (faqSection && scrollY >= faqSection.offsetTop) ||
      (reviewsSection && scrollY >= reviewsSection.offsetTop) ||
      (pricingSection && scrollY >= pricingSection.offsetTop) ||
      (mapSection && scrollY >= mapSection.offsetTop)
    ) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const id = searchParams.get("id");
  const type = searchParams.get("type");
  
  const fetchData = async () => {
    try {
      let fetchedData;
      
      if (type === '1') {
        fetchedData = await fetchVenuesById(id);
        console.log("Fetched data: ", fetchedData);
        setVenueData(fetchedData);
        setFirstImage(fetchedData.venue_images[0].image.replace('image/upload/', ''));
        setSecondImage(fetchedData.venue_images[1].image.replace('image/upload/', ''));
        setThirdImage(fetchedData.venue_images[2].image.replace('image/upload/', ''));
        setFourthImage(fetchedData.venue_images[3].image.replace('image/upload/', ''));
      } else if (type === '2') {
        fetchedData = await fetchVendorsById(id);
        console.log("Fetched data: ", fetchedData);
        setVendorData(fetchedData);
        setFirstImage(fetchedData.vendor_images[0].image.replace('image/upload/', ''));
        setSecondImage(fetchedData.vendor_images[1].image.replace('image/upload/', ''));
        setThirdImage(fetchedData.vendor_images[2].image.replace('image/upload/', ''));
        setFourthImage(fetchedData.vendor_images[3].image.replace('image/upload/', ''));
      }
  
      
  
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  

  const handleDivClick = () => {
    console.log("Clicked on the div! venueData:", venueData.name);
    if (venueData) {
        console.log('Venue Name:', venueData.venue_images[0].image);
      }
    // You can perform additional actions or logging here
  };

  return (
    <>
      {showNavbar && <NavLinks />}
      <div className="flex mt-10   mx-0 xl:mx-20 2xl:mx-20   font-[Poppins]">
        {/* =================Gallery Section for screen screen larger then md================== */}

        <div className="w-full  xl:w-3/4 2xl:w-3/4  3xl:w-3/4 flex flex-col hidden md:block ">
          <div className="w-full h-[472px]  flex gap-2 px-5  ">
            {/* First half, full-width image */}
            <div className="w-1/2">
              <img
                src={firstImage}
                alt="Image 1"
                className="h-full w-full object-cover object-center rounded-l-lg"
              />
            </div>

            {/* Second half, divided into two parts */}
            <div className="w-1/2 flex flex-col gap-2">
              {/* Lower div divided into two parts */}
              <div className="w-full h-1/2 flex gap-2">
                {/* Left part */}
                <div className="w-1/2 gap-2 ">
                  <img
                    src={secondImage}
                    alt="Image 3"
                    className="h-full w-full object-cover object-center "
                  />
                </div>
                {/* Right part */}
                <div className="w-1/2  ">
                  <img
                    src={thirdImage}
                    alt="Image 4"
                    className="h-full w-full object-cover object-center rounded-tr-lg"
                  />
                </div>
              </div>
              {/* Upper div divided into two parts */}
              <div className="w-full h-1/2">
                <img
                  src={fourthImage}
                  alt="Image 2"
                  className="h-full w-full object-cover object-center rounded-br-lg"
                />
              </div>
            </div>
          </div>

          {/* ==========Navlink Section ========= */}
          <div className="px-3 mt-3 hidden xl:block">
            <Navbar_Product />
          </div>
          {/*=============== Request Pricing Section ========== */}
          <div className="xl:hidden  w-full px-5 mt-3 ">
            <div className="flex justify-between mb-4">
              <div className="text-black text-2xl font-semibold cursor-pointer">
              {venueData.name|| vendorData.name}
              </div>
              <div>
                <FaRegHeart className="ml-2 font-xl text-2xl cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <span className="ml-2  text-black font-semibold cursor-pointer ">
                {venueData.rating || vendorData.rating} Excellent
              </span>

              <span className="ml-2 link hover:link-primary">80 Reviews</span>

              <div className="flex items-center ">
                <MdOutlineLocationOn className="font-semibold text-xl" />
                <span className="mx-2 link hover:link-primary ">
                  {venueData.address || vendorData.address}
                </span>
              </div>

              <div className="flex items-center">
                <CgWebsite className="font-semibold text-xl" />
                <span className="mx-2 link hover:link-primary">
                  Visit Website
                </span>
              </div>
            </div>

            <div className="bg-white shadow-md p-6 mb-4 ring-1 ring-gray-300 rounded-md">
              <div className="flex items-center">
                <TbCoins />
                <span className="ml-2 cursor-pointer">
                  {vendorData.charges || "$1,900"} Package Price
                </span>
              </div>
            </div>
          </div>
          <div class="border-t mt-2 mx-3 border-gray-300"></div>

          <Nav />
        </div>

        {/* =================Gallery Section for screen screen less then md================== */}
        <div className="w-full flex flex-col  md:hidden ">
          <Coursel_Gallery />

          {/* ==========Navlink Section ========= */}
          <div className="px-3 mt-3 hidden xl:block">
            <Navbar_Product />
          </div>
          {/*=============== Request Pricing Section ========== */}
          <div className="xl:hidden  w-full px-5 mt-3 ">
            <div className="flex justify-between  mb-4">
              <div className="text-black text-2xl font-semibold cursor-pointer">
                {venueData.name || vendorData.name}
              </div>
              <div>
                <FaRegHeart className="ml-2 font-xl text-2xl cursor-pointer" />
              </div>
            </div>

            <div className="flex  flex-col sm:flex-row gap-2 mb-4">
              <div className="flex gap-2 ">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <div className="  shrink-0 text-black font-semibold cursor-pointer ">
                  {venueData.rating || vendorData.rating} Excellent
                </div>
              </div>

              <div className="shrink-0 hidden sm:block link hover:link-primary">
                80 Reviews
              </div>

              <div className="flex">
                <div className="flex shrink-0 items-center ">
                  <MdOutlineLocationOn className="font-semibold text-xl" />
                  <span className="mx-2 link hover:link-primary ">
                    {venueData.address || venueData.address}
                  </span>
                </div>

                <div className="flex shrink-0 items-center">
                  <CgWebsite className="font-semibold text-xl" />
                  <span className="mx-2 link hover:link-primary">
                    Visit Website
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md p-6 mb-4 ring-1 ring-gray-300 rounded-md">
              <div className="flex items-center">
                <TbCoins />
                <span className="ml-2 cursor-pointer">
                {vendorData.charges || "$1,900"} Package Price
                </span>
              </div>
            </div>
          </div>
          <div class="border-t mt-2 mx-3 border-gray-300"></div>

          <Nav />
        </div>

        {/*=============== Request Pricing Section ========== */}
        <div className="hidden xl:block w-1/4  ">
          <div className="flex justify-between mb-4">
            <div className="text-black text-2xl font-semibold cursor-pointer">
              {venueData.name || vendorData.name}
            </div>
            <div>
              <FaRegHeart className="ml-2 font-xl text-2xl cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <span className="ml-2  text-black font-semibold cursor-pointer ">
              {venueData.rating || vendorData.rating} Excellent
            </span>

            <span className="ml-2 link hover:link-primary">80 Reviews</span>
          </div>

          <div className="flex items-center mb-4">
            <MdOutlineLocationOn className="font-semibold text-xl" />
            <span className="mx-2 link hover:link-primary ">{venueData.address || vendorData.address}</span>
          </div>

          <div className="flex items-center mb-4">
            <CgWebsite className="font-semibold text-xl" />
            <span className="mx-2 link hover:link-primary">Visit Website</span>
          </div>

          <div className="bg-white shadow-md p-6 mb-4 ring-1 ring-gray-300 rounded-md">
            <div className="flex items-center">
              <TbCoins />
              <span className="ml-2 cursor-pointer">$ { vendorData.charges || "1,900"} Package Price</span>
            </div>
          </div>

          {/* Combined Div with Button and Contact Icon */}
          <div className="py-3   flex justify-between mb-4 gap-4">
            <button
              className="btn bg-primary flex-grow text-white py-2 btn btn-md px-4 rounded cursor-pointer hover:bg-primary hover:text-white border border-primary  transition duration-300"
              onClick={handleDivClick}
            >
              Request Pricing
            </button>

            <div className="border border-primary border-2 flex hover:bg-primary text-white  flex-col justify-center px-3 py-1  rounded-md transition duration-300">
              <FiPhoneOutgoing className="mr-2  text-primary hover:text-white transition duration-100" />
            </div>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </>
  );
};

export default gallery;
