import { News } from "components/News";
import { INews } from "types/News";
import styles from "./styles.module.scss";

interface NewsListProps {
  variant?: "primary" | "secundary";
  news: INews[];
}

export function NewsList({ variant = "primary", news }: NewsListProps) {
  return (
    <div className={styles.container}>
      {news.map((item) => (
        <News key={item.id} data={item} variant={variant} />
      ))}
    </div>
  );
}
