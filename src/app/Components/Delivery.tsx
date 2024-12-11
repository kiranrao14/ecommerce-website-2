
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadphones } from "react-icons/fa";
import { FaMoneyBillWaveAlt } from "react-icons/fa";

const Delivery = () => {
  return (
    <div className="w-full flex justify-center items-center py-8">
      <div
        className="w-full lg:w-[70%] flex flex-col lg:flex-row justify-between items-center gap-6"
      >
        {/* BOX1 */}
        <div className="flex flex-col items-center text-center bg-gray-50 shadow-lg rounded-lg p-4 w-full sm:w-[300px]">
          <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-black border-4 border-stone-400">
            <TbTruckDelivery className="text-3xl text-slate-400" />
          </div>
          <h1 className="font-bold text-lg mt-4">FREE AND FAST DELIVERY</h1>
          <p className="text-sm text-gray-600">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* BOX2 */}
        <div className="flex flex-col items-center text-center bg-gray-50 shadow-lg rounded-lg p-4 w-full sm:w-[300px]">
          <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-black border-4 border-stone-400">
            <FaHeadphones className="text-3xl text-slate-400" />
          </div>
          <h1 className="font-bold text-lg mt-4">24/7 CUSTOMER SERVICE</h1>
          <p className="text-sm text-gray-600">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* BOX3 */}
        <div className="flex flex-col items-center text-center bg-gray-50 shadow-lg rounded-lg p-4 w-full sm:w-[300px]">
          <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-black border-4 border-stone-400">
            <FaMoneyBillWaveAlt className="text-3xl text-slate-400" />
          </div>
          <h1 className="font-bold text-lg mt-4">MONEY BACK GUARANTEE</h1>
          <p className="text-sm text-gray-600">
            We return money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
