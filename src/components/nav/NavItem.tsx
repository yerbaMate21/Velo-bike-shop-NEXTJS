import Image from "next/image";
import Link from "next/link";

const NavItem = ({ item }: string | any) => {
  return (
    <Link href={`/product/${item.id}`}>
      <div className="aspect-square rounded-md bg-white shadow-md transition-all hover:scale-105">
        <Image
          src={item.images[0]}
          alt={`${item.title}-image`}
          width={500}
          height={500}
          className="rounded-md object-contain p-2"
        />
      </div>
    </Link>
  );
};

export default NavItem;
