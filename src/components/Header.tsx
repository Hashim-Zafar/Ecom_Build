"use client";

import Form from "next/form";
import Link from "next/link";
import { useReverification } from "@clerk/nextjs";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
function Header() {
  const { user } = useUser();

  const createClerkPasskey = async () => {
    try {
      const res = await user?.createPasskey();
      console.log(res);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <header className="flex items-center justify-between mx-auto ">
      <div className="flex w-full flex-wrap justify-between items-center gap-2">
        {/* Logo */}
        <div>
          <Link
            className=" cursor-pointer hover:opacity-50  font-bold  mx-auto text-blue-700 text-2xl sm:text-3xl"
            href="/"
          >
            Shopr
          </Link>
        </div>
        {/*  Search bar */}
        <Form
          className="mt-2 bg-gray-200   flex flex-1  rounded-[4px] py-2 sm:max-w-auto  max-w-4xl "
          action="/search"
        >
          <input
            className="px-2 focus:outline-none  focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-gray-800 w-full rounded max-w-4xl "
            type="text"
            name="query"
            placeholder="Search for products"
          />
        </Form>
        {/* My basket */}

        <Link
          className=" bg-blue-500 flex   items-center justify-center sm:justify-start sm:flex-none font-bold px-2 py-2 rounded hover:bg-blue-700"
          href="/basket"
        >
          <TrolleyIcon className="w-6 h-6 text-white" />
          <span className="text-white whitespace-nowrap ">My basket</span>
        </Link>
        {/* My orders */}

        <ClerkLoaded>
          {user && (
            <Link
              className="bg-blue-500 hover:bg-blue-700 flex items-center space-x-2 font-bold justify-center sm:justify-start sm:flex-none px-2 py-2 rounded"
              href="/orders"
            >
              <PackageIcon className="text-white w-6 h-6" />
              <span className="text-white whitespace-nowrap">My orders</span>
            </Link>
          )}

          {/* Sign */}
          {user ? (
            <div className="flex items-center  sapce-x-2 ">
              <UserButton />

              <div className="hidden sm:block text-xs">
                <p className="text-gray-400">Welcome Back</p>
                <p className="text-bold">{user.fullName}</p>
              </div>
            </div>
          ) : (
            <SignInButton mode="modal" />
          )}
          {/* 
          {user?.passkeys.length === 0 && (
            <button
              onClick={createClerkPasskey}
              className="bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
            >
              Create passkey
            </button>
          )} */}
        </ClerkLoaded>
      </div>
    </header>
  );
}

export default Header;
