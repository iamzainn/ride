import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const { getUser,isAuthenticated } = getKindeServerSession();
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import UserButton from "./UserButton";
import { use } from "react";

const Header = async () => {
  const  user = await getUser();
  return (
    <nav className="nav bg-gray-100 sticky top-0 p-2 flex justify-between items-center">
      <Link className="font-bold text-black font-2xl" href={"/"}>
        Ride
      </Link>
      {(await isAuthenticated()) ? (
        // <LogoutLink>
        //   <Button variant={"default"} size={"sm"}>
        //     Logout
        //   </Button>
        // </LogoutLink>
        <UserButton isAuthenticated={ await isAuthenticated()} user={user!}></UserButton>
      ) : (
        <div className="auth_btns flex items-center justify-center gap-3">
          <LoginLink>
            <Button variant={"default"} size={"sm"}>
              Sign In
            </Button>
          </LoginLink>
          <RegisterLink>
            <Button variant={"default"} size={"sm"}>
              Sign Up
            </Button>
          </RegisterLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
