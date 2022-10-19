import { Category } from "components/Category";
import styles from "./styles.module.scss";

interface NewsProps {
  data: {
    category: string;
    title: string;
  };
  variant?: "primary" | "secundary";
}

export function News({ data, variant = "primary" }: NewsProps) {
  return (
    <div
      className={`${styles.container} ${
        variant === "primary" ? styles.primary : styles.secundary
      }`}
    >
      <Category variant={variant === "primary" ? "pink" : "blue"}>
        {data.category}
      </Category>
      <a href={data.title} className={styles.title}>
        {data.title}
      </a>
      <time>11/11/2022</time>
    </div>
  );
}
