"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    redirect("/payments");
  }, []);
  return <div></div>;
};

export default Page;
