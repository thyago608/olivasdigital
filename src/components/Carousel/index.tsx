import { MouseEvent, useRef } from "react";
import { CaretRight, CaretLeft } from "phosphor-react";
import { Case } from "components/Case";
import styles from "./styles.module.scss";

export function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  function handleLeftClick(event: MouseEvent) {
    event.preventDefault();
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current?.offsetWidth;
    }
  }

  function handleRightClick(event: MouseEvent) {
    event.preventDefault();

    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current?.offsetWidth;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.list} ref={carouselRef}>
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
      </div>
      <div className={styles.arrows}>
        <button type="button" onClick={handleLeftClick}>
          <CaretLeft size={40} weight="bold" />
        </button>
        <button type="button" onClick={handleRightClick}>
          <CaretRight size={40} weight="bold" />
        </button>
      </div>
    </div>
  );
}
