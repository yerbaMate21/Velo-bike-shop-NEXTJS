"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { HOME_CAROUSEL, HOME_MARQUEE, HOME_GRID } from "@/constants";
import { DATA } from "@/utils/data";
import { Card, CardContent } from "@/components/ui/card";

const Page = () => {
  return (
    <>
      <div>
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {HOME_CAROUSEL.map((item, index) => (
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
                  className="-z-10 object-cover object-center"
                />
                <div className="from-0 absolute inset-0 left-0 top-0 -z-10 h-full w-full bg-gradient-to-t from-black/50" />
                <MaxWidthWrapper>
                  <div
                    className="mx-auto flex max-w-3xl flex-col items-center
                  px-16 py-28 text-center lg:mx-0 lg:mt-24 lg:items-start lg:text-start"
                  >
                    <h1 className="text-5xl font-bold tracking-tight text-custom md:text-6xl">
                      {item.title}
                    </h1>
                    <p className="mt-6 max-w-prose text-xl text-white lg:text-start lg:text-2xl">
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

      <section>
        <div className="relative flex overflow-x-hidden bg-black">
          <div className="flex animate-marquee whitespace-nowrap py-3">
            {HOME_MARQUEE.map((item, index) => (
              <div key={index} className="flex items-center">
                <Separator
                  orientation="vertical"
                  className="w-[1px] bg-muted-foreground"
                />
                <div className="mx-24 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt="marquee-item-image"
                    width={24}
                    height={24}
                  />
                  <span className="text-base text-white">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-3">
            {HOME_MARQUEE.map((item, index) => (
              <div key={index} className="flex items-center">
                <Separator
                  orientation="vertical"
                  className="w-[1px] bg-muted-foreground"
                />
                <div className="mx-24 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt="marquee-item-image"
                    width={24}
                    height={24}
                  />
                  <span className="text-base text-white">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          ss
        </div>
      </section>

      <section className="bg-white">
        <MaxWidthWrapper className="py-4">
          <div className="relative">
            <video
              autoPlay
              loop
              muted
              className="h-full max-h-screen min-h-[calc(100vh-150px)] w-full rounded-md object-cover object-center"
            >
              <source src="/videos/e.mp4" type="video/mp4" />
            </video>
            <div className="absolute left-0 top-0 flex h-full w-full items-center">
              <MaxWidthWrapper>
                <div
                  className="mx-auto flex max-w-3xl flex-col items-center 
                  px-12 py-28 text-center text-white lg:mx-0 lg:items-start"
                >
                  <h2 className="text-3xl font-bold uppercase lg:text-4xl">
                    District+ 5
                  </h2>
                  <p className="mt-6 max-w-prose text-xl lg:text-start lg:text-2xl">
                    Bring joy to your schedule and ease into the everyday.
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/bikes/e-bike/Trek_District-5`.replace("+", "+")}
                      className={buttonVariants({
                        variant: "secondary",
                        size: "lg",
                      })}
                    >
                      Show more
                    </Link>
                  </div>
                </div>
              </MaxWidthWrapper>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className="py-4 lg:py-8">
          <div className="py-3">
            <h2 className="text-2xl font-bold lg:text-3xl">Most Wanted</h2>
            <div className="py-4 text-xl lg:text-2xl">
              The bikes everyone is talking about.
            </div>
          </div>

          <Carousel opts={{ loop: true, align: "start" }}>
            <CarouselContent className="-ml-2 py-4">
              {DATA.map((data) =>
                data.featured.map((item) =>
                  item.items.map((product_group) =>
                    product_group.models.map(
                      (product) =>
                        product.trending && (
                          <CarouselItem
                            key={product.id}
                            className="group pl-2 lg:basis-1/2"
                          >
                            <Link
                              href={`${item.href}/${product_group.kind}_${product.name}`}
                            >
                              <Card className="relative aspect-video overflow-hidden">
                                <CardContent>
                                  <Image
                                    src={product.images[0]}
                                    alt={`${product.name}-image`}
                                    fill
                                    className="object-cover object-center"
                                  />
                                  <div
                                    className="absolute bottom-2 left-2 right-2 flex items-center
                                    justify-center whitespace-nowrap rounded-md bg-muted py-2 
                                    text-center opacity-0 shadow-md 
                                    transition-all group-hover:opacity-100 lg:bottom-10 lg:left-20 lg:right-20"
                                  >
                                    Quick view
                                  </div>
                                </CardContent>
                              </Card>
                            </Link>

                            <div className="px-2">
                              <div className="mb-2 mt-4 transition-all hover:text-custom lg:text-lg">
                                <Link
                                  href={`${item.href}/${product_group.kind}_${product.name}`}
                                >
                                  {product_group.kind} {product.name}
                                </Link>
                              </div>
                              <div className="text-muted-foreground">
                                {item.type}
                              </div>
                              <div className="text-lg">
                                {product.price} &euro;
                              </div>
                            </div>
                          </CarouselItem>
                        ),
                    ),
                  ),
                ),
              )}
            </CarouselContent>
            <div className="absolute -top-2 right-0 mx-12">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </MaxWidthWrapper>
      </section>

      <section className="bg-white">
        <MaxWidthWrapper className="py-4 lg:py-8">
          <div className="py-3">
            <h2 className="text-2xl font-bold lg:text-3xl">Shop by world</h2>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
            {HOME_GRID.map((item, index) => (
              <div key={index} className="transition-all hover:-translate-y-1">
                <Link href={`/bikes/${item.title}`}>
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={`${item.title}-category-image`}
                      width={500}
                      height={500}
                      quality={100}
                      className="rounded-md object-cover object-center"
                    />
                    <h4 className="absolute bottom-2 left-4 text-base font-bold uppercase text-white">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-white">
        <MaxWidthWrapper className="py-4 lg:py-8">
          <div className="py-3">
            <h2 className="text-2xl font-bold lg:text-3xl">
              Products of the week
            </h2>
          </div>
          <div className="grid h-full w-full gap-2.5 lg:grid-cols-2">
            <Link href="/wheels/cross-road/Zipp_353-NSW">
              <div className="lg:basis-1/2">
                <div className="relative aspect-video rounded-tl-md rounded-tr-md bg-muted">
                  <Image
                    src="/images/product-week-1.webp"
                    alt="product-two-image"
                    fill
                    className="object-contain object-center"
                  />
                </div>

                <div
                  className="flex w-full flex-col items-center rounded-bl-md 
                  rounded-br-md bg-muted px-10 py-8 lg:items-start
                "
                >
                  <div className="text-center text-xl lg:text-2xl">
                    Best for the mountains.
                  </div>
                  <Button size="lg" className="my-4">
                    Shop now
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/bikes/e-bike/Pinarello_NYTRO-E9-Gravel">
              <div className="lg:basis-1/2">
                <div className="relative aspect-video rounded-tl-md rounded-tr-md bg-muted-foreground/20">
                  <Image
                    src="/images/product-week-2.png"
                    alt="product-one-image"
                    fill
                    className="object-contain object-center"
                  />
                </div>

                <div
                  className="flex w-full flex-col items-center rounded-bl-md 
                rounded-br-md bg-muted-foreground/20 px-10 py-8 lg:items-start"
                >
                  <div className="text-center text-xl lg:text-2xl">
                    Power up your way.
                  </div>
                  <Button size="lg" className="my-4">
                    To the bike
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-white">
        <MaxWidthWrapper className="py-4 lg:py-8">
          <div className="relative aspect-video h-full max-h-screen min-h-[calc(100vh-150px)] w-full">
            <Image
              src="/images/mvdp.webp"
              alt="home-section-image"
              fill
              className="rounded-md object-cover object-center"
            />
            <div className="absolute left-0 top-0 flex h-full w-full items-center rounded-md bg-black/20">
              <MaxWidthWrapper>
                <div
                  className="mx-auto flex max-w-3xl flex-col items-center 
                  px-12 py-28 text-center text-white lg:mx-0 lg:items-start"
                >
                  <h2 className="text-3xl font-bold uppercase lg:text-4xl">
                    MVDP Signature
                  </h2>
                  <p className="mt-6 max-w-prose text-xl lg:pr-40 lg:text-start lg:text-2xl">
                    Check out the Canyon Aeroad from the Alpecin-Deceuninck team
                    now
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/bikes/road/Canyon_Aeroad-CFR"
                      className={buttonVariants({
                        variant: "secondary",
                        size: "lg",
                      })}
                    >
                      Unlock Speed
                    </Link>
                  </div>
                </div>
              </MaxWidthWrapper>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Page;
