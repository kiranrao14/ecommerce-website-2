
import React from 'react';
import TopHeader from '../Components/Header';
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';  
import Delivery from '../Components/Delivery';

const About = () => {
  return (
    <>
      <TopHeader />
      <Header />
      
      {/* Main Story Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        {/* Text Section */}
        <div className="max-w-md ml-10 mb-6 md:mb-0">
          <h1 className="font-bold text-3xl mb-6">Our Story</h1>
          <p className="text-gray-700">
            Launched in 2015, Exclusive is South Asia&apos;s premier online shopping 
            marketplace with an active presence in Bangladesh. Supported by a wide 
            range of tailored marketing, data, and service solutions, Exclusive has 
            10,500 sellers and 300 brands and serves 3 million customers across the region. 
            Exclusive has more than 1 million products to offer, growing at a very fast pace. 
            Exclusive offers a diverse assortment in categories ranging from consumer goods 
            to electronics and fashion.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mt-6 md:mt-0">
          <Image
            src="/images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
            height={400}
            width={400}
            alt="girl-img"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      {/* Logos Section */}
      <div className="flex flex-wrap justify-center items-center mt-8 gap-4 px-4 sm:px-6 md:px-8">

        <Image
          src="/images/Frame 870.png"
          height={100}
          width={200}
          alt="logo-img"
          className="transition duration-300 transform hover:scale-110 hover:bg-red-500"
        />
        <Image
          src="/images/Frame 871.png"
          height={100}
          width={200}
          alt="logo-img"
          className="h-48 transition duration-300 transform hover:scale-110 hover:bg-red-500"
        />
        <Image
          src="/images/Frame 872.png"
          height={100}
          width={200}
          alt="logo-img"
          className="transition duration-300 transform hover:scale-110 hover:bg-red-500"
        />
        <Image
          src="/images/Frame 873.png"
          height={100}
          width={200}
          alt="logo-img"
          className="transition duration-300 transform hover:scale-110 hover:bg-red-500"
        />
      </div>

      {/* Team Section */}
      <div className="flex flex-wrap justify-center items-start gap-8 mt-8">
        {/* Person 1 */}
        <div className="flex flex-col items-center group max-w-xs">
          <div className="relative">
            <Image 
              src="/images/image 46.png" 
              height={100} 
              width={200} 
              alt="man-img" 
              className="h-52 rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
          <h1 className="text-xl font-semibold mt-4">Tom Cruise</h1>
          <span className="text-gray-600 mb-4">Founder & Chairman</span>
          <div className="flex gap-4">
            <Link href="https://twitter.com" passHref>
              <FaTwitter size={30} className="text-blue-500 hover:text-blue-700 transition duration-200" />
            </Link>
            <Link href="https://instagram.com" passHref>
              <FaInstagram size={30} className="text-pink-500 hover:text-pink-700 transition duration-200" />
            </Link>
            <Link href="https://linkedin.com" passHref>
              <FaLinkedin size={30} className="text-slate-600 hover:text-blue-900 transition duration-200" />
            </Link>
          </div>
        </div>

        {/* Person 2 */}
        <div className="flex flex-col items-center group max-w-xs">
          <div className="relative">
            <Image 
              src="/images/image 47.png" 
              height={300} 
              width={200} 
              alt="man-img" 
              className="h-52 rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
          <h1 className="text-xl font-semibold mt-4">Will Smith</h1>
          <span className="text-gray-600 mb-4">Product Designer</span>
          <div className="flex gap-4">
            <Link href="https://twitter.com" passHref>
              <FaTwitter size={30} className="text-blue-500 hover:text-blue-700 transition duration-200" />
            </Link>
            <Link href="https://instagram.com" passHref>
              <FaInstagram size={30} className="text-pink-500 hover:text-pink-700 transition duration-200" />
            </Link>
            <Link href="https://linkedin.com" passHref>
              <FaLinkedin size={30} className="text-slate-600 hover:text-blue-900 transition duration-200" />
            </Link>
          </div>
        </div>

        {/* Person 3 */}
        <div className="flex flex-col items-center group max-w-xs">
          <div className="relative">
            <Image 
              src="/images/image 51.png" 
              height={300} 
              width={200} 
              alt="man-img" 
              className="h-52 rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
          <h1 className="text-xl font-semibold mt-4">Emma Watson</h1>
          <span className="text-gray-600 mb-4">Managing Director</span>
          <div className="flex gap-4">
            <Link href="https://twitter.com" passHref>
              <FaTwitter size={30} className="text-blue-500 hover:text-blue-700 transition duration-200" />
            </Link>
            <Link href="https://instagram.com" passHref>
              <FaInstagram size={30} className="text-pink-500 hover:text-pink-700 transition duration-200" />
            </Link>
            <Link href="https://linkedin.com" passHref>
              <FaLinkedin size={30} className="text-slate-600 hover:text-blue-900 transition duration-200" />
            </Link>
          </div>
        </div>
      </div>

      <Delivery />

      <Footer />
    </>
  );
};

export default About;
