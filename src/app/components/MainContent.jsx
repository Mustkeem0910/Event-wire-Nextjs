'use client'
import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CiTrophy } from "react-icons/ci";
import { BiCoinStack } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import SimpleSilderCards1 from "./SimpleSliderCard1";
import SimpleSilderCards2 from "./SimpleSiderCard2";
import SimpleSilderCards3 from "./SimpleSliderCard3";
import Plan_Trip from "./Plan_Trip";
import { useRouter } from 'next/navigation'
import { fetchVenues, fetchVendors } from "../api/api";

const MainContent = () => {

  const router = useRouter()
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vendorsData1, setVendorsData1] = useState([]);
  const [vendorsData2, setVendorsData2] = useState([]);
  const [vendorsData, setVendorsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchVenues();
        setVenues(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // Handle the error, e.g., display an error message
      }

      try {
        const vendor_data = await fetchVendors();
        // Filter vendors based on the types you want (Photographers, Videographers, Hair & Makeup, Florists)
        const filteredVendors1 = vendor_data.filter((vendorType) =>
          ['Photographers', 'Videographers', 'Hair & Makeup', 'Florists'].includes(vendorType.name)
        );
        
        const filteredVendors2 = vendor_data.filter((vendorType) =>
          ['Event Planners', 'DJs', 'Caterers', 'Cakes'].includes(vendorType.name)
        );

        const shuffledVendors1 = [...filteredVendors1];
        for (let i = shuffledVendors1.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledVendors1[i], shuffledVendors1[j]] = [shuffledVendors1[j], shuffledVendors1[i]];
        }
        const shuffledVendors2 = [...filteredVendors2];
        for (let i = shuffledVendors2.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledVendors2[i], shuffledVendors2[j]] = [shuffledVendors2[j], shuffledVendors2[i]];
        }
        setVendorsData(vendor_data);
        setVendorsData1(shuffledVendors1);
        setVendorsData2(shuffledVendors2);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);
  
  const handleButtonClick = (id) => {
    // Handle the click event, for example, log the id
    console.log(`Button with id ${id} clicked`);
    if(id=='viewAll'){
      router.push(
        `/shared/vendor`,
      );
    }
    else{
      router.push(
        `/shared/vendor?vendor_id=${id}`,
      );
    }
  };

  const handleSlideClick = (id, name) => {
    router.push(`/biz/${name}?type=1&id=${id}`);
  };

  const handleSlideClick2 = (id, name) => {
    router.push(`/biz/${name}?type=2&id=${id}`);
  };


  const cardsData = [
    // Sample data for cards
    // Add more data as needed
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/721180/original/960/jpg/alsosnimfon1_51_2081127-164417326484620.webp',
      title: 'Bankqet Hall',
      subtitle: 'Sunset Hills Santorni!',
      rating: 5,
      reviews: 3,
      location: 'Santorini, GR',
      capacity: 5000,
      awardWinner: true,
    },

    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/721180/original/960/jpg/alsosnimfon1_51_2081127-164417326484620.webp',
      title: 'Bankqet Hall',
      subtitle: 'Sunset Hills Santorni!',
      rating: 5,
      reviews: 3,
      location: 'Santorini, GR',
      capacity: 5000,
      awardWinner: true,
    },

    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/721180/original/960/jpg/alsosnimfon1_51_2081127-164417326484620.webp',
      title: 'Bankqet Hall',
      subtitle: 'Sunset Hills Santorni!',
      rating: 5,
      reviews: 3,
      location: 'Santorini, GR',
      capacity: 5000,
      awardWinner: true,
    },

    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/721180/original/960/jpg/alsosnimfon1_51_2081127-164417326484620.webp',
      title: 'Bankqet Hall',
      subtitle: 'Sunset Hills Santorni!',
      rating: 5,
      reviews: 3,
      location: 'Santorini, GR',
      capacity: 5000,
      awardWinner: true,
    },

    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/721180/original/960/jpg/alsosnimfon1_51_2081127-164417326484620.webp',
      title: 'Bankqet Hall',
      subtitle: 'Sunset Hills Santorni!',
      rating: 5,
      reviews: 3,
      location: 'Santorini, GR',
      capacity: 5000,
      awardWinner: true,
    },

    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/721180/original/960/jpg/alsosnimfon1_51_2081127-164417326484620.webp',
      title: 'Bankqet Hall',
      subtitle: 'Sunset Hills Santorni!',
      rating: 5,
      reviews: 3,
      location: 'Santorini, GR',
      capacity: 5000,
      awardWinner: true,
    },{
      imageUrl: 'https://cdn0.weddingwire.com/vendor/721180/original/960/jpg/alsosnimfon1_51_2081127-164417326484620.webp',
      title: 'Bankqet Hall',
      subtitle: 'Sunset Hills Santorni!',
      rating: 5,
      reviews: 3,
      location: 'Santorini, GR',
      capacity: 5000,
      awardWinner: true,
    },{
      imageUrl: 'https://cdn0.weddingwire.com/vendor/721180/original/960/jpg/alsosnimfon1_51_2081127-164417326484620.webp',
      title: 'Bankqet Hall',
      subtitle: 'Sunset Hills Santorni!',
      rating: 5,
      reviews: 3,
      location: 'Santorini, GR',
      capacity: 5000,
      awardWinner: true,
    },
    // Add more card data as needed
  ];

  const cardsData2 = [
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/901956/3_2/640/jpg/2019-10-06-5323_51_659109-161183805987612.webp',
      title: 'Event Photographer',
      subtitle: 'Jhon Crete Photo',
      rating: 4,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 5000,
      awardWinner: true,
    },

    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/901956/3_2/640/jpg/2019-10-06-5323_51_659109-161183805987612.webp',
      title: 'Event Photographer',
      subtitle: 'Jhon Crete Photo',
      rating: 4,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 5000,
      awardWinner: true,
    },

    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/901956/3_2/640/jpg/2019-10-06-5323_51_659109-161183805987612.webp',
      title: 'Event Photographer',
      subtitle: 'Jhon Crete Photo',
      rating: 4,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 5000,
      awardWinner: true,
    },

    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/901956/3_2/640/jpg/2019-10-06-5323_51_659109-161183805987612.webp',
      title: 'Event Photographer',
      subtitle: 'Jhon Crete Photo',
      rating: 4,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 5000,
      awardWinner: true,
    },
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/901956/3_2/640/jpg/2019-10-06-5323_51_659109-161183805987612.webp',
      title: 'Event Photographer',
      subtitle: 'Jhon Crete Photo',
      rating: 4,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 5000,
      awardWinner: true,
    },
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/901956/3_2/640/jpg/2019-10-06-5323_51_659109-161183805987612.webp',
      title: 'Event Photographer',
      subtitle: 'Jhon Crete Photo',
      rating: 4,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 5000,
      awardWinner: true,
    },
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/901956/3_2/640/jpg/2019-10-06-5323_51_659109-161183805987612.webp',
      title: 'Event Photographer',
      subtitle: 'Jhon Crete Photo',
      rating: 4,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 5000,
      awardWinner: true,
    },
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/901956/3_2/640/jpg/2019-10-06-5323_51_659109-161183805987612.webp',
      title: 'Event Photographer',
      subtitle: 'Jhon Crete Photo',
      rating: 4,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 5000,
      awardWinner: true,
    },
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/901956/3_2/640/jpg/2019-10-06-5323_51_659109-161183805987612.webp',
      title: 'Event Photographer',
      subtitle: 'Jhon Crete Photo',
      rating: 4,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 5000,
      awardWinner: true,
    },
    // Add more card data as needed
  ];

  const cardsData3 = [
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/947927/3_2/640/jpg/ar0a2630_51_729749-165824628775247.webp',
      title: 'Event Planner',
      subtitle: 'Vivid Events',
      rating: 3,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 7000,
      awardWinner: true,
    },
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/947927/3_2/640/jpg/ar0a2630_51_729749-165824628775247.webp',
      title: 'Event Planner',
      subtitle: 'Vivid Events',
      rating: 3,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 7000,
      awardWinner: true,
    },
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/947927/3_2/640/jpg/ar0a2630_51_729749-165824628775247.webp',
      title: 'Event Planner',
      subtitle: 'Vivid Events',
      rating: 3,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 7000,
      awardWinner: true,
    },
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/947927/3_2/640/jpg/ar0a2630_51_729749-165824628775247.webp',
      title: 'Event Planner',
      subtitle: 'Vivid Events',
      rating: 3,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 7000,
      awardWinner: true,
    },
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/947927/3_2/640/jpg/ar0a2630_51_729749-165824628775247.webp',
      title: 'Event Planner',
      subtitle: 'Vivid Events',
      rating: 3,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 7000,
      awardWinner: true,
    },
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/947927/3_2/640/jpg/ar0a2630_51_729749-165824628775247.webp',
      title: 'Event Planner',
      subtitle: 'Vivid Events',
      rating: 3,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 7000,
      awardWinner: true,
    },
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/947927/3_2/640/jpg/ar0a2630_51_729749-165824628775247.webp',
      title: 'Event Planner',
      subtitle: 'Vivid Events',
      rating: 3,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 7000,
      awardWinner: true,
    },
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/947927/3_2/640/jpg/ar0a2630_51_729749-165824628775247.webp',
      title: 'Event Planner',
      subtitle: 'Vivid Events',
      rating: 3,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 7000,
      awardWinner: true,
    },
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/947927/3_2/640/jpg/ar0a2630_51_729749-165824628775247.webp',
      title: 'Event Planner',
      subtitle: 'Vivid Events',
      rating: 3,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 7000,
      awardWinner: true,
    },
    {
      imageUrl: 'https://cdn0.weddingwire.com/vendor/947927/3_2/640/jpg/ar0a2630_51_729749-165824628775247.webp',
      title: 'Event Planner',
      subtitle: 'Vivid Events',
      rating: 3,
      reviews: 7,
      location: 'Athens, GR',
      capacity: 7000,
      awardWinner: true,
    },
     // Add more card data as needed
  ];
  return (
    <>
      {/* =========================Tabs =====================================*/}
      <section className="mx-4 mt-5 sm:mx-4  xl:mx-20 2xl:mx-20 3xl:mx-20 font-[Poppins] ">
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl  3xl:text-3xl text-black font-semibold">
          Find every vendor you need
        </h1>
        <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg  3xl:text-lg text-black mt-2">
          Connect with seasoned wedding pros to help bring your day to life.
        </p>

        <div className="mt-2 md:mt-5 overflow-x-auto scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-500">
          <div className="flex space-x-2  scrollbar-hide scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-500">
          {vendorsData.map((vendor) => (
        <button
          key={vendor.id} // Assuming each vendor object has an 'id' property
          className="bg-white text-black py-2 btn btn-md px-4 rounded cursor-pointer hover:bg-primary hover:text-white  border border-black hover:border-primary transition duration-300"
          onClick={() => handleButtonClick(vendor.id)}
          >
         Event {vendor.name} {/* Assuming each vendor object has a 'name' property */}
        </button>
      ))}
          <button className="bg-white text-black py-2 btn btn-md px-4 rounded cursor-pointer hover:bg-primary hover:text-white  border border-black hover:border-primary transition duration-300" onClick={() => handleButtonClick('viewAll')}>
            View All
          </button>
          </div>
        </div>
      </section>

      {/* ==============Find the perfect venue for your Events=================*/}
      <section className="mx-4 mt-1 sm:mt-2 md:mt-3 lg:mt-5 xl:mt-10 2xl:mt-10 3xl:mt-10  sm:mx-4  xl:mx-20 2xl:mx-20 3xl:mx-20 font-[Poppins] ">
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl  3xl:text-3xl text-black font-semibold">
          Find the perfect venue for your Events
        </h1>
        <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg  3xl:text-lg text-black mt-2">
          Venues to bring your day to life
        </p>
        {/*============= Cousrsel =============*/}
        <div className='hidden xl:block 2xl:block 3xl:block'>
       <SimpleSilderCards1 venues={venues} />
        </div>
        {/*============= Small Screen Cousrsel =============*/}
        <div className="mt-2 md:mt-2 overflow-x-auto scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-500 xl:hidden 2xl:hidden 3xl:hidden">
  <div className="flex space-x-4 scrollbar-hide scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-500 flex-shrink-0">
    {venues.map((venue, index) => (
      <div key={index} onClick={() => handleSlideClick(venue.id,venue.name)} className="shadow-xl ">
        <div className="mt-2 w-72  flex justify-between card shadow-xl">
          <figure>
            {/* Assuming 'images' array exists and has at least one image */}
            <img src={venue.venue_images[0].image.replace('image/upload/', '')} alt={venue.name}  className='w-72 h-60 object-cover'/>
          </figure>
          <div className="p-2">
            <h2 className="text-sm text-grey-200 font-semibold">{venue.name}</h2>
            <h2 className="text-black text-lg font-semibold hover:text-primary">{venue.address}</h2>
            <div className="flex items-center mt-1">
              <FaStar className="text-yellow-500 h-5 w-5 mr-1" />
              <span className="text-xs text-grey-500 font-semibold mr-1">
                {venue.rating}({venue.reviewCount})
              </span>
              <span className="text-xs text-grey-500 font-semibold mr-1">{venue.address}</span>
            </div>
            <div className="flex items-center mt-1">
              <HiOutlineUserGroup className="h-5 w-5 mr-1" />
              <span className="text-xs text-grey-500 font-semibold ">{venue.capacity}</span>
            </div>
            {venue.awardWinner && (
              <div className="badge badge-warning mt-2">
                <CiTrophy />
                Award Winner
              </div>
            )}
            <div className="card-actions mt-10">
              {/* <button className="btn bg-white text-black py-2 btn btn-md px-4 rounded cursor-pointer hover:bg-primary hover:text-white border border-black hover:border-primary transition duration-300 w-full">
                Request Pricing
              </button> */}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      </section>

      {/*================= Make your day picture perfect======================= */}
      <section className="mx-4 mt-1 sm:mt-2 md:mt-3 lg:mt-5 xl:mt-10 2xl:mt-10 3xl:mt-10  sm:mx-4  xl:mx-20 2xl:mx-20 3xl:mx-20 font-[Poppins] ">
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl  3xl:text-3xl text-black font-semibold">
          Make your day picture perfect
        </h1>
        <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg  3xl:text-lg text-black mt-2">
          Find beauty providers, florists, photographers and videographers in
          your area
        </p>
        {/*============= Cousrsel =============*/}
        <div className="hidden xl:block 2xl:block 3xl:block">
        
          <SimpleSilderCards2 vendorsData1={vendorsData1}/>
       
        </div>

         {/*============= Small Screen Cousrsel =============*/}
         <div className="mt-2 md:mt-2 overflow-x-auto scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-500 xl:hidden 2xl:hidden 3xl:hidden">
      <div className="flex space-x-4 scrollbar-hide scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-500 flex-shrink-0">
        {vendorsData1.map((vendorType) => (
          <div key={vendorType.id} className="shadow-xl">
            {/* <h2 className="text-2xl font-bold mb-2">{vendorType.name}</h2> */}
            <div className="flex space-x-4">
              {vendorType.vendors.map((vendor, index) => (
                <div key={index} onClick={() => handleSlideClick2(vendor.id,vendor.name)} className="shadow-xl">
                  <div className="mt-2 w-72  flex justify-between card shadow-xl">
                    <div className="card  shadow-xl">
                      <figure>
                        {vendor.vendor_images.length > 0 && (
                          <img src={vendor.vendor_images[0].image.replace('image/upload/', '')} alt={vendor.name} className='w-72 h-60 object-cover' />
                        )}
                      </figure>
                      <div className="p-2">
                        <h2 className="text-sm text-grey-200 font-semibold">{vendor.name}</h2>
                        <h2 className="text-black text-lg font-semibold hover:text-primary">
                          {vendor.address}
                        </h2>
                        <div className="flex items-center mt-1">
                          <FaStar className="text-yellow-500 h-5 w-5 mr-1" />
                          <span className="text-xs text-grey-500 font-semibold mr-1">
                            {vendor.rating}({vendor.reviews})
                          </span>
                          <span className="text-xs text-grey-500 font-semibold mr-1">
                            {vendor.location}
                          </span>
                        </div>
                        <div className="flex items-center mt-1">
                          <BiCoinStack className="h-5 w-5 mr-1" />
                          <span className="text-xs text-grey-500 font-semibold ">
                            {vendor.charges}
                          </span>
                        </div>
                        {vendor.awardWinner && (
                          <div className="badge badge-warning mt-2">
                            <CiTrophy />
                            Award Winner
                          </div>
                        )}
                        <div className="card-actions mt-10">
                          {/* <button className="btn bg-white text-black py-2 btn btn-md px-4 rounded cursor-pointer hover:bg-primary hover:text-white border border-black hover:border-primary transition duration-300 w-full">
                            Request Pricing
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>

      <div className="flex justify-start mx-4 sm:mx-4  xl:mx-20 2xl:mx-20 3xl:mx-20 gap-5 font-[Poppins]">
      <div className="mt-2 md:mt-5 overflow-x-auto scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-500">
          <div className="flex space-x-4  scrollbar-hide scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-500">
          {vendorsData1.map((vendor) => (
        <button
          key={vendor.id} // Assuming each vendor object has an 'id' property
          className="bg-white text-black py-2 btn btn-md px-4 rounded cursor-pointer hover:bg-primary hover:text-white  border border-black hover:border-primary transition duration-300"
          onClick={() => handleButtonClick(vendor.id)}
          >
         {vendor.name} {/* Assuming each vendor object has a 'name' property */}
        </button>
      ))}
          </div>
        </div>
        
      </div>

      {/* ==============Ensure your day is stress-free and memorable=============*/}
      <section className="mx-4 mt-1 sm:mt-2 md:mt-3 lg:mt-5 xl:mt-10 2xl:mt-10 3xl:mt-10  sm:mx-4  xl:mx-20 2xl:mx-20 3xl:mx-20 font-[Poppins]">
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl  3xl:text-3xl text-black font-semibold">
          Ensure your day is stress-free and memorable
        </h1>
        <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg  3xl:text-lg text-black mt-2">
          Vendors to make sure your day goes smoothly
        </p>
        {/*============= Cousrsel =============*/}
        <div className="hidden xl:block 2xl:block 3xl:block">
      <SimpleSilderCards3 vendorsData2={vendorsData2}/>
        </div>

        {/*============= Small Screen Cousrsel =============*/}
        <div className="mt-2 md:mt-2 overflow-x-auto scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-500 xl:hidden 2xl:hidden 3xl:hidden">
      <div className="flex space-x-4 scrollbar-hide scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-500 flex-shrink-0">
        {vendorsData2.map((vendorType) => (
          <div key={vendorType.id} className="shadow-xl">
            {/* <h2 className="text-2xl font-bold mb-2">{vendorType.name}</h2> */}
            <div className="flex space-x-4">
              {vendorType.vendors.map((vendor, index) => (
                <div key={index} onClick={() => handleSlideClick2(vendor.id,vendor.name)} className="shadow-xl">
                  <div className="mt-2 w-72  flex justify-between card shadow-xl">
                    <div className="card  shadow-xl">
                      <figure>
                        {vendor.vendor_images.length > 0 && (
                          <img src={vendor.vendor_images[0].image.replace('image/upload/', '')} alt={vendor.name} className='w-72 h-60 object-cover' />
                        )}
                      </figure>
                      <div className="p-2">
                        <h2 className="text-sm text-grey-200 font-semibold">{vendor.name}</h2>
                        <h2 className="text-black text-lg font-semibold hover:text-primary">
                          {vendor.address}
                        </h2>
                        <div className="flex items-center mt-1">
                          <FaStar className="text-yellow-500 h-5 w-5 mr-1" />
                          <span className="text-xs text-grey-500 font-semibold mr-1">
                            {vendor.rating}({vendor.reviews})
                          </span>
                          <span className="text-xs text-grey-500 font-semibold mr-1">
                            {vendor.location}
                          </span>
                        </div>
                        <div className="flex items-center mt-1">
                          <BiCoinStack className="h-5 w-5 mr-1" />
                          <span className="text-xs text-grey-500 font-semibold ">
                            {vendor.charges}
                          </span>
                        </div>
                        {vendor.awardWinner && (
                          <div className="badge badge-warning mt-2">
                            <CiTrophy />
                            Award Winner
                          </div>
                        )}
                        <div className="card-actions mt-10">
                          {/* <button className="btn bg-white text-black py-2 btn btn-md px-4 rounded cursor-pointer hover:bg-primary hover:text-white border border-black hover:border-primary transition duration-300 w-full">
                            Request Pricing
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>

      <div className="flex justify-start mx-4 sm:mx-4  xl:mx-20 2xl:mx-20 3xl:mx-20 gap-5 font-[Poppins]">
      <div className="mt-2 md:mt-5 overflow-x-auto scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-500">
          <div className="flex space-x-4  scrollbar-hide scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-500">
          {vendorsData2.map((vendor) => (
        <button
          key={vendor.id} // Assuming each vendor object has an 'id' property
          className="bg-white text-black py-2 btn btn-md px-4 rounded cursor-pointer hover:bg-primary hover:text-white  border border-black hover:border-primary transition duration-300"
          onClick={() => handleButtonClick(vendor.id)}
          >
         {vendor.name} {/* Assuming each vendor object has a 'name' property */}
        </button>
      ))}
          </div>
        </div>
        
      </div>

      {/* =============================Forums=================================*/}
      <section className="mx-4 mt-1 sm:mt-2 md:mt-3 lg:mt-5 xl:mt-10 2xl:mt-10 3xl:mt-10  sm:mx-4  xl:mx-20 2xl:mx-20 3xl:mx-20 font-[Poppins] ">
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl  3xl:text-3xl text-black font-semibold">Forums</h1>
        <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg  3xl:text-lg text-black mt-2">
          Ask questions and get answers with the help of other engaged couples.
        </p>
       
        <div>
          {/* First Forum Post */}
          <div className="flex flex-col gap-5 mt-5 lg:flex-row">
  <div className="flex mb-4 border rounded-md border-gray-300 bg-mygrey p-4 w-full lg:w-1/2 xl:w-1/3 transition-transform transform hover:scale-105">
    {/* Content Section */}
    <div className="ml-4 flex-grow">
      <div className="flex justify-start items-center mb-2">
        <div className="avatar placeholder mr-2">
          <div className="bg-neutral text-neutral-content rounded-full w-10">
            <span className="text-xl">W</span>
          </div>
        </div>
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-black">Wendy</h3>
          <span className="text-sm text-grey-500 ml-2">
            2 hours ago
          </span>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-black hover:text-primary mb-2 clamp-3">
        Hurt feelings when none of my family is attending my wedding
      </h2>
      <p className="text-md text-black clamp-3 font-[sans] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>

  <div className="flex mb-4 border rounded-md border-gray-300 bg-mygrey p-4 w-full lg:w-1/2 xl:w-1/3 transition-transform transform hover:scale-105">
    {/* Content Section */}
    <div className="ml-4 flex-grow">
      <div className="flex justify-start items-center mb-2">
        <div className="avatar placeholder mr-2">
          <div className="bg-neutral text-neutral-content rounded-full w-10">
            <span className="text-xl">W</span>
          </div>
        </div>
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-black">Wendy</h3>
          <span className="text-sm text-grey-500 ml-2">
            2 hours ago
          </span>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-black hover:text-primary mb-2 clamp-3">
        Hurt feelings when none of my family is attending my wedding
      </h2>
      <p className="text-md text-black clamp-3 font-[sans] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>

  <div className="flex mb-4 border rounded-md border-gray-300 bg-mygrey p-4 w-full lg:w-1/2 xl:w-1/3 transition-transform transform hover:scale-105">
    {/* Content Section */}
    <div className="ml-4 flex-grow">
      <div className="flex justify-start items-center mb-2">
        <div className="avatar placeholder mr-2">
          <div className="bg-neutral text-neutral-content rounded-full w-10">
            <span className="text-xl">W</span>
          </div>
        </div>
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-black">Wendy</h3>
          <span className="text-sm text-grey-500 ml-2">
            2 hours ago
          </span>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-black hover:text-primary mb-2 clamp-3">
        Hurt feelings when none of my family is attending my wedding
      </h2>
      <p className="text-md text-black clamp-3 font-[sans] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
</div>


          {/* Add more Forum Post components as needed */}
        </div>
      </section>

      <div className="mt-5 flex justify-center  sm:mx-20 font-[Poppins]">
        <button className="bg-white text-black py-2 btn btn-md px-4 rounded cursor-pointer  hover:bg-primary hover:text-white border border-black hover:border-primary  transform hover:scale-105 transition-transform duration-300">
          View all discussions <FaArrowRightLong className="text-xl" />
        </button>
      </div>

    {/* =====================Plan your destination Event======================= */}
    <Plan_Trip/>

      {/*======================= Why WeddingWire?================================= */}
      <section className="mx-4 mt-4 sm:mt-5 md:mt-5 lg:mt-10 xl:mt-10 2xl:mt-10 3xl:mt-10  sm:mx-4  xl:mx-20 2xl:mx-20 3xl:mx-20 font-[Poppins] " id='aboutUsSection'>
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl  3xl:text-3xl text-black font-semibold">Why CompanyName?</h1>
        <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg  3xl:text-lg text-black  mt-5 font-[sans]">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est accusantium nemo nisi. Itaque architecto tempore repudiandae hic eos provident dolorem at nemo a officiis aperiam ipsa dolor eveniet, nam ullam obcaecati autem ipsum voluptatibus vitae, velit aliquid id recusandae! Deleniti, eius numquam saepe quae quia rerum possimus minus facilis?
       </p>
        <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg  3xl:text-lg text-black  mt-5 font-[sans]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum tenetur totam animi ad neque, perspiciatis minima numquam aliquid qui nulla sapiente laboriosam quam laudantium eius, doloremque natus laborum vero sunt quo quis fugiat maxime culpa non! Porro aliquam distinctio nesciunt unde at veniam, corrupti quas reiciendis fugit nulla illum alias beatae quaerat quasi vitae dicta adipisci repellendus officiis est nihil aut modi? Dolor eos accusantium deleniti et vitae dignissimos, voluptates, asperiores cupiditate soluta, aspernatur optio esse.
        </p>
        <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg  3xl:text-lg text-black  mt-5 font-[sans]">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam porro  quasi dignissimos aliquam maiores modi unde! Autem sunt itaque repudiandae enim optio corporis et magni repellendus esse, vero quidem officiis quo fugit animi, maiores nemo necessitatibus aliquid.
        </p>
        
       
      </section>



    </>
  );
};

export default MainContent;
