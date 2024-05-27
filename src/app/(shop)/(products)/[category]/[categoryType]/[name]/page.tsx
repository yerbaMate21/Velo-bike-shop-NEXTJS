import ProductItem from "@/components/ProductItem";
import { DATA } from "@/utils/data";

interface PageProps {
  name: string;
}

export type Product = {
  brand: string;
  id: string;
  title: string;
  price: string;
  images: string[];
};

const Page = ({ params }: { params: PageProps }) => {
  const { name } = params;
  const productName = name.split("_").pop();

  function getProduct(
    product: Product = { brand: "", id: "", title: "", price: "", images: [] },
  ) {
    DATA.map((data) =>
      data.featured.map((f) =>
        f.items.map((item) =>
          item.models.map(
            (model) =>
              model.name === productName &&
              (product = {
                brand: item.kind,
                id: model.id,
                title: model.name,
                price: model.price,
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
      <div className="text-2xl">name: {name}</div>
      <div className="text-2xl">productName: {productName}</div>
      <div className="m-4 border-[1px] border-black">
        <ProductItem product={getProduct()} />
      </div>
    </div>
  );
};

export default Page;
