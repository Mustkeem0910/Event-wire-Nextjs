"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { CiTrophy } from 'react-icons/ci';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

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
    <div className={`${className} custom-prev-arrow`} onClick={onClick}>
      <MdOutlineKeyboardArrowLeft className="btn btn-circle bg-white z-50 text-black shadow-xl hover:bg-white transition-transform transform hover:scale-105" />
    </div>
  );
}

export default class CustomArrows extends Component {
  
  render() {
    const { venues } = this.props;
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  

  return (
    <div>
      <Slider {...settings}>
        {venues.map((venue, index) => (
          <div key={index} className="card w-full mr-3 p-2">
            <div className="mt-5 flex justify-between">
              <div className="card shadow-xl">
                <figure>
                  <img
                    src={venue.venue_images[0].image.replace('image/upload/', '')} alt={venue.name} className='w-96 h-60 object-cover'
                  />
                </figure>
                <div className="p-2">
                  <h2 className="text-sm text-grey-200 font-semibold">
                    {venue.name}
                  </h2>
                  <h2 className="text-black text-lg font-semibold hover:text-primary">
                    {venue.address}
                  </h2>
                  <div className="flex items-center mt-1">
                    <FaStar className="text-yellow-500 h-5 w-5 mr-1" />
                    <span className="text-xs text-grey-500 font-semibold mr-1">
                      {venue.rating}
                    </span>
                    <span className="text-xs text-grey-500 font-semibold mr-1">
                      {venue.address}
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    <HiOutlineUserGroup className="h-5 w-5 mr-1" />
                    <span className="text-xs text-grey-500 font-semibold ">
                      {venue.capacity}
                    </span>
                  </div>
                  <div className="badge badge-warning mt-2">
                    <CiTrophy />
                  </div>
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
      </Slider>
    </div>
  );
}
}
