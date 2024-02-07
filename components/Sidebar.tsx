"use client";
import {
  ChevronDown,
  Home,
  Clipboard,
  LayoutGrid,
  Truck,
  BarChart,
  CreditCard,
  Navigation,
  BadgePercent,
  Users,
  Palette,
  Zap,
  Megaphone,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const links = [
  { icon: <Home strokeWidth={1.5} size={20} />, tag: "home" },
  { icon: <Clipboard strokeWidth={1.5} size={20} />, tag: "orders" },
  { icon: <LayoutGrid strokeWidth={1.5} size={20} />, tag: "poducts" },
  { icon: <Truck strokeWidth={1.5} size={20} />, tag: "delivery" },
  { icon: <Megaphone strokeWidth={1.5} size={20} />, tag: "marketing" },
  { icon: <BarChart strokeWidth={1.5} size={20} />, tag: "analytics" },
  { icon: <CreditCard strokeWidth={1.5} size={20} />, tag: "payments" },
  { icon: <Navigation strokeWidth={1.5} size={20} />, tag: "tools" },
  { icon: <BadgePercent strokeWidth={1.5} size={20} />, tag: "discount" },
  { icon: <Users strokeWidth={1.5} size={20} />, tag: "audience" },
  { icon: <Palette strokeWidth={1.5} size={20} />, tag: "appereance" },
  { icon: <Zap strokeWidth={1.5} size={20} />, tag: "plugins" },
];

const Sidebar = () => {
  const pathname = usePathname().split("/")[1];
  return (
    <div className="hidden fixed md:flex w-1/6 bg-[#1E2640] h-[100vh] flex-col p-4 gap-8 text-white">
      <div className="flex flex-row gap-1 justify-between items-center">
        <div className="h-12 flex aspect-square rounded-md bg-slate-100 text-3xl font-bold items-center justify-center text-[#1E2640]">
          N
        </div>
        <div className="flex flex-col px-2 h-12 justify-start w-full">
          <p className="text-md pb-2">Nishyan</p>
          <a
            href="#"
            className="text-xs text-gray-100 pb-[1px] border-b max-w-max"
          >
            Visit Store
          </a>
        </div>
        <button>
          <ChevronDown className="font-bold" />
        </button>
      </div>
      <div className="flex flex-col gap-2 items-start w-full ">
        {links.map((link) => {
          return (
            <Link key={link.tag} href={link.tag} className="w-full">
              <button
                className={`flex items-center px-2 py-1 rounded-md gap-4 text-base font-light tracking-wide capitalize w-full hover:bg-[#484f64]  ${
                  link.tag === pathname ? "bg-[#343B53]" : ""
                }`}
              >
                {link.icon}
                {link.tag}
              </button>
            </Link>
          );
        })}
      </div>
      <div className="px-3 py-2 rounded-md w-full bg-[#353C53] flex flex-row gap-3 mt-auto">
        <div className="p-2 bg-[#494F64] rounded-sm">
          <Wallet />
        </div>
        <div className="flex flex-col">
          <p className="text-xs tracking-wide text-gray-200">
            Available credits
          </p>
          <p>222.10</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
