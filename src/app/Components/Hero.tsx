'use client'
import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import { FaApple, FaArrowRight } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='p-6 bg-neutral-100 text-black'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-6 max-w-7xl mx-auto'>
        {/* Left Sidebar */}
        <div className='w-full lg:w-1/4'>
          <ul className='space-y-4 text-center lg:text-left'>
            <li className='flex items-center justify-between lg:justify-start'>
              Woman&apos;s Fashion <IoIosArrowForward className=' lg:inline ml-2' />
            </li>
            <li className='flex items-center justify-between lg:justify-start'>
              Men&apos;s Fashion  <IoIosArrowForward className=' ml-2 lg:inline' />
            </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className='bg-black text-white rounded-lg p-6 w-full lg:w-[65%] lg:h-[300px] pt-12 mr-0 lg:mr-20 relative flex flex-col lg:flex-row items-center lg:items-start'>
          {/* Content inside black box */}
          <div className='w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start'>
            {/* Apple Icon */}
            <div className='flex items-center mb-4'>
              <FaApple className='text-3xl mr-2' />
              <span className='text-xl'>iPhone 14 Series</span>
            </div>
            {/* Promo Text */}
            <h2 className='text-3xl lg:text-5xl font-bold mb-4 text-center lg:text-left'>
              Up to 10% off<br />Voucher
            </h2>
            <p className='flex items-center text-lg font-medium cursor-pointer'>
              Shop Now <FaArrowRight className='ml-2' />
            </p>
          </div>

          {/* iPhone Image */}
          <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0'>
            <Image
              src='/images/hero_endframe__cvklg0xk3w6e_large 2.png'
              height={400}
              width={300}
              alt='iPhone'
              className='rounded-lg'
            />
          </div>
          <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 translate-y-1/2'>
    <Image 
      src='/images/Frame 564.png' 
      height={200} 
      width={100} 
      alt='circle-img' 
    />
  </div>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;






