import { DATA } from "@/utils/data";

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
          <div key={product.id}>
            {product.models.map((model) => (
              <div
                key={model.id}
                className="flex justify-around gap-4 border-[1px] border-black"
              >
                <div>{product.kind}</div>
                <div>{model.name}</div>
                <div>{model.price}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
