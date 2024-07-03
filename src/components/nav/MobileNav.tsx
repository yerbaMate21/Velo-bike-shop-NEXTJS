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
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const isAnyCatOpen = activeIndex !== null;

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
        {isAnyCatOpen && (
          <div className="absolute left-4 top-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setActiveIndex(null);
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
              const handleOpen = () => setActiveIndex(data.id);
              const isOpen = data.id === activeIndex;

              return (
                <div key={data.id}>
                  <div
                    className={`${isAnyCatOpen ? "h-0 -translate-x-[calc(100%+10rem)]" : "opacity-100"} 
                   grid duration-300 ease-out`}
                  >
                    {data.category === "Bikes" ? (
                      <>
                        <div
                          onClick={handleOpen}
                          className={`${buttonVariants({ variant: "ghost" })} mr-4 cursor-pointer py-8`}
                        >
                          <div className="flex w-full items-center justify-between">
                            <div className="text-lg">{data.category}</div>
                            <ChevronRight size={20} />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          href={`${data.category}`}
                          className={`${buttonVariants({
                            variant: "link-secondary",
                            size: "no-padding-x",
                          })} mx-4 py-2`}
                        >
                          <div className="w-full text-lg">{data.category}</div>
                        </Link>
                      </>
                    )}
                  </div>

                  {data.featured?.map((product_type) => (
                    <div key={product_type.id}>
                      <div
                        className={`grid duration-300 ease-out 
                      ${isOpen ? "opacity-100" : "h-0 translate-x-[calc(100%+10rem)] opacity-0"}`}
                      >
                        <Link
                          href={product_type.href}
                          className={`${buttonVariants({
                            variant: "link-secondary",
                            size: "no-padding-x",
                          })} mx-4 py-2`}
                        >
                          <div className="w-full text-lg">
                            {product_type.type}
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
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
            <Link href="/bikes/road/Pinarello_DOGMA-X">
              <div className="my-6 transition-all hover:scale-105">
                <Image
                  src="/images/dogma-x.webp"
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
                href="/bikes"
                className={`${buttonVariants({
                  variant: "link-secondary",
                  size: "no-padding-x",
                })}`}
              >
                <div className="text-lg font-light">View all bikes</div>
              </Link>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
