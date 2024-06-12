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
    category: "speed",
    src: "/images/aero-wheels.avif",
  },
  {
    category: "light",
    src: "/images/cross-road-wheels.avif",
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
                className="hover:bg-transparent
              data-[state=open]:bg-transparent data-[state=open]:text-custom"
                onMouseEnter={() => handleCatImage(data.value)}
              >
                <div className="mx-2 text-base font-medium">
                  {data.category}
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-muted">
                <div
                  className="m-8 grid h-full w-[800px] grid-cols-[25%_75%] 
                rounded-md border-[1px] bg-white"
                >
                  <div className="rounded-bl-md rounded-tl-md">
                    {data.featured.map((item) => (
                      <div key={item.id}>
                        <div className="mx-4">
                          <Link href={`/${data.value}/${item.value}`}>
                            <div
                              className={`${buttonVariants({
                                variant: "link-secondary",
                                size: "no-padding-x",
                              })} w-full py-3`}
                              onMouseEnter={() => handleTypeImage(item.value)}
                            >
                              <div className="w-full text-lg">{item.type}</div>
                            </div>
                          </Link>
                          <Separator />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative h-[340px] w-full border-l-[1px]">
                    <Image
                      src={catImage}
                      fill
                      objectFit="cover"
                      alt="navitems-photo"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <Link href={`/${data.value}`}>
                    <div
                      className={`${buttonVariants({
                        variant: "link-secondary",
                        size: "no-padding-x",
                      })} mx-8 mb-8 `}
                    >
                      <div className="text-base font-light">
                        View all {data.value}
                      </div>
                    </div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
        ))}
        <div className="px-4">
          <Link
            href="/blog"
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
