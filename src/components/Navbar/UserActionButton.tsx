import Link from "next/link";
import React from "react";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const UserActionButton = async () => {
  const user = await getServerSession(authOption);
  console.log(user);
  return (
    <Link href="/api/auth/signin" className="bg-black text-white px-10 py-2">
      Sign In
    </Link>
  );
};

export default UserActionButton;
