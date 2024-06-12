import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/nav/Navbar";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-muted">
      <Navbar />
      <MaxWidthWrapper className="py-4 lg:py-8">{children}</MaxWidthWrapper>
      <Footer />
    </div>
  );
}
