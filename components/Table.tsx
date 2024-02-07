import React from "react";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Info,
  Search,
} from "lucide-react";
const Table = () => {
  return (
    <div className="flex flex-col gap-4 px-8 py-3">
      <p className="text-xl font-medium">Transactions | This Month</p>
      <div className="bg-white p-3 rounded-md shadow-sm flex flex-col gap-y-3">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="border-2 px-2 gap-2 py-2 w-80 rounded-md flex items-center font-thin">
            <Search size={18} className="text-[#4c4c4c]" />
            <input
              type="text"
              placeholder="Search by order ID.."
              className="w-full focus:outline-none text-[#4c4c4c] text-base font-thin placeholder:text-[#4c4c4c] placeholder:font-thin"
            />
          </div>
          <div className="flex flex-row gap-x-2">
            <button className="border-2 py-2 px-3 flex flex-row gap-x-2 text-[#4c4c4c] font-light items-center text-base rounded-md">
              Sort <ArrowUpDown size={18} />
            </button>
            <button className="border-2 py-2 px-3 flex flex-row gap-x-2 text-[#4c4c4c] font-light items-center text-base rounded-md">
              <Download size={20} />
            </button>
          </div>
        </div>
        <div className="bg-[#F2F2F2] py-3 px-4 rounded-md grid grid-cols-4 text-[#4C4C4C] font-medium">
          <p className="w-full flex items-center justify-start">Order ID</p>
          <p className="flex items-center gap-x-1 w-full justify-start">
            Order date <ChevronDown size={18} />
          </p>
          <p className="w-full flex items-center justify-center">
            Order amount
          </p>
          <p className="flex items-center gap-x-2 w-full justify-end">
            Transaction fees
            <Info size={14} />
          </p>
        </div>
        {Array(15)
          .fill(0)
          .map((_, index) => {
            return (
              <div
                key={index}
                className="py-3 px-4 border-b-2 grid grid-cols-4"
              >
                <p className="w-full flex items-center justify-start text-[#3180BD]">
                  #281209
                </p>
                <p className="w-full flex items-center justify-start">
                  7 July,2023
                </p>
                <p className="w-full flex items-center justify-center">
                  &#8377;1,278.23
                </p>
                <p className="w-full flex items-center justify-end">
                  &#8377;22
                </p>
              </div>
            );
          })}
        <div className="w-full flex items-center justify-center mt-2">
          <div className="flex flex-row gap-x-2">
            <button className="border-2 py-1 px-2 flex flex-row gap-x-1 text-[#4c4c4c] font-light items-center text-base rounded-md">
              <ChevronLeft size={20} />
              Previous
            </button>
            <button className="py-1 px-2 text-[#4c4c4c] font-light items-center text-base rounded-md">
              1
            </button>
            <button className="py-1 px-2 -mx-3 text-[#4c4c4c] font-light items-center text-base rounded-md">
              ...
            </button>
            {Array(7)
              .fill(0)
              .map((_, index) => {
                return (
                  <button
                    className={`py-1 px-2 font-light items-center text-base rounded-md ${
                      index + 10 === 10 ? "bg-[#146EB4] text-white" : ""
                    }`}
                    key={index}
                  >
                    {index + 10}
                  </button>
                );
              })}
            <button className="border-2 py-1 px-3 flex flex-row gap-x-1 text-[#4c4c4c] font-light items-center text-base rounded-md">
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
