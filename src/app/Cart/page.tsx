
import Image from 'next/image';
import React from 'react';
import TopHeader from "../Components/Header";
import { Header } from "../Components/Header";
import Footer from "../Components/Footer";

const Card = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="flex flex-col md:flex-row mt-12">
        {/* Left side for Products */}
        <div className="w-full md:w-3/4 p-4">
          {/* Header row with labels: Product, Price, Quantity, Subtotal */}
          <div className="grid grid-cols-4 gap-4 font-bold mb-4 text-center">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>

          {/* Product 1 */}
          <div className="grid grid-cols-4 gap-4 items-center mb-4">
            <div className="flex items-center">
              <Image src='/images/g92-2-500x500 1.png' height={50} width={45} alt='LCD Monitor' />
              <span className="ml-2">LCD Monitor</span>
            </div>
            <span className="text-center">$300</span> {/* Align price to center */}
            <div className="text-center">
              <input
                type="number"
                value={2}
                min={1}
                className="w-12 p-1 text-center border rounded"
              />
            </div>
            <span className="text-center">$600</span> {/* Align subtotal to center */}
          </div>

          {/* Product 2 */}
          <div className="grid grid-cols-4 gap-4 items-center mb-4">
            <div className="flex items-center">
              <Image src='/images/Frame 613.png' height={50} width={45} alt='H1 Gamepad' />
              <span className="ml-2">H1 Gamepad</span>
            </div>
            <span className="text-center">$150</span> {/* Align price to center */}
            <div className="text-center">
              <input
                type="number"
                value={1}
                min={1}
                className="w-12 p-1 text-center border rounded"
              />
            </div>
            <span className="text-center">$150</span> {/* Align subtotal to center */}
          </div>

          {/* Coupon Code Section */}
          <div className="mt-16 flex items-center">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border p-2 mr-2 rounded"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded">Apply Coupon</button>
          </div>
        </div>

        {/* Right side for Cart Total */}
        <div className="w-full md:w-1/4 p-6 border bg-gray-100 rounded-lg shadow-md mt-4 md:mt-32">
          {/* Cart Total Section */}
          <div className="mb-4">
            {/* Cart Total */}
            <div className="flex justify-between mb-2">
              <span>Cart Total</span>
              <span></span> {/* Empty span for alignment */}
            </div>

            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>

            {/* Cart Total section placed below Subtotal */}
            <div className="flex justify-between font-bold mb-4">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>

          {/* Proceed to Checkout Button */}
          <button className="w-full bg-red-500 text-white py-2 rounded">Proceed to Checkout</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Card;
