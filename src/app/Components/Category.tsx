
'use client';
import React, { useRef } from 'react';
import { MdPhoneAndroid } from 'react-icons/md';
import { HiComputerDesktop } from 'react-icons/hi2';
import { BsSmartwatch } from 'react-icons/bs';
import { FaCamera } from 'react-icons/fa6';
import { FaHeadphones } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';

const Category = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full px-4 mt-9">
      {/* Heading Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="ml-1 text-red-500 font-bold border-l-8 border-red-500">Categories</div>
          <h1 className="text-slate-800 text-3xl mt-6">Browse By Category</h1>
        </div>
        <div className="flex space-x-2">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="text-black text-2xl font-bold"
          >
            ←
          </button>
          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="text-black text-2xl font-bold"
          >
            →
          </button>
        </div>
      </div>

      {/* Scrollable Category List */}
      <div
        ref={scrollContainer}
        className="flex space-x-4 overflow-x-scroll no-scrollbar"
      >
        {/* Category Boxes */}
        {[
          { icon: <MdPhoneAndroid className="text-5xl" />, label: 'Phone' },
          { icon: <HiComputerDesktop className="text-5xl" />, label: 'Computer' },
          { icon: <BsSmartwatch className="text-5xl" />, label: 'Smartwatch' },
          { icon: <FaCamera className="text-5xl" />, label: 'Camera' },
          { icon: <FaHeadphones className="text-5xl" />, label: 'Headphones' },
          { icon: <IoGameController className="text-5xl" />, label: 'Gaming' },
        ].map((item, index) => (
          <div
            key={index}
            className="group shadow-md border border-gray-200 rounded-lg hover:bg-red-500 w-[200px] h-[150px] flex flex-col items-center justify-center space-y-2 text-center transition duration-300"
          >
            {item.icon}
            <p className="text-lg font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
