import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";
import React from "react";

const UserActionButton = async () => {
  const user = await authUserSession();
  console.log(user);
  return (
    <Link href="/api/auth/signin" className="bg-black text-white px-10 py-2">
      Sign In
    </Link>
  );
};

export default UserActionButton;
