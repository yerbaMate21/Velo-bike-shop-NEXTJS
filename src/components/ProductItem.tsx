"use client";

import { Product } from "@/app/(shop)/(products)/[category]/[categoryType]/[name]/page";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Gauge, ZoomIn, SmartphoneCharging, X } from "lucide-react";
import { Progress } from "./ui/progress";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./ui/dialog";
import ImageZoom from "react-image-zooom";

const ProductItem = ({ product }: { product: Product }) => {
  const multiImages: boolean = product.images.length > 1;

  return (
    <div>
      <Card>
        <div className="grid lg:grid-cols-3">
          <Carousel opts={{ loop: true }} className="lg:col-span-2">
            <CarouselContent>
              {product.images.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video h-full w-full bg-input">
                    <div className="absolute right-2 top-2 z-10">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="bg-white"
                            size="icon"
                          >
                            <ZoomIn size={24} />
                          </Button>
                        </DialogTrigger>

                        <DialogContent className="flex items-center justify-center">
                          <div className="flex h-screen w-full max-w-screen-lg items-center justify-center">
                            <ImageZoom
                              src={item}
                              alt="zoom-product-image"
                              zoom="250"
                            />
                          </div>

                          <div className="absolute right-4 top-4 z-10">
                            <DialogClose asChild className="z-50">
                              <Button variant="outline" size="icon">
                                <X size={24} />
                              </Button>
                            </DialogClose>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <Image
                      src={multiImages ? item : product.images[0]}
                      alt="product-image"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {multiImages && (
              <div className="z-50">
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </div>
            )}
          </Carousel>

          <div className="flex flex-col gap-2 px-8 py-2 lg:col-span-1">
            <div>{product.type}</div>
            <div className="text-2xl font-bold md:text-3xl">
              {product.brand}&nbsp;
              {product.title}
            </div>
            <div className="text-xl font-medium md:text-2xl">
              {product.price} &euro;
            </div>
            <div className="grid grid-cols-1 gap-3 py-4">
              {product.weight && (
                <div>Weight:&nbsp;{product.weight}&nbsp;kg</div>
              )}
              {product.power && (
                <div className="flex items-center gap-1 text-green-500">
                  <SmartphoneCharging size={24} />
                  &nbsp;{product.power}&nbsp;W
                </div>
              )}

              {product.speed && (
                <div className="flex items-center gap-2">
                  <Gauge size={24} />
                  <Progress
                    value={product.speed}
                    className="h-3 w-1/2 lg:w-full"
                  />
                </div>
              )}
            </div>
            <Button className="py-7 text-xl" onClick={() => {}}>
              Add to cart
            </Button>
          </div>
        </div>
      </Card>

      <section className="py-4 lg:py-8"></section>
    </div>
  );
};

export default ProductItem;
