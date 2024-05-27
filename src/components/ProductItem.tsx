import { Product } from "@/app/(shop)/(products)/[category]/[categoryType]/[name]/page";
import Image from "next/image";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className="text-2xl">Product:</div>
      <div>brand: {product.brand}</div>
      <div>id: {product.id}</div>
      <div>title: {product.title}</div>
      <div>price: {product.price}</div>
      <Image
        src={product.images[0]}
        alt="product-image"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ProductItem;
