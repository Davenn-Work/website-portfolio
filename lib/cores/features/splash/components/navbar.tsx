"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { textTheme } from "@/lib/cores/constants/text-theme";
import { Menu, X } from "lucide-react";

export type NavItems = {
  text: string;
  onClick?: () => void;
};

export type NavbarTypes = {
  icons: string;
  navItems: NavItems[];
};

export default function Navbar({ icons, navItems }: NavbarTypes) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-1/2 top-4 z-20 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
      <div className="relative rounded-full border border-gray-300 bg-white/80 px-8 py-4 shadow-md shadow-gray1 backdrop-blur-md">
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-secondary"></div>
            <p className={`${textTheme.icon}`}>{icons}</p>
          </div>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((value, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    value.onClick?.();
                  }}
                  className="group relative cursor-pointer px-4 py-2"
                >
                  <span className="text-gray-500 transition-colors duration-300 group-hover:text-black">
                    {value.text}
                  </span>
                  <span className="absolute left-1/2 bottom-0 h-1 w-0 -translate-x-1/2 rounded-full bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
              );
            })}
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-label="Buka menu navigasi"
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>

        <div
          className={`absolute left-0 right-0 top-[calc(100%+0.75rem)] rounded-3xl border border-gray-200 bg-white p-3 shadow-xl shadow-black/5 transition-all duration-200 lg:hidden ${
            isOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navItems.map((value, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  value.onClick?.();
                  setIsOpen(false);
                }}
                className="rounded-2xl px-4 py-3 text-left text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
              >
                {value.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
