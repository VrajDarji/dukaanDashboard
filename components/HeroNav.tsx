import { ChevronDown } from "lucide-react";
import React from "react";

const HeroNav = () => {
  return (
    <div className="flex flex-col gap-4 px-8 py-3">
      <div className="flex flex-row items-center justify-between">
        <p className="text-xl font-medium">Overview</p>
        <button className="px-2 py-2 border-2 rounded-md flex flex-row gap-1 bg-white items-center text-base">
          Last Month <ChevronDown size={20} />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="w-full h-full bg-white rounded-md shadow-md px-6 py-6 flex flex-col gap-4">
          <p className="text-lg font-normal">Online orders</p>
          <h1 className="text-4xl font-semibold">231</h1>
        </div>
        <div className="w-full h-full bg-white rounded-md shadow-md px-6 py-6 flex flex-col gap-4">
          <p className="text-lg font-normal">Amount Recieved</p>
          <h1 className="text-4xl font-semibold">&#8377;23,92,312.19</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroNav;
