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
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => {
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-4 text-left"
        >
          <span className="h-3 w-3 rounded-full bg-primary" />
          <span className={`${textTheme.subheading1} text-foreground`}>
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
              className={`rounded-full px-4 py-2 ${textTheme.label2} text-gray-700 hover:text-primary hover:font-semibold`}
            >
              {value.text}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            className={`hidden px-8 shadow-none md:inline-flex ${textTheme.button1}`}
            onClick={() => {
              document
                .getElementById("kontak")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Mulai Proyek
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="rounded-full border-border bg-card md:hidden"
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
        } overflow-hidden border-t border-border bg-background transition-all duration-300`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
          {navItems.map((value) => (
            <button
              key={value.text}
              type="button"
              onClick={() => {
                value.onClick?.();
                setIsOpen(false);
              }}
              className={`rounded-2xl px-4 py-3 text-left ${textTheme.label2} text-foreground`}
            >
              {value.text}
            </button>
          ))}
          <Button
            type="button"
            className="mt-2 rounded-full"
            onClick={() => {
              document
                .getElementById("kontak")
                ?.scrollIntoView({ behavior: "smooth" });
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
