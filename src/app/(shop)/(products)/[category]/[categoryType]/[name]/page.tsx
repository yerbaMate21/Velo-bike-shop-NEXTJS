"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductItem from "@/components/ProductItem";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { GEOMETRIES_BIKE } from "@/constants";
import { DATA } from "@/utils/data";
import Image from "next/image";

interface PageProps {
  name: string;
  category: string;
  categoryType: string;
}

export type Product = {
  category: string;
  type: string;
  brand: string;
  id: string;
  title: string;
  price: string;
  weight: number | null;
  speed?: number | null;
  power?: number | null;
  images: string[];
};

const Page = ({ params }: { params: PageProps }) => {
  const { name, category, categoryType } = params;
  const productName = name.split("_").pop();

  function getProduct(
    product: Product = {
      category: "",
      type: "",
      brand: "",
      id: "",
      title: "",
      price: "",
      weight: null,
      speed: null,
      power: null,
      images: [],
    },
  ) {
    DATA.map((data) =>
      data.featured.map((f) =>
        f.items.map((item) =>
          item?.models.map(
            (model) =>
              model.name === productName &&
              (product = {
                category: data.value,
                type: f.type,
                brand: item.kind,
                id: model.id,
                title: model.name,
                price: model.price,
                weight: model.weight,
                speed: model.speed,
                power: model.power,
                images: model.images,
              }),
          ),
        ),
      ),
    );

    return product;
  }

  return (
    <div>
      <section>
        <ProductItem product={getProduct()} />
      </section>

      <>
        {(category === "bikes" || categoryType === "framesets") && (
          <section className="pb-6 pt-12">
            <Card>
              <div className="py-12 lg:px-24">
                <MaxWidthWrapper>
                  <div className="text-xl font-medium">GEOMETRIES</div>
                  <Image
                    src="/images/geometry-bike.svg"
                    alt="geometry-bike-image"
                    width={600}
                    height={600}
                    className="mx-auto py-12"
                  />

                  <div className="overflow-hidden">
                    <div className="grid grid-cols-[125px_auto] font-bold md:grid-cols-[200px_auto]">
                      <div className="p-4">Frame size</div>
                      <div className="flex w-full">
                        <div className="w-full p-4 text-center">S</div>
                        <div className="w-full p-4 text-center">M</div>
                        <div className="w-full p-4 text-center">L</div>
                        <div className="w-full p-4 text-center">XL</div>
                      </div>
                    </div>

                    <Separator className="bg-input py-[1px]" />

                    <ScrollArea className="h-56">
                      <Table>
                        <TableBody>
                          {GEOMETRIES_BIKE.map((item) => (
                            <TableRow key={item.dimension}>
                              <TableCell className="w-[125px] px-4 text-left font-medium md:w-[200px]">
                                {item.dimension}
                              </TableCell>
                              <TableCell>{item.s}</TableCell>
                              <TableCell>{item.m}</TableCell>
                              <TableCell>{item.l}</TableCell>
                              <TableCell>{item.xl}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </div>
                </MaxWidthWrapper>
              </div>
            </Card>
          </section>
        )}
      </>
    </div>
  );
};

export default Page;
