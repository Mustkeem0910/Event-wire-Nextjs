import React, { useRef } from 'react';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const SingleVendorCards = (data,city,name) => {
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
    console.log("data",data);
  };

  const previous = () => {
    slider.current.slickPrev();
  };

  const images = data.data.vendor_images.map((image) => image.image.replace('image/upload/', ''));

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const truncateText = (text, maxLength, maxLines) => {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxLength);
    const truncatedText = truncatedWords.join(' ');

    if (words.length > maxLines) {
      return truncatedText + '...';
    }

    return truncatedText;
  };

  return (
    <div className="card shadow-2xl w-70 h-auto max-h-112">
      <Slider ref={slider} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full">
            <img src={image} className="w-full h-48 object-cover rounded-t-xl" alt={`Slide ${index + 1}`} />
            <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-0 right-3 top-6">
              <h1 className="btn btn-sm ml-2 text-white bg-black opacity-50">SPOTLIGHT</h1>
              <FaRegHeart className="text-white text-2xl" />
            </div>
          </div>
        ))}
      </Slider>

      <div className="absolute top-1/4 left-5 transform -translate-y-1/2 cursor-pointer flex text-white font-bold text-xl items-center" onClick={previous}>
        <MdOutlineKeyboardArrowLeft className="text-white font-bold text-4xl opacity-80" />
      </div>

      <div className="absolute top-1/4 right-5 transform -translate-y-1/2 cursor-pointer flex items-center" onClick={next}>
        <MdOutlineKeyboardArrowRight className=" text-white font-bold text-4xl opacity-80" />
      </div>

      <div className="p-2">
        <h2 className="text-sm text-grey-200 font-semibold">{data.name}</h2>
        <h2 className="text-black text-lg font-semibold hover:text-primary">{data.data.name}</h2>
        <div className="flex items-center mt-1">
          <FaStar className="text-yellow-500 h-5 w-5 mr-1" />
          <span className="text-sm text-grey-500 font-semibold mr-1">5(3)</span>
          <span className="text-sm text-grey-500 font-semibold mr-1">{data.data.address}</span>
        </div>
        <div className="flex items-center mt-1">
          <p className="text-black text-sm md:text-md md:text-md xl:text-md 2xl:text-md 3xl:text-md opacity-70">
            {truncateText(
              'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
              10, // Maximum words
              3 // Maximum lines
            )}
          </p>
        </div>
        <div className="my-4">
          <button className="btn bg-white text-black py-2 btn btn-md px-4 rounded cursor-pointer hover:bg-primary hover:text-white border border-black hover:border-primary transition duration-300 w-full">
            Request Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleVendorCards;
