import {
  ChevronDown,
  HelpCircle,
  MessageCircleMore,
  Search,
} from "lucide-react";
import React from "react";

const Nav = () => {
  return (
    <div className="h-16 border-b-2 px-3 py-2 flex flex-row items-center justify-between bg-white">
      <div className="flex flex-rowa gap-4">
        <p className="text-xl font-medium">Payments</p>
        <a
          href="#"
          className="text-xs text-gray-600 flex flex-row gap-1 items-center"
        >
          <HelpCircle strokeWidth={1} size={15} />
          How it works
        </a>
      </div>
      <div className="bg-[#F2F2F2] px-2 gap-2 py-2 w-96 rounded-md flex items-center">
        <Search size={18} className="text-[#808080]" />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="bg-[#f2f2f2] w-full focus:outline-none text-[#808080] placeholder:text-[#808080]"
        />
      </div>
      <div className="flex flex-row gap-2">
        <button className="h-10 aspect-square rounded-full bg-[#E6E6E6] flex items-center justify-center">
          <MessageCircleMore size={25} />
        </button>
        <button className="h-10 aspect-square rounded-full bg-[#E6E6E6] flex items-center justify-center">
          <ChevronDown size={25} />
        </button>
      </div>
    </div>
  );
};

export default Nav;
