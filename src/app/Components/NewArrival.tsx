
import React from 'react';
import Image from 'next/image';

const NewArrival = () => {
  return (
    <div className="w-full flex flex-col items-center px-5 sm:px-20">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col">
          <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1 mt-0">
            Featured
          </h3>
          <h1 className="text-slate-800 font-bold text-2xl mt-2 mb-2">
            New Arrival
          </h1>
        </div>

        {/* Grid Layout for Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3 items-center mt-3">
          {/* Left Image */}
          <div className="flex justify-center sm:justify-start">
            <Image
              src="/images/Frame 684.png"
              height={600} // Default for mobile
              width={450} // Default for mobile
              alt="new-arrival"
              className="object-contain sm:h-[700px] sm:w-[500px] md:h-[800px] md:w-[600px]"
            />
          </div>

          {/* Right Images */}
          <div className="col-span-1 sm:col-span-2 flex flex-col items-center sm:items-start gap-1 sm:gap-2">
            {/* Girl Image */}
            <Image
              src="/images/Frame 685.png"
              height={500}
              width={500}
              alt="new-arrival"
              className="object-contain"
            />
            {/* Perfume Image */}
            <Image
              src="/images/Frame 737.png"
              height={200}
              width={500}
              alt="new-arrival"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
