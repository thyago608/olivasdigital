import styles from "./styles.module.scss";

interface CategoryProps {
  children: string;
}

export function Category({ children }: CategoryProps) {
  return (
    <a href={`/categoria/${children}`} className={styles.container}>
      {children}
    </a>
  );
}
