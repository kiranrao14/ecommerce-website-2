'use client'
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TopHeader from "../Components/Header";
import { Header } from "../Components/Header";
import Footer from "../Components/Footer";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/Login"); // Navigate to the login page
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <TopHeader />
        <Header />
      </header>

      <main className="flex-grow p-4 lg:flex lg:items-center lg:justify-center">
        <div className="lg:flex lg:items-center lg:justify-between lg:w-full lg:space-x-8">
          <div className="hidden lg:block">
            <Image
              src="/images/Side Image.png"
              height={600}
              width={400}
              alt="side-img"
            />
          </div>

          <div className="flex flex-col space-y-4 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-center">
              Create an account
            </h2>
            <span className="text-sm text-gray-500 text-center">
              Enter your details below
            </span>

            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded w-full p-2"
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border border-gray-300 rounded w-full p-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded w-full p-2"
            />

            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Create Account
            </button>

            <button className="flex items-center justify-center text-gray-700 border border-gray-300 rounded w-full p-2 hover:bg-gray-100">
              <FcGoogle className="mr-2" />
              Signup with Google
            </button>

            <span
              className="text-sm text-blue-500 hover:underline cursor-pointer text-center"
              onClick={handleLoginClick} // Attach click handler
            >
              Already have an account? Login
            </span>
          </div>
        </div>
      </main>

      
      <Footer/>
    </div>
  );
};

export default Signup;
