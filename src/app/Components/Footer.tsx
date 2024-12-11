
import React from 'react';
import { IoSend } from "react-icons/io5";
import { FaFacebookF, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='h-[96] pt-10 pb-12 bg-black text-white'>
      <div className='flex flex-wrap justify-evenly gap-8'>
        {/* Subscribe Section */}
        <div>
          <h2 className="text-lg font-bold mb-2">Exclusive</h2>
          <h2 className='mb-2 font-poppins text-lg font-medium'>Subscribe</h2>
          <p className='mb-2 font-poppins'>Get 10% off your first order</p>
          <div className='flex items-center border border-white rounded px-2 py-1'>
            <input
              type='text'
              placeholder='Enter your email'
              className='bg-black text-white w-full outline-none'
            />
            <IoSend className='w-5 h-5 ml-2' />
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h2 className='font-poppins text-lg font-medium mb-2'>Support</h2>
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h2 className='font-poppins text-lg font-medium mb-2'>Account</h2>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        {/* Quick Link Section */}
        <div>
          <h2 className='font-poppins text-lg font-medium mb-2'>Quick Link</h2>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        {/* Download Section */}
        <div className='text-center'>
          <h2 className='font-poppins text-lg font-medium mb-2'>Download</h2>
          <p>Save $3 with App New User Only</p>
          <Image src='/images/Frame 719.png' height={100} width={150} alt='footer-img' className='mt-4' />
          {/* Social Media Icons Below Download Section */}
          <div className='flex justify-center mt-4 space-x-2'>
            <FaFacebookF className='w-5 h-5 hover:text-gray-400 cursor-pointer' />
            <FaInstagramSquare className='w-5 h-5 hover:text-gray-400 cursor-pointer' />
            <TiSocialTwitter className='w-7 h-5 hover:text-gray-400 cursor-pointer' />
            <FaLinkedin className='w-5 h-5 hover:text-gray-400 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
