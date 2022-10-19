import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <nav>
          <ul className={styles.navigation}>
            <li>
              <a href="#">Copyright 2022 - Todos os direitos reservados</a>
            </li>
            <li>
              <a href="#">Política de privacidade</a>
            </li>
            <li>
              <a href="#">Condições Gerais</a>
            </li>
          </ul>
        </nav>
        <a href="https://www.olivas.digital/">
          Desenvolvido por Olivas Digital
        </a>
      </div>
    </footer>
  );
}
