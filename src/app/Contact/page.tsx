
import React from 'react'
import TopHeader from '../Components/Header';
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
        <TopHeader />
        <Header />

        <div className=" min-h-screen mt-20 md:mt-32 flex flex-col lg:flex-row justify-between p-4 lg:p-8 space-y-8 lg:space-y-0">
            {/* Left side: Call to Us and Write To Us sections */}
            <div className="flex flex-col w-full lg:w-1/2 space-y-4">
                {/* Call To Us section */}
                <div className="flex items-center space-x-2">
                    <FaPhoneAlt className="text-red-500" />
                    <h3 className="text-xl font-semibold">Call To Us</h3>
                </div>
                <span className="text-sm">We are available 24/7, 7 days a week.</span>
                <span className="text-sm">Phone: +8801611112222</span>

                {/* Write To Us section */}
                <div className="flex items-center space-x-2">
                    <MdAttachEmail className="text-red-500" />
                    <h3 className="text-xl font-semibold">Write To Us</h3>
                </div>
                <span className="text-sm">Fill out our form and we will contact you within 24 hours.</span>
                <span className="text-sm">Emails: customer@exclusive.com</span>
                <span className="text-sm">Emails: support@exclusive.com</span>
            </div>

            {/* Right side: Contact Form */}
            <div className="flex flex-col w-full lg:w-1/2 space-y-4">
                {/* Contact Form Inputs */}
                <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-2 border border-gray-300 rounded w-full lg:w-1/3 bg-gray-100"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-2 border border-gray-300 rounded w-full lg:w-1/3 bg-gray-100"
                    />
                    <input
                        type="text"
                        placeholder="Your Phone"
                        className="p-2 border border-gray-300 rounded w-full lg:w-1/3 bg-gray-100"
                    />
                </div>

                {/* Message Input */}
                <textarea
                    placeholder="Your Message"
                    className="p-8 border border-gray-300 rounded w-full bg-gray-100"
                />
                <div className="flex justify-center items-center md:mb-52">
                    <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
                        Send Message
                    </button>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
};

export default Contact;
