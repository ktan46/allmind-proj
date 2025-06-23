import React from "react";
import BaseButton from "./BaseButton";
import Image from "next/image";

const navItems = ["Product", "Security", "Company", "News", "Careers"];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-16 py-4 flex items-center bg-transparent backdrop-blur-md">
      <a>
        <Image src="/vercel.svg" alt="logo" width={24} height={24} />
      </a>

      <nav className="flex flex-1 justify-center space-x-6">
        {navItems.map((item) => (
          <a key={item} href="#" className="text-sm font-light text-white">
            {item}
          </a>
        ))}
      </nav>
      <div className="flex items-center space-x-4 text-white">
        <a>Log In</a>
        <BaseButton>Request a Demo</BaseButton>
      </div>
    </header>
  );
}
