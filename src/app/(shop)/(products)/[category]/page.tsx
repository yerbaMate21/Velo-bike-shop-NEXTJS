import { DATA } from "@/utils/data";
import { IMAGES_BY_CATEGORY } from "@/constants";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductGridItem from "@/components/ProductGridItem";

interface PageProps {
  params: {
    category: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { category } = params;

  const productsByCategory = DATA.find((item) => item.value === category);

  return (
    <div>
      <section>
        {IMAGES_BY_CATEGORY.map(
          (item) =>
            item.category === category && (
              <div className="relative mx-0 aspect-video max-h-[calc(100vh-120px)] w-full">
                <Image
                  src={item.src_cat}
                  alt={`${item.category}-image`}
                  fill
                  className="rounded-md object-cover object-center"
                />
                <div
                  className="absolute left-0 top-0 z-20 flex h-full w-full items-center 
                justify-center text-4xl font-bold uppercase text-white md:text-6xl"
                >
                  {category}
                </div>
                <div
                  className="from-0 absolute inset-0 left-0 top-0 
                z-10 h-full w-full rounded-md bg-gradient-to-t from-black/75"
                />
              </div>
            ),
        )}
      </section>

      <nav className="my-6 flex justify-between bg-green-400 py-6">
        <div>back to top</div>
        <div>sort</div>
        <div>open filters</div>
      </nav>

      <section>
        <div className="py-4 lg:py-8">
          <Card>
            <div className="flex">
              <div className="w-[240px] bg-orange-100">
                <MaxWidthWrapper>filter</MaxWidthWrapper>
              </div>

              <div className="grid w-full bg-green-300 lg:grid-cols-2">
                {productsByCategory?.featured.map((f) =>
                  f.items.map((item) =>
                    item?.models.map((model) => (
                      <div key={model.id}>
                        <ProductGridItem
                          category={category}
                          brand={item.brand}
                          title={model.name}
                          price={model.price}
                          type={f.value}
                        />
                      </div>
                    )),
                  ),
                )}
              </div>
            </div>

            <div className="flex flex-col bg-green-100"></div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Page;
