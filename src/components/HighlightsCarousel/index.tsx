import { Emphasis } from "components/Emphasis";
import { Carousel } from "react-responsive-carousel";
import { highlights } from "mock";
import styles from "./styles.module.scss";

export function HighlightsCarousel() {
  return (
    <div className={styles.container}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        useKeyboardArrows={true}
      >
        {highlights.map((item) => (
          <Emphasis key={item.id} data={item} variant="short" />
        ))}
      </Carousel>
    </div>
  );
}
