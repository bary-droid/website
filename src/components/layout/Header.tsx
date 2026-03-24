"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { logoWorldcom, iconLock, iconMenu, iconArrowDown } from "@/lib/assets";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-[12px] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 py-8 flex items-center justify-between relative">
        {/* Language button */}
        <button type="button" aria-label="Select language" className="flex items-center gap-2 bg-white rounded-[20px] px-4 h-[40px]">
          <span className="font-semibold text-[16px] leading-[20px] text-text-primary">EN</span>
          <Image src={iconArrowDown} alt="" width={24} height={24} unoptimized />
        </button>

        {/* Center logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image src={logoWorldcom} alt="Worldcom Finance" width={170} height={40} className="h-[40px] w-auto" unoptimized />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <button type="button" aria-label="Login banking" className="flex items-center gap-1">
            <Image src={iconLock} alt="" width={24} height={24} unoptimized />
            <span className="font-semibold text-[16px] leading-[20px] text-text-primary w-[120px] text-center">
              Login banking
            </span>
          </button>
          <button type="button" aria-label="Open menu" className="flex items-center gap-1">
            <span className="font-semibold text-[16px] leading-[20px] text-text-primary">Menu</span>
            <Image src={iconMenu} alt="" width={24} height={24} unoptimized />
          </button>
        </div>
      </div>
    </header>
  );
}
