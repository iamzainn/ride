import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export default async function ReqRideLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const { getUser } = getKindeServerSession();
    if(!await getUser()){
        //redirect("/api/auth/login") kinde login if you want to...
        redirect("/");
    }
    
    return (
        <section className="req-ride-layout">
            {children}
        </section>
    );
  }


