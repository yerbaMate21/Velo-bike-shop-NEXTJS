"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import MaxWidthWrapper from "../MaxWidthWrapper";
import UserAccountNav from "../UserAccountNav";
import Cart from "../Cart";
import SearchProduct from "../SearchProduct";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

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
    <div className="relative z-50 text-sm">
      <div className="w-full bg-white">
        <MaxWidthWrapper className="xl:px-20">
          <div
            className={`flex h-16 w-full justify-between transition-all duration-300 
            ${isSearchOpen ? "-z-50 opacity-0" : "opacity-100"}`}
          >
            <div className="z-50 flex items-center leading-none">
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

            <div className="hidden xl:flex">
              <NavItems />
            </div>

            <div className="flex items-center">
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search />
                </Button>
                <Cart />
                <UserAccountNav />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <SearchProduct
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
    </div>
  );
};

export default Navbar;
