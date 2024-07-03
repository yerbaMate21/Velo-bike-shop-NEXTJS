"use client";

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
import { Progress } from "./ui/progress";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./ui/dialog";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Gauge, ZoomIn, SmartphoneCharging, X } from "lucide-react";
import ImageZoom from "react-image-zooom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Product from "@/types";

const ProductItem = ({ product }: { product: Product }) => {
  const multiImages: boolean = product.images.length > 1;

  return (
    <Card>
      <div className="grid lg:grid-cols-3">
        <Carousel opts={{ loop: true }} className="border-r-2 lg:col-span-2">
          <CarouselContent>
            {product.images.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[3/2]">
                  <Image
                    src={multiImages ? item : product.images[0]}
                    alt="product-image"
                    fill
                    className="rounded-md object-contain object-center"
                  />

                  <div className="absolute right-4 top-4 z-10">
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
                            width="auto"
                            height="auto"
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {multiImages && (
            <div className="z-50">
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </div>
          )}
        </Carousel>

        <MaxWidthWrapper>
          <div className="flex flex-col gap-1.5 py-8 lg:col-span-1 lg:py-4">
            <div>{product.type}</div>
            <div className="text-2xl font-bold md:text-3xl">
              {product.brand}&nbsp;
              {product.title}
            </div>
            <div className="text-xl font-medium md:text-2xl">
              {product.price} &euro;
            </div>
            <div className="grid grid-cols-1 gap-2 py-3">
              {product.weight && (
                <div>Weight:&nbsp;{product.weight}&nbsp;kg</div>
              )}
              {product.speed && (
                <div className="flex items-center gap-2">
                  <div>Speed</div>
                  <Gauge size={24} />
                  <Progress value={product.speed} className="h-3 w-full" />
                </div>
              )}
              {product.power && (
                <div className="flex items-center gap-1 text-green-500">
                  <div>Power</div>
                  <SmartphoneCharging size={24} />
                  &nbsp;{product.power}&nbsp;W
                </div>
              )}
            </div>

            {(product.category === "bikes" || product.type === "framesets") && (
              <div className="grid gap-2 py-2">
                <div className="text-lg font-medium">Select frame size</div>
                <ToggleGroup type="single" className="grid grid-cols-4">
                  <ToggleGroupItem
                    value="s"
                    variant="outline"
                    className="h-10 w-auto"
                  >
                    S
                  </ToggleGroupItem>

                  <ToggleGroupItem
                    value="m"
                    variant="outline"
                    className="h-10 w-auto"
                  >
                    M
                  </ToggleGroupItem>

                  <ToggleGroupItem
                    value="l"
                    variant="outline"
                    className="h-10 w-auto"
                  >
                    L
                  </ToggleGroupItem>

                  <ToggleGroupItem
                    value="xl"
                    variant="outline"
                    className="h-10 w-auto"
                  >
                    XL
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            )}
            <Button className="py-6 text-lg" onClick={() => {}}>
              Add to cart
            </Button>
          </div>
        </MaxWidthWrapper>
      </div>
    </Card>
  );
};

export default ProductItem;
