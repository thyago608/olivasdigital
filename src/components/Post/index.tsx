import { Category } from "components/Category";
import styles from "./styles.module.scss";

interface PostProps {
  data: {
    category: string;
    title: string;
  };
  variant?: "primary" | "secundary";
}

export function Post({ data, variant = "primary" }: PostProps) {
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
