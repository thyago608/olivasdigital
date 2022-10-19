import { ButtonFilled } from "components/ButtonFilled";
import { PlusCircle } from "phosphor-react";
import styles from "./styles.module.scss";

export function NewsLetter() {
  return (
    <section className={styles.container}>
      <header className={styles.title}>
        <h3>
          Receba <span> nossas novidades</span>
        </h3>
      </header>
      <form>
        <label className={styles.question}>
          Quer receber conteúdos exclusivos no seu e-mail ?
        </label>
        <div className={styles.formContent}>
          <div className={styles.containerInputs}>
            <input type="text" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu e-mail" />
          </div>
          <label htmlFor="accerptTerms" className={styles.accerptTerms}>
            <input id="accerptTerms" type="checkbox" />
            Ao informar meus dados, eu concordo com a Política de Privacidade e
            concordo em receber comunicações.
          </label>
        </div>
        <ButtonFilled type="submit">
          <PlusCircle size={20} />
          Cadastrar
        </ButtonFilled>
      </form>
    </section>
  );
}
