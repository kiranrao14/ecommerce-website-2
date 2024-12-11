
import React from 'react';
import Image from 'next/image';

function Music() {
  return (
    <div className=' mb-12 rounded-xl bg-black flex flex-col md:flex-row items-center justify-center p-8 mx-auto mt-8 max-w-7xl'>
      {/* Left Side Content */}
      <div className='sm:w-full md:w-[50%] text-center md:text-left '>
        <h3 className='font-bold text-green-500'>Categories</h3>
        <h1 className='text-white text-2xl font-bold pt-4'>Enhance Your</h1>
        <h1 className='text-white text-2xl font-bold'>Music Experience</h1>

        {/* Timer */}
        <div className='flex sm:flex-wrap sm:justify-center md:justify-start mt-5'>
          <div className='bg-slate-50 w-[70px] h-[70px] rounded-full flex flex-col justify-center items-center mx-2'>
            <span className='font-bold text-lg'>23</span>
            <span>Hours</span>
          </div>
          
          <div className='bg-slate-50 w-[70px] h-[70px] rounded-full flex flex-col justify-center items-center mx-2'>
            <span className='font-bold text-lg'>05</span>
            <span>Days</span>
          </div>
          
          <div className='bg-slate-50 w-[70px] h-[70px] rounded-full flex flex-col justify-center items-center mx-2'>
            <span className='font-bold text-lg'>59</span>
            <span>Minutes</span>
          </div>
          
          <div className='bg-slate-50 w-[70px] h-[70px] rounded-full flex flex-col justify-center items-center mx-2'>
            <span className='font-bold text-lg'>35</span>
            <span>Second</span>
          </div>
        </div>

        <button className='bg-green-600 text-white rounded p-3 mt-6 hover:bg-green-900'>
          Buy Now
        </button>
      </div>

      {/* Right Side Image */}
      <div className='md:w-[50%] flex justify-center items-center mt-4 md:mt-0'>
        <Image
          src='/images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
          height={500}  // Increased height
          width={500}   // Increased width for better visibility
          alt='music-img'
          className='rounded-lg'
        />
      </div>
    </div>
  );
}

export default Music;
