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
                <div
                  className="flex items-center justify-center py-6 text-5xl font-medium
                  uppercase tracking-tight text-black lg:py-10 lg:text-7xl"
                >
                  {type}
                </div>
                <div className="relative mx-0 aspect-video max-h-[calc(100vh-150px)] w-full">
                  <Image
                    src={item.src_type}
                    alt={`${item.type}-image`}
                    fill
                    className="rounded-md object-cover object-center"
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
