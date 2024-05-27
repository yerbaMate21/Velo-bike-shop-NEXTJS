import { DATA } from "@/utils/data";

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
      <div className="text-4xl">{category}</div>
      <div className="text-lg">
        {productsByCategory?.featured.map((item) => (
          <div key={item.id}>
            <div>{item.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
