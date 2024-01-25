import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
// import { redirect } from "next/navigation";

export default async function page() {
  const user = await authUserSession();
  const imageUrl = user?.image || "https://placehold.co/400";

  // if (!user) {
  //   redirect("/");
  // }

  return (
    <>
      <h3 className="flex justify-center mt-16 p-5 text-xl font-bold">
        Dashboard
      </h3>
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center w-1/2 p-5 border border-1 gap-2">
          <h6 className="text-center bg-slate-500 rounded-lg text-white p-1">
            Welcome, {user?.name}
          </h6>
          <div className="flex gap-5">
            <Image src={imageUrl} alt="..." width={250} height={250} />
            <div className="flex flex-col justify-center w-full gap-2">
              <Link
                href="/users/dashboard/collection"
                className="bg-gray-500 text-center p-3 rounded-lg font-bold text-white"
              >
                My Collection
              </Link>
              <Link
                href={""}
                className="bg-gray-500 text-center p-3 rounded-lg font-bold text-white"
              >
                My Review
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
