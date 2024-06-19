import { PRODUCT_FOOTER } from "@/constants";
import Image from "next/image";
import { Card } from "./ui/card";
import MaxWidthWrapper from "./MaxWidthWrapper";

const ProductFooter = () => {
  return (
    <div className="pt-6">
      <Card>
        <MaxWidthWrapper>
          <div
            className="grid gap-10 py-12 text-muted-foreground 
          lg:grid-cols-[40%_60%] lg:px-24"
          >
            <div className="grid gap-3">
              <h3 className="text-xl font-medium uppercase text-black">
                Support
              </h3>
              <div>
                In this section you will find all the information about our
                products, technical manuals, information on warranty terms and
                frame registration procedures
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-5">
              {PRODUCT_FOOTER.map((item) => (
                <div className="group flex cursor-pointer flex-col justify-between py-3">
                  <div className="flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt="support-image"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="text-center text-sm font-medium uppercase group-hover:text-black  group-hover:underline">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </Card>
    </div>
  );
};

export default ProductFooter;
