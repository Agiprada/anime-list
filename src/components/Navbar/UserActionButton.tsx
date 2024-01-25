import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";
import React from "react";

const UserActionButton = async () => {
  const user = await authUserSession();
  // console.log(user);
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div>
      {user ? (
        <Link
          href="/users/dashboard"
          className="bg-black text-white px-10 py-2"
        >
          Dashboard
        </Link>
      ) : null}

      <Link href={actionUrl} className="bg-black text-white px-10 py-2">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
