import Footer from "@/components/blocks/Footer";
import Navbar from "@/components/nav-bar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
