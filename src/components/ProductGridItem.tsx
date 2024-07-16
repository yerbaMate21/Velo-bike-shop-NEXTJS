import { Card } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

interface Props {
  category: string;
  brand: string;
  title: string;
  price: string;
  type: string;
  images: string[];
}

const ProductGridItem = ({
  category,
  brand,
  title,
  price,
  type,
  images,
}: Props) => {
  return (
    <Link href={`/${category}/${type}/${brand}_${title}`}>
      <Card>
        <div className="my-2 flex">
          <div className="relative aspect-video h-full w-full">
            <Image
              src={images[0]}
              alt="product-image"
              fill
              className="rounded-md object-cover object-center px-2"
            />
          </div>
          {/* <div>{brand}</div>
          <div>{title}</div>
          <div>{price}</div>
          <div>{type}</div> */}
        </div>
      </Card>
    </Link>
  );
};

export default ProductGridItem;
