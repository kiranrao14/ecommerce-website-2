
// src/app/login/page.tsx

import React from 'react';
import Image from 'next/image';
import TopHeader from "../Components/Header";
import { Header } from "../Components/Header";
import Footer from "../Components/Footer";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <TopHeader />
      <Header />

      <main className="flex-grow p-4 lg:flex lg:items-center lg:justify-center">
        <div className="lg:flex lg:items-center lg:justify-between lg:w-full lg:space-x-8">
          {/* Left side Image */}
          <div className="hidden lg:block">
            <Image
              src="/images/Side Image.png"
              height={600}
              width={400}
              alt="side-img"
            />
          </div>

          {/* Right side Form */}
          <div className="flex flex-col space-y-4 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-center">
              Log in to Exclusive
            </h2>
            <span className="text-sm text-gray-500 text-center">
              Enter your details below
            </span>

            {/* Email input with underline */}
            <div className="relative">
              <input
                type="text"
                placeholder="Email or PhoneNumber"
                className="border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full p-2"
              />
            </div>

            {/* Password input with underline */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full p-2"
              />
            </div>

            {/* Login Button */}
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
              Login
            </button>

            {/* Forgot Password link */}
            <span className="text-sm text-red-500 hover:underline cursor-pointer text-center">
              Forgot password?
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
