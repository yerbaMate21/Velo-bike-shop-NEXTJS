import { DATA } from "@/utils/data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";
import NavItem from "./NavItem";
import { buttonVariants } from "../ui/button";
import React from "react";
import { cn } from "@/lib/utils";

const NavItems = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {DATA.map((data) => (
          <div key={data.id}>
            <NavigationMenuItem>
              <Link href={`/products/${data.value}`}>
                <NavigationMenuTrigger>
                  <div>{data.category}</div>
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid w-[500px] grid-cols-1 gap-3 p-4">
                  {data.featured.map((item) => (
                    <ListItem key={item.id} title={item.type} href={item.href}>
                      {item.type}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
        ))}
        <Link href="/world-tour">World Tour</Link>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavItems;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
