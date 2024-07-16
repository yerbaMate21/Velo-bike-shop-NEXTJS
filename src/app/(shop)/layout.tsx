import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/nav/Navbar";
import ProductFooter from "@/components/ProductFooter";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <MaxWidthWrapper className="py-4 lg:py-8">
        <div>{children}</div>
        <ProductFooter />
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
}
