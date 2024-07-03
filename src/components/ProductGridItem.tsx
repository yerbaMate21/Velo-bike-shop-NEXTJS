import { Card } from "./ui/card";
import Link from "next/link";

interface Props {
  category: string;
  brand: string;
  title: string;
  price: string;
  type: string;
}

const ProductGridItem = ({ category, brand, title, price, type }: Props) => {
  return (
    <Link href={`/${category}/${type}/${brand}_${title}`}>
      <Card>
        <div className="my-2 flex bg-green-200">
          <div>{brand}</div>
          <div>{title}</div>
          <div>{price}</div>
          <div>{type}</div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductGridItem;
