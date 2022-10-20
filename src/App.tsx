import { Header } from "components/Header";
import { Home } from "pages/Home";
import { Footer } from "components/Footer";
import "styles/global.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";

export function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
