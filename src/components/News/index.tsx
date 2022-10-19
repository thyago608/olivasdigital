import { Category } from "components/Category";
import styles from "./styles.module.scss";

interface NewsProps {
  data: {
    category: string;
    title: string;
  };
}

export function News({ data }: NewsProps) {
  return (
    <div className={styles.container}>
      <Category>{data.category}</Category>
      <a href={data.title} className={styles.title}>
        {data.title}
      </a>
      <time>11/11/2022</time>
    </div>
  );
}
