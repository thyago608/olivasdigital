import { Category } from "components/Category";
import { IEmphasis } from "types/Emphasis";
import styles from "./styles.module.scss";

interface EmphasisProps {
  data: IEmphasis;
  variant?: "long" | "short";
}

export function Emphasis({ data, variant = "long" }: EmphasisProps) {
  return (
    <div
      className={`${
        variant === "long" ? styles.containerLong : styles.containerShort
      }`}
    >
      <img src={data.image} alt={data.title} title={data.title} />
      <header>
        <div className={styles.headerTop}>
          <Category>{data.category}</Category>
          <time>{data.published}</time>
        </div>
        <h4 className={styles.headerTitle}>
          <a href="#">{data.title}</a>
        </h4>
      </header>
      <div className={styles.content}>
        <p>{data.text}</p>
      </div>
    </div>
  );
}
