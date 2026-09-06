"use client";
import Image from "next/image";
import { useState } from "react";
import { User, ChevronDown } from "lucide-react";

const navigation = [
  { label: "About", href: "#", hasDropdown: true, weight: "font-semibold", className: "underline decoration-[#571244]" },
  { label: "What We Do", href: "#training", hasDropdown: true, weight: "font-normal" },
  { label: "Jobs", href: "#", hasDropdown: true, weight: "font-normal" },
  { label: "Projects", href: "#", hasDropdown: false, weight: "font-normal" },
  { label: "TGS Academy", href: "#", hasDropdown: false, weight: "font-normal" },
  { label: "Strategic Partnerships", href: "#", hasDropdown: false, weight: "font-normal" },
  { label: "Pricing", href: "#", hasDropdown: false, weight: "font-normal" },
  { label: "Book a Consultation", href: "#consultation", hasDropdown: false, weight: "font-normal" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-auto w-full sm:max-w-auto bg-white lg:h-[173px] lg:w-[1440px]">
      <div className="border-b border-gray-100">
        <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-4 py-4 lg:h-[104px] lg:px-16 lg:py-6">
          <a href="#" aria-label="Tobams Group home">
            <Image
              src="/images/logo.png"
              alt="Tobams Group"
              width={166}
              height={64}
              className="h-12 w-[124px] object-contain lg:h-[64px] lg:w-[165.71px]"
              priority
            />
          </a>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              className="flex h-[48px] w-[167px] items-center justify-center gap-3 rounded-[4px] border border-gray-300 bg-[#4d073c] px-4 py-2 text-[18px] font-semibold leading-[150%] text-white transition hover:bg-[#650b50]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-[2px]">
                <User className="h-6 w-6 text-[#571244] rounded-full bg-[#DDD0DA]" />
              </div>
              <span>Account</span>
              <ChevronDown className="h-5 w-5 text-white/80" />
            </button>

            <a
              href="#consultation"
              className="flex h-[48px] w-[183px] items-center justify-center gap-[10px] rounded-[4px] bg-[#e63867] px-[18px] py-[10.5px] text-[18px] font-semibold leading-[150%] text-white transition hover:bg-[#cf2f59]"
            >
              Take Assessment
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded p-2 text-[#4d073c] lg:hidden"
          >
            <span className="text-xl text-white bg-black rounded px-1.5">☰</span>
          </button>
        </div>
      </div>

      <nav aria-label="Main navigation" className="hidden border-b border-gray-100 lg:block">
        <div className="mx-auto flex h-[69px] max-w-[1440px] items-center justify-center px-16 border-t border-gray-00">
          <div className="flex items-center gap-[32px]">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-[10px] text-[18px] leading-[150%] tracking-[0%] text-[#571244] transition hover:text-[#650b50] ${item.weight}`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="h-4 w-4 font-bold text-[#571244]" />}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <nav aria-label="Mobile navigation" className="border-b border-gray-100 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="h-4 w-4 text-gray-500" />}
              </a>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <button
              type="button"
              className="flex h-[48px] w-full items-center justify-center gap-2 rounded bg-[#4d073c] text-sm font-semibold text-white"
            >
              <User className="h-5 w-5" />
              <span>Account</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            <a
              href="#consultation"
              className="flex h-[48px] w-full items-center justify-center rounded bg-[#ef4353] text-center text-sm font-semibold text-white"
            >
              Take Assessment
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}