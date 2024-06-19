import { DATA } from "@/utils/data";
import Link from "next/link";

interface PageProps {
  params: {
    category: string;
    categoryType: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { category, categoryType } = params;

  const productsByCategory = DATA.find((item) => item.value === category);
  const productsByType = productsByCategory?.featured.find(
    (item) => item.value === categoryType,
  );

  return (
    <div className="flex items-center gap-4">
      <div>category: {category}</div>
      <div className="text-xl">categoryType: {categoryType}</div>

      <div>
        {productsByType?.items.map((product) => (
          <div key={product?.id}>
            {product?.models.map((model) => (
              <div
                key={model.id}
                className="m-2 flex justify-around gap-4 border-[1px] border-black"
              >
                <Link
                  href={`/${category}/${categoryType}/${product.kind}_${model.name}`}
                >
                  <div>{product.kind}</div>
                  <div>{model.name}</div>
                  <div>{model.price}</div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
