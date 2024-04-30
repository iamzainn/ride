import {
  Car,User,
  } from "lucide-react";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
   DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";



  import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
  const { getUser,isAuthenticated } = getKindeServerSession(); 
  import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link"
  
  export async function  UserButton() {
    const user =  await getUser();
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Avatar>
      <AvatarImage src={user?.picture ||"https://github.com/shadcn.png"} alt="@shadcn" className="cursor-pointer" />
      <AvatarFallback>{user?.given_name?.[0] || "U"}</AvatarFallback>
    </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="text-gray-500 dark:text-gray-300">{user?.email}</DropdownMenuLabel>
          <DropdownMenuLabel className=" text-gray-500 dark:text-gray-300">{user?.given_name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
              <Car className="mr-2 h-4 w-4" />
              <Link href={"/ReqRide"}>Go to Ride</Link>
              <DropdownMenuShortcut>⇧⌘R</DropdownMenuShortcut>
            </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogoutLink>
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </LogoutLink>
          </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }