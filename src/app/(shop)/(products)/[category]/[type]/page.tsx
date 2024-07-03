import { IMAGES_BY_TYPE } from "@/constants";
import { DATA } from "@/utils/data";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductGridItem from "@/components/ProductGridItem";

interface PageProps {
  params: {
    category: string;
    type: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { category, type } = params;

  const productsByCategory = DATA.find((item) => item.value === category);
  const productsByType = productsByCategory?.featured.find(
    (item) => item.value === type,
  );

  return (
    <div>
      <section>
        {IMAGES_BY_TYPE.map(
          (item) =>
            item.type === type && (
              <div>
                <div className="relative mx-0 aspect-video max-h-[calc(100vh-120px)] w-full">
                  <Image
                    src={item.src_type}
                    alt={`${item.type}-image`}
                    fill
                    className="rounded-md object-cover object-center"
                  />
                  <div
                    className="absolute left-0 top-0 z-20 flex h-full w-full items-center 
                justify-center text-4xl font-bold uppercase text-white md:text-6xl"
                  >
                    {type}
                  </div>
                  <div
                    className="from-0 absolute inset-0 left-0 top-0 
                z-10 h-full w-full rounded-md bg-gradient-to-t from-black/75"
                  />
                </div>
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
            <MaxWidthWrapper className="py-12 lg:px-24">
              {productsByType?.items.map((item) =>
                item?.models.map((model) => (
                  <div key={model.id}>
                    {/* <ProductGridItem
                      category={category}
                      brand={item.brand}
                      title={model.name}
                      price={model.name}
                      type={type}
                    /> */}
                  </div>
                )),
              )}
            </MaxWidthWrapper>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Page;
