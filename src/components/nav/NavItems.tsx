"use  client";

import { DATA } from "@/utils/data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { useState } from "react";
import Image from "next/image";
import { Separator } from "../ui/separator";

let itemsImages: { category: string; src: string }[] = [
  {
    category: "bikes",
    src: "/images/bikes.png",
  },
  {
    category: "framesets",
    src: "/images/framesets.webp",
  },
  {
    category: "wheels",
    src: "/images/wheels.webp",
  },
  {
    category: "road",
    src: "/images/road.jpeg",
  },
  {
    category: "gravel",
    src: "/images/gravel.jpeg",
  },
  {
    category: "mtb",
    src: "/images/mtb.jpeg",
  },
  {
    category: "e-bike",
    src: "/images/e-bike.webp",
  },
  {
    category: "road-frame",
    src: "/images/road-frame.avif",
  },
  {
    category: "aerodynamic",
    src: "/images/aerodynamic.webp",
  },
  {
    category: "flat-routes",
    src: "/images/flat-routes.avif",
  },
  {
    category: "mountain-routes",
    src: "/images/mountain-routes.avif",
  },
];

const NavItems = () => {
  const [catImage, setCatImage] = useState<string>("");

  const handleCatImage = (value: string) => {
    itemsImages.map((item) => {
      if (item.category === value) {
        setCatImage(item.src);
      }
    });
  };

  const handleTypeImage = (value: string) => {
    itemsImages.map((item) => {
      if (item.category === value) {
        setCatImage(item.src);
      }
    });
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {DATA.map((data) => (
          <div key={data.id}>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="hover:bg-transparent data-[state=open]:bg-transparent 
              data-[state=open]:text-rose-500"
                onMouseEnter={() => handleCatImage(data.value)}
              >
                <div className="mx-2 text-base font-medium">
                  {data.category}
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-primary-foreground">
                <div
                  className="m-8 grid h-full w-[800px] grid-cols-[25%_75%] 
                rounded-sm border-[1px] bg-white"
                >
                  <div className="rounded-bl-sm rounded-tl-sm bg-secondary">
                    {data.featured.map((item) => (
                      <div key={item.id}>
                        <div className="mx-4">
                          <Link href={`/products/${data.value}/${item.value}`}>
                            <div
                              className={`${buttonVariants({
                                variant: "link-secondary",
                                size: "no-padding-x",
                              })} my-2 w-full`}
                              onMouseEnter={() => handleTypeImage(item.value)}
                            >
                              <div className="w-full text-lg font-normal">
                                {item.type}
                              </div>
                            </div>
                          </Link>
                          <Separator />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative h-[340px] w-full">
                    <Image
                      src={catImage}
                      fill
                      objectFit="cover"
                      alt="navitems-photo"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <Link href={`/products/${data.value}`}>
                    <div
                      className={`${buttonVariants({
                        variant: "link-secondary",
                        size: "no-padding-x",
                      })} mx-8 mb-8 `}
                    >
                      <div className="font-light">View All {data.category}</div>
                    </div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
        ))}
        <div className="px-2">
          <Link
            href="/world-tour"
            className={buttonVariants({
              variant: "link-secondary",
              size: "no-padding-x",
            })}
          >
            <div className="text-base font-medium">World Tour</div>
          </Link>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavItems;
