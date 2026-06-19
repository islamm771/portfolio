"use client";

import { navLinks } from "@/utils/data";
import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import ThemeToggle from "../ThemeToggle";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-b-border backdrop-blur-md">
      <div
        className="container mx-auto px-6 xl:px-24 flex items-center justify-between h-20">
        <h2 className="text-2xl font-bold">
          Islam
        </h2>

        <div className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium text-fg transition-all duration-300 hover:text-primary">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Menu"
            className="flex md:hidden text-fg cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <LuMenu size={25} />
          </button>
          <ThemeToggle />
        </div>
      </div>

      <>
        {open && (
          <MobileNav setOpen={setOpen} />
        )}
      </>
    </nav>
  );
}