import { DATA } from "@/utils/data";
import Link from "next/link";

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
      <div className="bg-orange-500 text-center text-4xl">{category}</div>
      <div className="text-lg">
        {productsByCategory?.featured.map((item) => (
          <Link key={item.id} href={`/${category}/${item.value}`}>
            <div className="m-2 border-2 border-black">
              <div>{item.type}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
