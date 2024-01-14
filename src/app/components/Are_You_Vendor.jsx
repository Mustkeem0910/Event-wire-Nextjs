"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { BsBank2 } from 'react-icons/bs';

const Are_You_Vendor = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/sector-login');
  };

  return (
    <div className="hidden xl:block">
      {/* This div will be hidden on screens smaller than lg */}
      <div className="flex items-center justify-end pt-1 mx-24 cursor-pointer">
        <button className="flex font-[Poppins] items-center text-black font-normal" onClick={handleClick}>
          <BsBank2 className="mr-2 text-lg" /> ARE YOU A VENDOR?
        </button>
      </div>
    </div>
  );
};

export default Are_You_Vendor;