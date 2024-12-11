'use client'
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle, FaRegHeart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // Menu and Close icons
import Link from "next/link";

const TopHeader = () => {
  return (
    <div className="h-[48px] flex flex-wrap items-center justify-between px-4 sm:px-8 lg:px-24 bg-black text-white">
      <p className="text-sm font-poppins text-center sm:text-left">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="font-semibold underline ml-2">ShopNow</span>
      </p>
      <select
        name="select"
        id="select"
        className="bg-black text-white border border-gray-500 rounded px-2 py-1 text-sm"
      >
        <option value="English">English</option>
      </select>
    </div>
  );
};

export default TopHeader
export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Main Header */}
      <div className="mt-10 flex items-center justify-between px-4 sm:px-8 lg:px-32 py-4">
        {/* Logo */}
        <h2 className="text-lg font-bold text-black sm:text-xl lg:text-2xl">
          Exclusive
        </h2>

        {/* Toggle Button for Small Screens */}
        <button
          className="sm:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navigation */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white shadow-md sm:static sm:flex sm:bg-transparent sm:shadow-none sm:gap-6 text-black sm:items-center sm:flex-row sm:justify-center`}
        >
          <li className="font-poppins text-sm font-normal cursor-pointer px-4 py-2 sm:p-0">
            <Link href="/">Home</Link>
          </li>
          <li className="font-poppins text-sm font-normal cursor-pointer px-4 py-2 sm:p-0">
            <Link href="../About">About</Link>
          </li>
          <li className="font-poppins text-sm font-normal cursor-pointer px-4 py-2 sm:p-0">
            <Link href="../Contact">Contact</Link>
          </li>
          <li className="font-poppins text-sm font-normal cursor-pointer px-4 py-2 sm:p-0">
            <Link href="../Signup">SignUp</Link>
          </li>
        </ul>

        {/* Search and Icons */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow bg-transparent outline-none text-sm text-black"
            />
            <IoSearchSharp className="pl-1 w-5 h-5 text-gray-600" />
          </div>

          {/* Icons */}
          <FaRegHeart className="w-5 h-5 text-black cursor-pointer" />
          <Link href="Cart">
            <FaCartShopping className="w-5 h-5 text-black cursor-pointer" />
          </Link>
          <Link href="MyAccount">
            <FaRegUserCircle className="w-6 h-6 text-black cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Show Icons and Search Bar in Small Screens */}
      {menuOpen && (
        <div className="flex sm:hidden flex-col items-center gap-4 px-4 py-4">
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-full">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow bg-transparent outline-none text-sm text-black"
            />
            <IoSearchSharp className="pl-1 w-5 h-5 text-gray-600" />
          </div>
          <div className="flex gap-4">
            <FaRegHeart className="w-5 h-5 text-black cursor-pointer" />
            <Link href="Cart">
              <FaCartShopping className="w-5 h-5 text-black cursor-pointer" />
            </Link>
            <Link href="MyAccount">
              <FaRegUserCircle className="w-6 h-6 text-black cursor-pointer" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
