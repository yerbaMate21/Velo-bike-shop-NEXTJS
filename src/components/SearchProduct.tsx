"use client";

import { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Search, X } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useScroll } from "@/hooks/useScroll";
import { DATA } from "@/utils/data";
import { useRouter } from "next/navigation";
import FadeBackground from "./FadeBackground";

interface Props {
  isSearchOpen: boolean;
  setIsSearchOpen(value: boolean): void;
}

interface ItemData {
  brand: string;
  title: string;
  category: string;
  type: string;
  id: string;
}

const SearchProduct = ({ isSearchOpen, setIsSearchOpen }: Props) => {
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<ItemData[]>([]);

  const router = useRouter();

  const { scrollTop } = useScroll();

  useEffect(() => {
    if (scrollTop > 200) handleClose();
  }, [scrollTop]);

  const handleClose = () => {
    setIsSearchOpen(false);
    setSearchedValue("");
    setSuggestions([]);
  };

  let products: ItemData[] = [];

  function getData(
    item: ItemData = {
      brand: "",
      title: "",
      category: "",
      type: "",
      id: "",
    },
  ) {
    DATA.map((data) =>
      data.featured.map((f) =>
        f.items.map((item) =>
          item?.models.map((model) =>
            products.push({
              brand: item.brand,
              title: model.name,
              category: data.value,
              type: f.value,
              id: model.id,
            }),
          ),
        ),
      ),
    );

    return item;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    getData();

    setSearchedValue(event.target.value);

    if (event.target.value !== "") {
      const filteredSuggestions = products.filter((item) => {
        const value = event.target.value.toLowerCase().replace(/\s+/g, "");
        const brand = item.brand.toLowerCase();
        const title = item.title.toLowerCase();
        const concatBrandTitle = brand.concat(title);
        const concatTitleBrand = title.concat(brand);

        return (
          brand.includes(value) ||
          title.includes(value) ||
          concatBrandTitle.includes(value) ||
          concatTitleBrand.includes(value)
        );
      });

      setSuggestions(filteredSuggestions);
    } else setSuggestions([]);
  };

  const suggestionsExist = suggestions.length > 0;

  return (
    <div
      className={`absolute left-0 top-0 -z-50 flex h-full w-full justify-center 
      ${isSearchOpen && "z-10"}`}
    >
      <div
        className={`absolute left-0 top-0 -z-50 flex h-full w-full
        items-center overflow-x-hidden bg-input shadow-md
        ${isSearchOpen && "z-10"}`}
      >
        <MaxWidthWrapper
          className={`w-full translate-x-[200px] opacity-0 transition-all duration-300 md:w-[500px]
          ${isSearchOpen && "translate-x-0 opacity-100"}`}
        >
          <div className="relative rounded-md">
            <Search className="absolute left-2 z-10 h-full" />
            {isSearchOpen && (
              <Input
                placeholder="Search..."
                autoFocus
                className="h-9 pl-10 text-base"
                value={searchedValue}
                onChange={handleChange}
              />
            )}

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-0 h-full"
              onClick={handleClose}
            >
              <X />
            </Button>
          </div>
        </MaxWidthWrapper>
      </div>

      <div
        className={`absolute top-16 z-0 flex h-[calc(100vh-270px)] 
          w-full -translate-y-full justify-center rounded-bl-md rounded-br-md 
          bg-white transition-all duration-300 md:w-[400px] 
          ${isSearchOpen && suggestionsExist && "z-0 translate-y-0"}`}
      >
        <ScrollArea className="h-full w-full rounded-md">
          <div
            className={`flex w-full flex-col px-4 text-base 
              opacity-0 transition-all duration-300 md:px-8
              ${suggestionsExist && "opacity-100"}`}
          >
            {suggestionsExist && (
              <>
                {suggestions.map((item) => (
                  <div key={item.id}>
                    <div
                      onClick={() => {
                        router.push(
                          `/${item.category}/${item.type}/${item.brand}_${item.title}`,
                        );
                        handleClose();
                      }}
                      className={`${buttonVariants({
                        variant: "link-secondary",
                        size: "no-padding-x",
                      })} my-0.5 cursor-pointer`}
                    >
                      <div className="flex gap-2 text-base font-light">
                        <div>{item.brand}</div>
                        <div>{item.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </ScrollArea>
      </div>

      <FadeBackground active={isSearchOpen} />
    </div>
  );
};

export default SearchProduct;
