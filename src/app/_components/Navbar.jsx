"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileSideBar } from "./mobile-side-bar";
import { useAuth } from "@/hooks/use-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserIcon } from "@/components/ui/user-icon";

function Navbar() {
  const initialize = useAuth((state) => state.initialize);
  const { setUser, id, user } = useAuth((state) => ({
    setUser: state.setUser,
    id: state.id,
    user: state.user,
  }));
  const [isMounted, setIsMounted] = useState(false);

  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,

      name: "Medix Ai",
      path: "/MedixAi",
    },
    {
      id: 3,

      name: "Doctors",
      path: "/FindDoctors",
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
      name: "Contact Us",
      path: "/#contact",
    },
  ];

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <nav className="flex h-[70px] justify-between p-4 fixed top-0 left-0 right-0 bg-white z-20 mb-16">
      <div className="w-[150px] h-[150px] hidden lg:block">
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
      <div className="hidden md:flex  gap-x-6 lg:gap-x-12 justify-between items-center h-full relative ">
        {Menu.map((item, i) => (
          <div
            key={i}
            className="flex justify-center items-center text-[#2A99A2] font-bold text-lg"
          >
            <Link href={item.path}>{item.name}</Link>
          </div>
        ))}
      </div>
      {!user && (
        <div className="flex items-center justify-between gap-x-8 relative">
          <div>
            <Link href={"/Signup"}>
              <Button>Sign Up</Button>
            </Link>
          </div>
          <div>
            <Link href={"/Signin"}>
              <Button variant="secondary" className="text-white">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      )}
      {user && <UserIcon />}
    </nav>
  );
}

export default Navbar;
