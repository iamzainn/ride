import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link"
export default async function  Home (){
  const { getUser,isAuthenticated } = getKindeServerSession();

  return (
    <>
    <main className="main">
      <div className="maintext text-2xl font-extrabold p-5">
        Use Our Ride
      </div>
      {await isAuthenticated() && <div className="text-xl font-bold p-5">
        <Link href="/ReqRide">Request Ride</Link>
      </div>}
    </main>
    </>
  )
} 