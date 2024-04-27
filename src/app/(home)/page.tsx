"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

let carouselItems: {
  image: string;
  title: string;
  desc: string;
  btnDesc: string;
  href: string;
}[] = [
  {
    image: "/images/carousel-1.jpg",
    title: "Lets's get started.",
    desc: "Conquer every mountain and crush every finish line with the greatest bikes",
    btnDesc: "Shop Now",
    href: "/products",
  },
  {
    image: "/images/carousel-2.webp",
    title: "MVDP Signature",
    desc: "Check out the Canyon Aeroad from the Alpecin-Deceuninck team now.",
    btnDesc: "Unlock Speed",
    href: "/products/bikes/road/Canyon/Aeroad CFR",
  },
  {
    image: "/images/carousel-3.avif",
    title: "Electric Bikes",
    desc: "Like riding a bike, but with a little extra power",
    btnDesc: "See the bikes",
    href: "/products/bikes/e-bike",
  },
];

const Page = () => {
  return (
    <>
      <div>
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
        >
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="relative flex h-full min-h-[600px] w-full cursor-grab 
                items-center overflow-hidden active:cursor-grabbing"
              >
                <Image
                  src={item.image}
                  alt={`${item.title}-image`}
                  quality={100}
                  fill
                  className="-z-10 object-cover lg:object-center"
                />
                <div className="from-0 absolute inset-0 -z-10 bg-gradient-to-t from-black/30" />
                <MaxWidthWrapper>
                  <div className="mx-auto flex max-w-3xl flex-col items-center py-24 text-center">
                    <h1 className="text-4xl font-bold uppercase tracking-tight text-rose-500 sm:text-6xl">
                      {item.title}
                    </h1>
                    <p className="mt-6 max-w-prose text-2xl font-medium text-white sm:text-3xl">
                      {item.desc}
                    </p>
                    <div className="mt-6">
                      <Link
                        href={item.href}
                        className={buttonVariants({
                          variant: "secondary",
                          size: "lg",
                        })}
                      >
                        {item.btnDesc}
                      </Link>
                    </div>
                  </div>
                </MaxWidthWrapper>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      <section className="border-t border-gray-200 bg-gray-600">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            slider infinite
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="border-t border-gray-200 bg-gray-400">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            div 2
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="border-t border-gray-200 bg-gray-200">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            div 3
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="border-t border-gray-200 bg-gray-400">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            div 2
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="border-t border-gray-200 bg-gray-200">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            div 3
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Page;
