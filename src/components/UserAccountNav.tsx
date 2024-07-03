import { User } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { signOut, useSession } from "next-auth/react";

const UserAccountNav = () => {
  const { data: session } = useSession();

  return (
    <>
      {session?.user ? (
        <NavigationMenu className="-translate-x-16">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${buttonVariants({ variant: "ghost", size: "sm" })} translate-x-16 bg-transparent`}
              >
                <User />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex flex-col p-4">
                  <Link
                    href="/client"
                    className={`${buttonVariants({ variant: "ghost" })} text-base font-normal`}
                  >
                    My Account
                  </Link>
                  <Separator className="my-2" />
                  <Button
                    variant="ghost"
                    className="font-normal"
                    onClick={() =>
                      signOut({
                        redirect: true,
                        callbackUrl: `${window.location.origin}`,
                      })
                    }
                  >
                    Sign Out
                  </Button>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
        <Link
          href="/sign-in"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          <User />
        </Link>
      )}
    </>
  );
};

export default UserAccountNav;
