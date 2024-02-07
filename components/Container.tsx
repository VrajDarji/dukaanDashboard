import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-0 md:pl-[16.67%] w-full bg-[#FAFAFA] pb-4 text-black">
      {children}
    </div>
  );
};

export default Container;
