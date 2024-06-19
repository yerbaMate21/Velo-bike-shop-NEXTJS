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
    <div className="bg-muted">
      <Navbar />
      <MaxWidthWrapper className="py-6 lg:py-12">
        <div>{children}</div>
        <ProductFooter />
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
}
