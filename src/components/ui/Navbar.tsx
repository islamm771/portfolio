"use client";

import { navLinks } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import ThemeToggle from "../ThemeToggle";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  console.log(pathName)

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

        <div className="flex items-center">
          <button
            aria-label="Menu"
            className="flex md:hidden text-fg"
            onClick={() => setOpen(true)}
          >
            <LuMenu />
          </button>
          <ThemeToggle />
        </div>
      </div>

      <>
        {open && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/50 h-screen"
              onClick={() => setOpen(false)}
            />

            <div className="fixed left-0 top-0 z-50 h-screen w-72 bg-bg p-6 shadow-lg">
              <h2 className="mb-6 text-xl font-bold text-fg">
                Menu
              </h2>

              <div className="flex flex-col gap-5">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-fg transition hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}

                <button className="mt-4 rounded-lg bg-primary px-4 py-2 text-white">
                  Download CV
                </button>
              </div>
            </div>
          </>
        )}
      </>
    </nav>
  );
}