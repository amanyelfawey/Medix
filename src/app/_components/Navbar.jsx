"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileSideBar } from "./mobile-side-bar";

function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/#home",
    },
    {
      id: 2,

      name: "Departments",
      path: "/#Dep",
    },
    {
      id: 3,

      name: "Doctors",
      path: "/#OurDr",
    },
    {
      id: 4,
      name: "Services",
      path: "/#services",
    },
    {
      id: 5,
      name: "About",
      path: "/#about",
    },
    {
      id: 6,
      name: "Contact",
      path: "/#contact",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  });

  if (!isMounted) return null;
  return (
    <nav className="flex h-[100px] justify-between p-4">
      <div className="w-[200px] h-[200px] hidden lg:block">
        <Image alt="Logo" src="/Logo.png" width={"200"} height={"200"} />
      </div>
      <div className="w-8 h-8 flex items-center justify-center md:hidden">
        <Sheet>
          <SheetTrigger>
            <Button size={"icon"} variant="ghost" className="p-2">
              <MenuIcon className="w-8 h-8" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <MobileSideBar Menu={Menu} />
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex  gap-x-6 lg:gap-x-12 justify-between items-center h-full relative -top-2">
        {Menu.map((item, i) => (
          <div
            key={i}
            className="flex justify-center items-center text-[#2A99A2] font-bold text-lg"
          >
            <Link href={item.path}>{item.name}</Link>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-x-8 relative -top-2">
        <div>
          <Button>SignUp</Button>
        </div>
        <div>
          <Button>SignUp</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
