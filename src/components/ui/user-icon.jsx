import Link from "next/link";
import { Avatar, AvatarFallback } from "./avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export const UserIcon = ({ user }) => {
  return (
    <>
      <div className="flex items-center justify-between gap-x-8 relative">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="flex justify-center items-center font-bold">
                <AvatarFallback>
                  {user.patient_name
                    ? user.patient_name.slice(0, 2).toUpperCase()
                    : user.doctor_name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-lg">Account settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-lg">
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};
