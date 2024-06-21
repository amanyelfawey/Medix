"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const UserIcon = () => {
  const { logout } = useAuth();
  const router = useRouter();
  const initialize = useAuth((state) => state.initialize);
  const { setUser, id, user } = useAuth((state) => ({
    setUser: state.setUser,
    id: state.id,
    user: state.user,
  }));
  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  useEffect(() => {
    initialize();
  }, [initialize]);
  const isDoctor = user?.profileType.toLowerCase() == "doctor";
  return (
    <>
      <div className="flex items-center justify-between gap-x-8 relative">
        <div>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
              <Avatar className="flex justify-center items-center font-bold">
                <AvatarFallback>{user?.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
                <AvatarImage src={isDoctor ? user?.image : "/patient.svg"} alt={user?.name} />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-sm">Account settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-sm cursor-pointer">
                <Link href="/UserProfile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm cursor-pointer">
                <Link href="/MyAppointments">My Appointments</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  handleLogout();
                }}
                className="text-sm cursor-pointer"
              >
                <Link href="/profile">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};
