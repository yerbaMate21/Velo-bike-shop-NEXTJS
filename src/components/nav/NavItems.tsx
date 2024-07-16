"use  client";

import { DATA } from "@/utils/data";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { IMAGES_BY_CATEGORY } from "@/constants";
import { IMAGES_BY_TYPE } from "@/constants";

const NavItems = () => {
  const [catImage, setCatImage] = useState<string>("");

  const handleCatImage = (value: string) => {
    IMAGES_BY_CATEGORY.map((item) => {
      if (item.category === value) {
        setCatImage(item.src);
      }
    });
  };

  const handleTypeImage = (value: string) => {
    IMAGES_BY_TYPE.map((item) => {
      if (item.type === value) {
        setCatImage(item.src);
      }
    });
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {DATA.map((data) => (
          <div key={data.id}>
            {data.category === "Bikes" && (
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  onMouseEnter={() => handleCatImage(data.value)}
                >
                  <div className="mx-2 text-base font-medium">
                    {data.category}
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div
                    className="m-8 grid h-full w-[760px] grid-cols-[20%_80%] 
                  rounded-md border-[1px]"
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
                                <div className="w-full text-lg">
                                  {item.type}
                                </div>
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
                        <div className="text-lg font-light">
                          View all {data.value}
                        </div>
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )}
          </div>
        ))}

        <div className="px-8">
          <Link
            href="/components"
            className={buttonVariants({
              variant: "link-secondary",
              size: "no-padding-x",
            })}
          >
            <div className="text-base font-medium">Components</div>
          </Link>
        </div>

        <div className="px-8">
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
