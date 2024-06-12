import ProductItem from "@/components/ProductItem";
import { DATA } from "@/utils/data";
import { any, number } from "zod";

interface PageProps {
  name: string;
}

export type Product = {
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
  const { name } = params;
  const productName = name.split("_").pop();

  function getProduct(
    product: Product = {
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

  return <ProductItem product={getProduct()} />;
};

export default Page;
