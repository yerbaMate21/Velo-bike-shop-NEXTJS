"use client";

import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { useEffect, useState } from "react";
import UserAccountNav from "../UserAccountNav";
import Cart from "../Cart";
import SearchProduct from "../SearchProduct";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <div className="sticky z-50 text-sm">
      <div className="w-full bg-white shadow-md">
        <MaxWidthWrapper>
          <div
            className={`flex h-16 w-full justify-between bg-white
            ${isSearchOpen ? "opacity-0" : "opacity-100 duration-700"} 
            `}
          >
            <div className="flex items-center leading-none">
              <MobileNav />

              <Link href="/">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/bike.svg"
                    width={50}
                    height={50}
                    alt="logo"
                    className="mx-1 min-w-10"
                  />
                  <div className="hidden text-2xl font-medium text-slate-800 sm:block">
                    Velo
                  </div>
                </div>
              </Link>
            </div>

            <div className="hidden items-center xl:flex">
              <NavItems />
            </div>

            <div className="flex items-center">
              <SearchProduct />
              <Cart />
              <UserAccountNav />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Navbar;
