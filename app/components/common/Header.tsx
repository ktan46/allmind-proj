import React from "react";
import BaseButton from "./BaseButton";
import Image from "next/image";

const navItems = ["Product", "Security", "Company", "News", "Careers"];

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between px-16 py-4 border-b border-gray-200">
      <a>
        <Image src="vercel.svg" alt="image" width={24} height={24} />
      </a>

      <div className="flex space-x-6">
        {navItems.map((item) => (
          <a key={item} href="#" className="text-sm font-light text-white">
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <a>Log In</a>
        <BaseButton>Request a Demo</BaseButton>
      </div>
    </div>
  );
}
