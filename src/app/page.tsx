
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


export default async function Home() {
  const {getUser,isAuthenticated} = getKindeServerSession();
  const user = await getUser();
  return (
    <>
    
    {await isAuthenticated() && JSON.stringify(user)}
    </>
      );
}
