"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();
  const showNavBar = ["/", "/generate"].includes(pathName);

  return (
    <>
      {showNavBar && (
        <nav className="flex fixed top-[8vh] w-[92vw] rounded-full left-[3vw] bg-white items-center px-3 justify-between">
          <div className="logo px-5 flex items-center gap-4">
            <Link href={"/"}>
              <svg
                className="size-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z"></path>
              </svg>
            </Link>
            <ul className="flex gap-6">
              <Link href={"/generate"}>
                <li>Templates</li>
              </Link>
              <Link href={"/generate"}>
                <li>Marketplace</li>
              </Link>
              <Link href={"/generate"}>
                <li>Discover</li>
              </Link>
              <Link href={"/generate"}>
                <li>Pricing</li>
              </Link>
              <Link href={"/generate"}>
                <li>Learn</li>
              </Link>
            </ul>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-200 font-semibold py-3 my-2 px-7 rounded-md">
              Log in
            </button>
            <button className="bg-gray-900 text-white text-lg py-3 my-2 px-7 rounded-full">
              Sign up free
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
