import Footer from "@/components/share/Footer";
import Navbar from "@/components/share/nav-bar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
