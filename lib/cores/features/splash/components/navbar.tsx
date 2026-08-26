"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
    <header className="sticky top-0 z-30 border-b border-black/5 bg-[#fafafa]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => {
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-left"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#635bff]" />
          <span className="text-sm font-medium tracking-[-0.03em] text-[#111111] sm:text-base">
            {icons}
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((value) => (
            <button
              key={value.text}
              type="button"
              onClick={() => {
                value.onClick?.();
              }}
              className="rounded-full px-4 py-2 text-sm text-[#666666] transition-colors duration-200 hover:bg-black/[0.04] hover:text-[#111111]"
            >
              {value.text}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            className="hidden rounded-full bg-[#635bff] px-5 text-sm font-medium text-white shadow-none hover:bg-[#5346d8] md:inline-flex"
            onClick={() => {
              document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Mulai Proyek
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="rounded-full border-black/10 bg-white md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-label="Buka menu navigasi"
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t border-black/5 bg-[#fafafa] transition-all duration-300`}
      >
        <div className="mx-auto flex max-w-[1280px] flex-col gap-1 px-4 py-3 sm:px-6">
          {navItems.map((value) => (
            <button
              key={value.text}
              type="button"
              onClick={() => {
                value.onClick?.();
                setIsOpen(false);
              }}
              className="rounded-2xl px-4 py-3 text-left text-sm text-[#666666] transition-colors hover:bg-black/[0.04] hover:text-[#111111]"
            >
              {value.text}
            </button>
          ))}
          <Button
            type="button"
            className="mt-2 rounded-full bg-[#635bff] text-white hover:bg-[#5346d8]"
            onClick={() => {
              document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            }}
          >
            Mulai Proyek
          </Button>
        </div>
      </div>
    </header>
  );
}
