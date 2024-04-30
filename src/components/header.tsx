import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const {isAuthenticated } = getKindeServerSession();

import { ThemeToggle } from "./ThemeToggle";
import { CarIcon } from "lucide-react";
import { UserButton } from "./UserBtn";

const Header = async () => {
  
  return (
    <nav className="nav bg-gray-100 sticky top-0 px-7 p-2 flex justify-between items-center">
     <Link className="flex items-center justify-center" href="/">
          <CarIcon className="h-6 w-6 dark:text-gray-400" />
          <span className="sr-only">Ride Sharing App</span>
        </Link>
      <div className="auth_btns flex items-center justify-center gap-3">
           <div className="toggle">
        <ThemeToggle></ThemeToggle>
      </div>
      {await isAuthenticated() ? (
        
        <UserButton></UserButton>
      ) : (
        <div className="auth_btns flex items-center justify-center gap-3">
          <LoginLink>
            <Button variant={"default"} size={"sm"}>
              Sign In
            </Button>
          </LoginLink>
          <RegisterLink>
            <Button variant={"outline"} size={"sm"}>
              Sign Up
            </Button>
          </RegisterLink>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Header;
