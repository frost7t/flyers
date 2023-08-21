import Footer from "@/Components/footer/Footer";
import Navbar from "@/Components/navigation/Navbar";
import ScrollToTopButton from "@/Components/scrollingbtn/ScrollToTopBtnIcon";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <ScrollToTopButton />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
