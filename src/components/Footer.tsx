"use client";

import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="flex-grow-0 bg-muted-foreground text-white">
      <MaxWidthWrapper>
        <div className="py-10 md:flex md:items-center md:justify-between">
          <Image
            src="/images/bike.svg"
            width={64}
            height={64}
            alt="logo-footer"
          />
          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              <Link href="#" className="text-sm hover:text-gray-600">
                Terms
              </Link>
              <Link href="#" className="text-sm hover:text-gray-600">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-gray-600">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
