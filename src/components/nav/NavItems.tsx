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

const NavItems = () => {
  let itemsImages: { category: string; src: string }[] = [
    {
      category: "bikes",
      src: "https://pinarello.com/storage/Variant/cff22838c3f40059bf83fc0d70bf22e9.png",
    },
    {
      category: "framesets",
      src: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw05a76ce8/images/full/full_2023_/2023/full_2023_3565_ultimate-cfr-disc-frs_P04_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2",
    },
    {
      category: "wheels",
      src: "https://enve.com/cdn/shop/files/SES_2.3_front_angle.jpg?v=1705021935&width=1800",
    },
    {
      category: "road",
      src: "https://images.pexels.com/photos/1606616/pexels-photo-1606616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      category: "gravel",
      src: "https://images.pexels.com/photos/614479/pexels-photo-614479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      category: "mtb",
      src: "https://images.pexels.com/photos/3967817/pexels-photo-3967817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      category: "e-bike",
      src: "https://images.pexels.com/photos/15021623/pexels-photo-15021623/free-photo-of-mezczyzna-ulica-rower-miejski.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      category: "road-frame",
      src: "https://images.pexels.com/photos/7932160/pexels-photo-7932160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      category: "triathlon",
      src: "https://images.pexels.com/photos/12838/pexels-photo-12838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      category: "flat-routes",
      src: "https://images.pexels.com/photos/13992748/pexels-photo-13992748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      category: "mountain-routes",
      src: "https://images.pexels.com/photos/568236/pexels-photo-568236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

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
                <div className="m-8 grid h-full w-[800px] grid-cols-[25%_75%] rounded-sm border-[1px] bg-white">
                  <div className="rounded-bl-sm rounded-tl-sm bg-secondary">
                    {data.featured.map((item) => (
                      <div key={item.id}>
                        <div className="mx-4">
                          <Link href={`/products/${data.value}/${item.value}`}>
                            <div
                              className={`${buttonVariants({
                                variant: "link-secondary-rose-500",
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
                        variant: "link-secondary-rose-500",
                        size: "no-padding-x",
                      })} mx-8 mb-8 `}
                    >
                      <div className="text-base font-light">
                        View All {data.category}
                      </div>
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
              variant: "link-secondary-rose-500",
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
