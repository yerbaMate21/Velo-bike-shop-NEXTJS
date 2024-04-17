import { Search } from "lucide-react";
import { buttonVariants } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const SearchProduct = () => {
  return (
    <Sheet>
      <SheetTrigger
        className={`${buttonVariants({ variant: "ghost", size: "sm" })}`}
      >
        <Search />
      </SheetTrigger>
      <SheetContent className="sm:min-w-[500px]">
        <SheetHeader>
          <SheetTitle>Search Product</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SearchProduct;
