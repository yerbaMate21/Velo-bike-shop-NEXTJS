"use client";

import { DATA } from "@/utils/data";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet";
import { AlignJustify, ChevronLeft, ChevronRight } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

const MobileNav = () => {
  const [activeCatIndex, setActiveCatIndex] = useState<null | number>(null);
  const [activeTypeIndex, setActiveTypeIndex] = useState<null | number>(null);

  const isAnyCatOpen = activeCatIndex !== null;
  const isAnyTypeOpen = activeTypeIndex !== null;

  return (
    <Sheet>
      <SheetTrigger
        className={`${buttonVariants({ variant: "ghost", size: "sm" })} xl:hidden`}
      >
        <AlignJustify />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="overflow-y-auto overflow-x-hidden pt-16 sm:min-w-[500px]"
      >
        {(isAnyCatOpen || isAnyTypeOpen) && (
          <div className="absolute left-4 top-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setActiveCatIndex(null);
                setActiveTypeIndex(null);
              }}
            >
              <ChevronLeft />
            </Button>
          </div>
        )}
        <div className="my-2">
          <Separator />
          <ScrollArea className="h-[192px]">
            {DATA.map((data) => {
              const handleCatOpen = () => setActiveCatIndex(data.id);
              const isCatOpen = data.id === activeCatIndex;

              return (
                <div key={data.id}>
                  <div
                    className={`${isAnyCatOpen ? "h-0 -translate-x-[calc(100%+10rem)]" : "opacity-100"} 
                   grid duration-300 ease-out`}
                  >
                    {data.isNested ? (
                      <div
                        onClick={handleCatOpen}
                        className={`${buttonVariants({ variant: "ghost" })} mr-4 cursor-pointer py-8`}
                      >
                        <div className="flex w-full items-center justify-between">
                          <div className="text-lg">{data.category}</div>
                          <ChevronRight size={20} />
                        </div>
                      </div>
                    ) : (
                      <Link href={`/products/${data.value}`}>
                        <div
                          className={`${buttonVariants({ variant: "link" })} 
                          my-2 w-full`}
                        >
                          <div className="flex w-full text-left text-lg">
                            {data.category}
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                  {data.featured?.map((product_type) => {
                    const handleTypeOpen = () =>
                      setActiveTypeIndex(product_type.id);
                    const isTypeOpen = product_type.id === activeTypeIndex;

                    return (
                      <div key={product_type.id}>
                        <div
                          className={`grid duration-300 ease-out 
                          ${isCatOpen ? "opacity-100" : "h-0 translate-x-[calc(100%+10rem)] opacity-0"}
                          ${isAnyTypeOpen ? "h-0 -translate-x-[calc(100%+10rem)]" : null}
                          `}
                        >
                          <div
                            onClick={handleTypeOpen}
                            className={`${buttonVariants({ variant: "ghost" })} mr-4 cursor-pointer py-8`}
                          >
                            <div className="flex w-full items-center justify-between">
                              <div className="text-lg">{product_type.type}</div>
                              <ChevronRight size={20} />
                            </div>
                          </div>
                        </div>

                        {product_type.items.map((product) => (
                          <div key={product.id}>
                            <Link href={`${product_type.href}/${product.kind}`}>
                              <div
                                className={`mx-4 duration-300 ease-out 
                                ${isTypeOpen ? "opacity-100" : "h-0 translate-x-[calc(100%+10rem)] opacity-0"}
                                `}
                              >
                                <div
                                  className={`${buttonVariants({
                                    variant: "link-secondary-rose-500",
                                    size: "no-padding-x",
                                  })} w-full`}
                                >
                                  <div className="w-full text-base">
                                    {product.kind}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </ScrollArea>
          <Separator />
        </div>
        <SheetFooter>
          <div className="my-2 flex w-full flex-col items-center text-center">
            <div className="text-lg font-bold">Pinarello DOGMA X</div>
            <div>Bike of the champions</div>
            <Link href="/products/bikes/road/PINARELLO-DOGMA X">
              <div className="my-6 transition-all hover:scale-105">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/63ec1e3d4940eb5e2d87d267/74250dc6-0d3c-4956-b365-a644c2cb6563/Bicycle-custom-build-service.jpg"
                  alt="mobiel-nav-photo"
                  width={500}
                  height={500}
                  quality={100}
                  className="object-contain object-center"
                />
              </div>
            </Link>
            <div className="mb-4">
              <Link
                href="/products"
                className={`${buttonVariants({
                  variant: "link-secondary-rose-500",
                  size: "no-padding-x",
                })}`}
              >
                <div className="font-normal">View All</div>
              </Link>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
