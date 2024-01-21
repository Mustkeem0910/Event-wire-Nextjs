"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { getCities } from '../api/api';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineKeyboardArrowRight className="btn btn-circle bg-white z-50 left-4 text-black shadow-xl hover:bg-white transition-transform transform hover:scale-105" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineKeyboardArrowLeft className="btn btn-circle bg-white z-50 text-black shadow-xl hover:bg-white transition-transform transform hover:scale-105" />
    </div>
  );
  }

// Plan_Trip component
const Plan_Trip = () => {
  // Array of slide data
  const router = useRouter();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch data from the getCities function
    const fetchData = async () => {
      try {
        const citiesData = await getCities();
        console.log("citiesData: ",citiesData);
        setCities(citiesData);
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchData();
  }, []);

  const transformCityToSlide = (city) => ({
    id: city.id,
    image: city.image.replace('image/upload/', ''),
    title: city.name,
  });

  const slides = cities.map(transformCityToSlide);

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleSlideClick = (cityId) => {
    // Use the history object to navigate to the "/shared" route with the city_id parameter
    router.push(`/shared?city_id=${cityId}`);
  };

  return (
    <section className="mx-4 mt-1 sm:mt-2 md:mt-3 lg:mt-5 xl:mt-10 2xl:mt-10 3xl:mt-10 sm:mx-4 xl:mx-20 2xl:mx-20 3xl:mx-20 font-[Poppins] hidden lg:block">
      <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl 3xl:text-3xl text-black font-semibold">
        Plan your destination event
      </h1>
      <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg text-black mt-2">
        No matter where in the world you want to get married, Company Name&rsquo;s directory of international wedding professionals can help you celebrate.
      </p>

      {/* Carousel */}
      <div className=" mt-5 w-full">
        <Slider {...settings}>
          {/* Map over the slides array and generate carousel items */}
          {slides.map((slide) => (
            <div key={slide.id} onClick={() => handleSlideClick(slide.id)} className="flex-col w-1/6 p-2 h-65 transition-transform transform hover:scale-105">
              <div className=" rounded-md overflow-hidden shadow-x">
                <img src={slide.image} className="w-full" alt="hello" />
              </div>
              <div className="mt-2">
                <p className="text-black text-md text-center font-semibold">{slide.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Plan_Trip;