import styles from "./styles.module.scss";

interface CategoryProps {
  children: string;
  variant?: "pink" | "blue";
}

export function Category({ children, variant = "pink" }: CategoryProps) {
  return (
    <a
      href={`/categoria/${children}`}
      className={`${styles.container} ${
        variant === "pink" ? styles.pink : styles.blue
      }`}
    >
      {children}
    </a>
  );
}
