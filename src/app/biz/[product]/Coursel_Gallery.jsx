"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

const Coursel_Gallery = ({firstImage,secondImage}) => {
  const images = [
    firstImage,
    secondImage,
    // Add more image URLs as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className='relative w-full h-[272px] px-5'>
     
        {/* <div className='absolute z-5 top-4 left-4 p-2 text-white bg-black bg-opacity-70 rounded'>
         hello
        </div> */}
     
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className='w-full h-[272px] object-cover object-center rounded-lg' />
          </div>
        ))}
      </Slider>
      <div className='absolute bottom-4 right-10 py-1 px-3 text-white bg-black bg-opacity-70 rounded'>
        {currentSlide + 1}/{images.length}
      </div>
    </div>
  );
};

export default Coursel_Gallery;
