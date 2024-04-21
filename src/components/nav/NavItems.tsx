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

const NavItems = () => {
  let itemsImages: { category: string; src: string }[] = [
    {
      category: "bikes",
      src: "https://pinarello.com/storage/Variant/cff22838c3f40059bf83fc0d70bf22e9.png",
    },
    {
      category: "framesets",
      src: "https://bike-room.com/cdn/shop/files/de-rosa-sk-pininfarina-size-46-viviani-edition-frameset-940808_1220x_crop_center.jpg?v=1713366958",
    },
    {
      category: "wheels",
      src: "https://bike-room.com/cdn/shop/files/campagnolo-bora-ultra-wto-80mm-disc-set-957560_1220x_crop_center.png?v=1713366717",
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
      category: "race",
      src: "https://images.pexels.com/photos/248559/pexels-photo-248559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
  const [typeImage, setTypeImage] = useState<string>(
    "https://images.pexels.com/photos/17239283/pexels-photo-17239283/free-photo-of-kobiety-sport-usmiechajacy-sie-rowery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  );

  const handleCatImage = (value: string) => {
    console.log(value);

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
  const resetImage = () => {
    setTypeImage(
      "https://images.pexels.com/photos/17239283/pexels-photo-17239283/free-photo-of-kobiety-sport-usmiechajacy-sie-rowery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    );
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
              <NavigationMenuContent
                className="bg-primary-foreground"
                onMouseLeave={resetImage}
              >
                <div className="m-8 grid h-full w-[800px] grid-cols-[30%_70%] rounded-sm border-[1px]">
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
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative aspect-video h-full w-full">
                    <Image
                      src={catImage}
                      fill
                      alt="navitems-photo"
                      className="h-full w-full object-cover object-center"
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
        <Link
          href="/world-tour"
          className={buttonVariants({
            variant: "link-secondary-rose-500",
            size: "no-padding-x",
          })}
        >
          <div className="text-base font-medium">World Tour</div>
        </Link>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavItems;
