import Footer from "@/features/Footer";
import Navbar from "@/features/Navbar";

export default function WebsiteTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
