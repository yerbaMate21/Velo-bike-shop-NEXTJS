"use client";

import { DATA } from "@/utils/data";
import { IMAGES_BY_CATEGORY } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ProductGridItem from "@/components/ProductGridItem";
import { Button, buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useScroll } from "@/hooks/useScroll";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

interface PageProps {
  params: {
    category: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { category } = params;

  const productsByCategory = DATA.find((item) => item.value === category);

  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("Alphabetically, A-Z");
  const [navSticky, setNavSticky] = useState<boolean>(false);

  const { scrollTop } = useScroll();

  const navbar = document.getElementById("nav_sticky");
  let offsetTop: number | undefined = navbar?.offsetTop;

  useEffect(() => {
    if (offsetTop) {
      if (scrollTop >= offsetTop) {
        setNavSticky(true);
      }
    }
  }, [scrollTop, offsetTop]);

  return (
    <div>
      <section>
        {IMAGES_BY_CATEGORY.map((item, index) => (
          <div key={index}>
            {item.category === category && (
              <div>
                <div
                  className="flex items-center justify-center py-6 text-5xl font-medium
                  uppercase tracking-tight text-black lg:py-10 lg:text-7xl"
                >
                  {category}
                </div>
                <div className="relative mx-0 aspect-video max-h-[calc(100vh-150px)] w-full">
                  <Image
                    src={item.src_cat}
                    alt={`${item.category}-image`}
                    fill
                    className="rounded-md object-cover object-center"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      <section>
        <Card
          id="nav_sticky"
          className={`relative z-50 mt-8 flex h-20 items-center bg-white
          ${navSticky && "sticky top-0"}`}
        >
          <MaxWidthWrapper className="flex items-center justify-end gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`${buttonVariants({ variant: "outline" })} border-muted-foreground`}
              >
                <div className="text-base font-normal">Sort</div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuRadioGroup
                  className="w-60 gap-2 p-2"
                  value={sortBy}
                  onValueChange={setSortBy}
                >
                  <DropdownMenuRadioItem
                    value="Alphabetically, A-Z"
                    className="text-base font-light"
                  >
                    Alphabetically, A-Z
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value=" Price, low to high"
                    className="text-base font-light"
                  >
                    Price, low to high
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value="Price, high to low"
                    className="text-base font-light"
                  >
                    Price, high to low
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="outline"
              className="border-muted-foreground text-base font-normal"
              onClick={() => setOpenFilters(!openFilters)}
            >
              <div className="flex items-center gap-3">
                {openFilters ? (
                  <>
                    <div>Close filters</div>
                    <X size={20} />
                  </>
                ) : (
                  <>
                    <div>Show filters</div>
                    <Menu size={20} />
                  </>
                )}
              </div>
            </Button>
          </MaxWidthWrapper>

          <div
            className={`absolute top-[88px] z-50 w-[250px] transition-all duration-300
            ${openFilters ? "translate-x-[0px]" : "-translate-x-[250px] opacity-0"}`}
          >
            <div className="grid gap-4">
              <Card className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dolorem blanditiis voluptatem, tenetur animi laboriosam velit
                facere qui ex atque minima necessitatibus quaerat, corrupti
                optio aspernatur nulla fuga doloremque molestias!
              </Card>
              <Card className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dolorem blanditiis voluptatem, tenetur animi laboriosam velit
                facere qui ex atque minima necessitatibus quaerat, corrupti
                optio aspernatur nulla fuga doloremque molestias!
              </Card>
            </div>
          </div>
        </Card>

        <div
          className={`mt-2 transition-all  duration-300
          ${openFilters && "pl-[258px]"}`}
        >
          <div className="grid gap-2 lg:grid-cols-2">
            {productsByCategory?.featured.map((f) =>
              f.items.map((item) =>
                item?.models.map((model) => (
                  <div key={model.id}>
                    <ProductGridItem
                      category={category}
                      brand={item.brand}
                      title={model.name}
                      price={model.price}
                      type={f.value}
                      images={model.images}
                    />
                  </div>
                )),
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
