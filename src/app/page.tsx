import User from "@/components/User";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div>
        <h1 className="text-4xl">Home</h1>

        <Link href="/admin">Go to Admin</Link>

        <h2>
          Client component are slower then server component we can see it here
        </h2>
        <User />
        <h2>Server</h2>
        {JSON.stringify(session)}
      </div>
    </>
  );
}
