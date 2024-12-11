
import React from 'react';
import TopHeader from "../Components/Header";
import { Header } from "../Components/Header";
import Footer from "../Components/Footer";
const page = () => {
  return (
    <>
    <TopHeader/>
    <Header/>
    <div className=" mt-16 flex flex-wrap justify-between gap-1 p-4 ">
      {/* Left Section - Account Information, Address Book, etc. */}
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-semibold mb-4">Manage My Account</h2>
        <div>
          <h3 className="text-lg font-semibold text-red-500">My Profile</h3>
          <span className="block mb-2">Address Book</span>
        </div>
        <br />
        <h2 className="text-2xl font-semibold mb-4">Address Book</h2>
        <span className="block mb-2">My Returns</span>
        <span className="block mb-2">My Cancellations</span>
        
        <h2 className="text-2xl font-semibold mb-4">My WishList</h2>
      </div>

      {/* Right Section - Edit Your Profile */}
      <div className="flex-1 p-4 border-l border-gray-300">
        <h2 className="text-2xl font-semibold mb-4 text-red-500">Edit Your Profile</h2>

        {/* Profile Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              id="first-name"
              placeholder="Enter your first name"
              className="border w-full p-2 rounded mt-1"
            />
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              id="last-name"
              placeholder="Enter your last name"
              className="border w-full p-2 rounded mt-1"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter your address"
            className="border w-full p-2 rounded mt-1"
          />
        </div>

        {/* Password Fields */}
        <div className="mb-4">
          <label htmlFor="current-password" className="block text-sm font-medium">Current Password</label>
          <input
            type="password"
            id="current-password"
            placeholder="Enter current password"
            className="border w-full p-2 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="new-password" className="block text-sm font-medium">New Password</label>
          <input
            type="password"
            id="new-password"
            placeholder="Enter new password"
            className="border w-full p-2 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-sm font-medium">Confirm New Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm new password"
            className="border w-full p-2 rounded mt-1"
          />
        </div>

        {/* Save Button */}
        <button className="bg-red-500 text-white py-2 px-4 rounded mt-4">Save Changes</button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default page;
