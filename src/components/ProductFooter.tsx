import { PRODUCT_FOOTER } from "@/constants";
import Image from "next/image";
import { Card } from "./ui/card";
import MaxWidthWrapper from "./MaxWidthWrapper";

const ProductFooter = () => {
  return (
    <Card>
      <MaxWidthWrapper className="py-12 lg:px-24">
        <div
          className="grid gap-10 text-muted-foreground 
          lg:grid-cols-[40%_60%]"
        >
          <div className="grid gap-2">
            <h3 className="text-xl font-medium uppercase text-black">
              Support
            </h3>
            <div>
              In this section you will find all the information about our
              products, technical manuals, information on warranty terms and
              frame registration procedures
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {PRODUCT_FOOTER.map((item) => (
              <div className="group my-8 flex cursor-pointer flex-col justify-between gap-3">
                <div className="flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt="support-image"
                    width={30}
                    height={30}
                  />
                </div>
                <div
                  className="text-center text-sm font-medium uppercase 
                  underline-offset-4 group-hover:text-black group-hover:underline"
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </Card>
  );
};

export default ProductFooter;
