import { Header } from "components/Header";
import { Home } from "pages/Home";
import { Footer } from "components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "styles/global.scss";

export function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
