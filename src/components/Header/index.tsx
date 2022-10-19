import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <a className={styles.logo}>
          <span>Olivas Digital</span>
        </a>
        <button className={styles.menu}>=</button>
      </div>
    </header>
  );
}
