"use client";
import React, { useState, useEffect } from "react";
import BaseButton from "./BaseButton";
import Image from "next/image";
import Link from "next/link";

const navItems = ["Product", "Security", "Company", "News", "Careers"];

export default function Header() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.intersectionRatio === 0 means it's fully out of viewport
        setScrolledPastHero(entry.intersectionRatio === 0);
      },
      {
        root: null,
        threshold: [0], // we only care about 0%
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full px-64 py-4 flex items-center
        backdrop-blur-md border-b transition-colors duration-200
        ${
          scrolledPastHero
            ? "bg-white border-gray-200"
            : "bg-transparent border-gray-400"
        }`}
    >
      <Link href="/">
        <Image
          src={
            scrolledPastHero
              ? "/images/icons/Blacklogo.svg"
              : "/images/icons/WhiteLogo.svg"
          }
          alt="logo"
          width={60}
          height={24}
        />
      </Link>

      <nav className="flex flex-1 justify-center space-x-6">
        {navItems.map((item) => (
          <Link
            key={item}
            href="#"
            className={`text-sm font-light transition-colors duration-200 ${
              scrolledPastHero ? "text-black" : "text-white"
            }`}
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <Link
          href="/"
          className={`transition-colors duration-200 ${
            scrolledPastHero ? "text-black" : "text-white"
          }`}
        >
          Log In
        </Link>
        <BaseButton
          className={`${scrolledPastHero ? "bg-black text-white" : "bg-white"}`}
        >
          Request a Demo
        </BaseButton>
      </div>
    </header>
  );
}
