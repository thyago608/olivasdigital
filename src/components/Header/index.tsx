import { Envelope, List, X, MagnifyingGlass } from "phosphor-react";
import { ButtonFilled } from "components/ButtonFilled";
import styles from "./styles.module.scss";
import { useRef, useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((oldState) => !oldState);
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <a className={styles.logo}>
          <span>Olivas Digital</span>
        </a>
        <nav
          className={`${styles.navigation} ${
            isOpen ? styles.openNavigation : styles.closeNavigation
          }`}
        >
          <ul>
            <li>
              <a href="https://www.olivas.digital/quem-somos/">
                Quem somos nós
              </a>
            </li>
            <li>
              <a href="https://www.olivas.digital/ferramentas-materiais/">
                Metodologia
              </a>
            </li>
            <li>
              <a href="https://www.olivas.digital/contato/">Nossas soluções</a>
            </li>
            <li>
              <a href="https://www.olivas.digital/blog/">Conteúdos para você</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/olivas-digital/">
                Canais de comunicação
              </a>
            </li>
          </ul>
          <div className={styles.moreOptions}>
            <ButtonFilled>
              <Envelope size={25} />
              Fale com especialista
            </ButtonFilled>
            <button type="button">
              <MagnifyingGlass size={25} />
            </button>
          </div>
        </nav>
        <button type="button" onClick={toggleMenu} className={styles.menu}>
          {isOpen ? <X size={25} /> : <List size={25} />}
        </button>
      </div>
    </header>
  );
}
