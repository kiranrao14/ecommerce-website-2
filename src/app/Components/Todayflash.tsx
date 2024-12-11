
'use client';
import Image from 'next/image';

import { FaRegStar, FaRegEye, FaRegHeart } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

interface Product {
  title: string;
  price: string;
  oldprice?: string;
  image: string;
  rating: number;
  reviews: string;
}

const products: Product[] = [
  {
    title: 'HAVIT HV-G92 Gamepad',
    price: '$260',
    oldprice: '$360',
    image: '/images/g92-2-500x500 1.png',
    rating: 5,
    reviews: '65',
  },
  {
    title: 'AK-900 Wired Keyboard',
    price: '$960',
    oldprice: '$1160',
    image: '/images/ak-900-01-500x500 1.png',
    rating: 4,
    reviews: '65',
  },
  {
    title: 'IPS LCD Gaming Monitor',
    price: '$160',
    oldprice: '$170',
    image: '/images/Frame 613.png',
    rating: 4,
    reviews: '65',
  },
  {
    title: 'S-Series Comfort Chair ',
    price: '$360',
    oldprice: '$150',
    image: '/images/Frame 614.png',
    rating: 4,
    reviews: '65',
  },
];

const Todayflash = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; // 5 days from now
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 mt-9">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3">Today&apos;s</h3>
          <h1 className="text-slate-800 font-bold text-lg sm:inline-block">Flash Sales</h1>
        </div>
        <div className="flex gap-4">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => (
            <div key={i} className="flex flex-col items-center bg-neutral-100 p-4 rounded-md">
              <h2 className="text-2xl font-bold">{Object.values(timeLeft)[i]}</h2>
              <span className="text-gray-500 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductBox = ({ product }: { product: Product }) => (
  <div className="w-[320px] flex-shrink-0">
    <div
      className="group shadow-md bg-neutral-200 w-full 
        h-[180px] flex justify-center items-center relative cursor-pointer"
    >
      <div className="absolute top-2 left-2 bg-red-500 text-white px-1 py-1 text-xs font-bold rounded-md">
        25% Off
      </div>
      <Image
        src={product.image}
        width={150}
        height={100}
        alt={product.title}
        className="object-contain transform transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute top-2 right-2 flex flex-col items-center gap-2">
        <FaRegHeart className="text-red-500" />
        <FaRegEye className="text-blue-500" />
      </div>
      <button
        className="w-full absolute bottom-0 bg-black text-white px-4 py-1 rounded-sm 
            opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Add to Cart
      </button>
    </div>
    <h1 className="font-bold pt-2 text-lg text-center">{product.title}</h1>
    <div className="flex items-center justify-center space-x-2">
      <span className="text-red-500 font-bold">{product.price}</span>
      {product.oldprice && <span className="line-through text-gray-500">{product.oldprice}</span>}
    </div>
  </div>
);

const Products = () => {
  const productContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div
        className="flex gap-4 px-4 overflow-x-scroll no-scrollbar"
        ref={productContainerRef}
      >
        {products.map((product, index) => (
          <ProductBox key={index} product={product} />
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="/products"
          className="px-8 py-5  bg-red-500 text-white font-bold rounded hover:bg-red-600"
        >
          View All Products
        </a>
      </div>
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div>
      <Todayflash />
      <Products />
    </div>
  );
};

export default ParentComponent;
