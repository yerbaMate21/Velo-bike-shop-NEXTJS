import { PRODUCTS } from "@/utils/products";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";
import NavItem from "./NavItem";
import { Button } from "../ui/button";

const NavItems = () => {
  return (
    <NavigationMenu>
      {/* <NavigationMenuList className="gap-2">
        {products.map((product) => (
          <div key={product.value}>
            <NavigationMenuItem>
              <Link href={`/products/${product.category}`}>
                <NavigationMenuTrigger>
                  {product.category}
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid w-[640px] grid-cols-3 gap-4 p-10">
                  {product.featured.slice(0, 5).map((item) => (
                    <NavItem key={item.id} item={item} />
                  ))}
                  <div className="flex items-center justify-center">
                    {product.featured.length > 5 && (
                      <Link href={`/products/${product.category}`}>
                        <Button
                          variant="link"
                          className="font-normal text-muted-foreground"
                        >
                          Show more
                        </Button>
                      </Link>
                    )}
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
        ))}
      </NavigationMenuList> */}
    </NavigationMenu>
  );
};

export default NavItems;
