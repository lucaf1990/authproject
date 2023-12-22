"use client";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }
    >
      Logout
    </button>
  );
};
export default Logout;
