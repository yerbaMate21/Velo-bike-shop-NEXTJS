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
        className="overflow-y-auto overflow-x-hidden pt-16 sm:min-w-[640px]"
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
        <Separator className="mb-4" />
        <div className="h-[180px] overflow-hidden">
          {DATA.map((data) => {
            const handleCatOpen = () => setActiveCatIndex(data.id);
            const isCatOpen = data.id === activeCatIndex;

            return (
              <div key={data.id}>
                <div
                  className={`${isAnyCatOpen ? "h-0 -translate-x-[calc(100%+10rem)]" : "opacity-100"} 
                   grid duration-300 ease-out`}
                >
                  <div
                    onClick={handleCatOpen}
                    className={`${buttonVariants({ variant: "link" })} w-full cursor-pointer py-8`}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="text-lg">{data.category}</div>
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </div>

                {isCatOpen && (
                  <div className="mb-2 flex w-full justify-center text-xs font-bold">
                    {data.category}
                  </div>
                )}

                {data.featured.map((product_type) => {
                  const handleTypeOpen = () =>
                    setActiveTypeIndex(product_type.id);
                  const isTypeOpen = product_type.id === activeTypeIndex;

                  return (
                    <div key={product_type.id}>
                      <div
                        className={`grid duration-300 ease-out 
                          ${isCatOpen ? "opacity-100" : "h-0 translate-x-[calc(100%+10rem)] opacity-0"}
                          ${isAnyTypeOpen ? "h-0 -translate-x-[calc(100%+10rem)]" : ""}
                          `}
                      >
                        <div
                          onClick={handleTypeOpen}
                          className={`${buttonVariants({ variant: "link" })} w-full cursor-pointer py-8`}
                        >
                          <div className="flex w-full items-center justify-between">
                            <div className="text-lg">{product_type.type}</div>
                            <ChevronRight size={20} />
                          </div>
                        </div>
                      </div>

                      {product_type.items.map((product) => (
                        <div key={product.id}>
                          <div
                            className={`duration-300 ease-out
                                ${isTypeOpen ? "opacity-100" : "h-0 translate-x-[calc(100%+10rem)] opacity-0"}
                                `}
                          >
                            <ScrollArea className="h-[180px]">
                              <Link
                                href={`/products/${data.value}/${product_type.value}/${product.brand}-${product.name}`}
                              >
                                <div
                                  className={buttonVariants({
                                    variant: "link",
                                  })}
                                >
                                  <div className="text-base">
                                    {product.name}
                                  </div>
                                </div>
                              </Link>
                            </ScrollArea>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <SheetFooter>
          <div className="flex w-full flex-col items-center py-8 text-center">
            <Separator />
            <div className="py-2 text-lg font-bold">Pinarello DOGMA X</div>
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
            <div>
              <Link
                href="/products"
                className={buttonVariants({ variant: "link" })}
              >
                View All
              </Link>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
