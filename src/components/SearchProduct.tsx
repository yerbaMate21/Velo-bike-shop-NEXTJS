"use client";

import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { useRef, useState } from "react";
import { Input } from "./ui/input";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useOnClickOutside } from "@/hooks/useOnclickOutside";

interface Props {
  isSearchOpen: boolean;
  setIsSearchOpen(value: boolean): void;
}

const SearchProduct = ({ isSearchOpen, setIsSearchOpen }: Props) => {
  const [value, setValue] = useState<string>("");

  const searchRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(searchRef, () => setIsSearchOpen(false));

  return (
    <div
      ref={searchRef}
      className={`absolute left-0 -z-50 flex h-full w-full 
        items-center justify-center overflow-x-hidden bg-input
        ${isSearchOpen && "z-0"}`}
    >
      <MaxWidthWrapper
        className={`w-full translate-x-[200px] pl-20 opacity-0 
          transition-all duration-500 md:w-[600px]
          ${isSearchOpen && "translate-x-0 opacity-100"}`}
      >
        <div className="relative rounded-md shadow-md">
          <Search className="absolute left-2 h-full" />
          {isSearchOpen && (
            <Input
              placeholder="Search..."
              autoFocus
              className="h-9 pl-10 text-base"
            />
          )}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-0 h-full"
            onClick={() => setIsSearchOpen(false)}
          >
            <X />
          </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default SearchProduct;
