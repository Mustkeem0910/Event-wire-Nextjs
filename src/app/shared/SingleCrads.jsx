import React, { useRef, useState, useEffect  } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BiCoinStack } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { getCityById } from '../api/api';

const SingleCrads = ({ data,city }) => {
  const slider = useRef();
  const [cityData, setCityData] = useState(null);

  const next = () => {
    slider.current.slickNext();
    console.log("city",city);
  };

  const previous = () => {
    slider.current.slickPrev();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!city) {
          const fetchedCityData = await getCityById(data.city);
          setCityData(fetchedCityData);
          console.log("City Data:", fetchedCityData);
        } 
      } catch (error) {
        console.error('Error fetching city data: ', error);
      }
    };
  
    fetchData();
  }, []);

  const images = data.venue_images.map((image) => image.image.replace('image/upload/', ''));

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <div className="card shadow-2xl h-auto max-h-112 relative ">
        <Slider ref={slider} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative w-full">
              <img src={image} className="w-full h-48 object-cover rounded-t-xl" alt={`Slide ${index + 1}`} />
              <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-0 right-3 top-6">
                <h1 className="btn btn-sm ml-2 text-white bg-black opacity-50">SPOTLIGHT</h1>
                <FaRegHeart className='text-white text-2xl' />
              </div>
            </div>
          ))}
        </Slider>

        {/* Previous button */}
        <div className={`absolute top-1/4 left-5 transform -translate-y-1/2 cursor-pointer flex text-white font-bold text-xl items-center`} onClick={previous}>
          <MdOutlineKeyboardArrowLeft className="text-white font-bold text-4xl opacity-80" />
        </div>

        {/* Next button */}
        <div className={`absolute top-1/4 right-5 transform -translate-y-1/2 cursor-pointer flex  items-center`} onClick={next}>
          <MdOutlineKeyboardArrowRight className=" text-white font-bold text-4xl opacity-80" />
        </div>

        {/* Static content */}
        <div className="p-2">
          <h2 className="text-sm text-grey-200 font-semibold">{city && city.name ? city.name : (cityData && cityData.name ? cityData.name : 'Unknown')}</h2>
          <h2 className="text-black text-lg font-semibold hover:text-primary">{data.name}</h2>
          <div className="flex items-center mt-1">
            <FaStar className="text-yellow-500 h-5 w-5 mr-1" />
            <span className="text-sm text-grey-500 font-semibold mr-1">
              {data.rating} ({data.venue_images.length})
            </span>
            <span className="text-sm text-grey-500 font-semibold mr-1">
              abc
            </span>
          </div>

          <div className="flex items-center mt-1">
            <div className='flex mr-4'>
              <BiCoinStack className=" h-5 w-5 mr-1" />
              <span className="text-sm text-grey-500 font-semibold ">
                ₹{data.capacity}
              </span>
            </div>
            <div className='flex'>
              <HiOutlineUserGroup className=" h-5 w-5 mr-1" />
              <span className="text-sm text-grey-500 font-semibold ">
                {data.capacity}
              </span>
            </div>
          </div>

          <div className="my-4">
            <button className="btn bg-white text-black py-2 btn btn-md px-4 rounded cursor-pointer hover:bg-primary hover:text-white border border-black hover:border-primary transition duration-300 w-full">
              Request Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SingleCrads;
