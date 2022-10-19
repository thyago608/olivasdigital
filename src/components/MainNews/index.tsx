import { Category } from "components/Category";
import styles from "./styles.module.scss";

export function MainNews() {
  return (
    <div className={styles.container}>
      <img
        src="/images/girl-coding.png"
        alt="girl coding"
        title="girl coding"
      />
      <header>
        <div className={styles.headerTop}>
          <Category>Tecnologia</Category>
          <time>11/11/2022</time>
        </div>
        <h4 className={styles.headerTitle}>
          <a href="#">
            Contando com a tecnologia para o treinamento de especialistas no
            atendimento
          </a>
        </h4>
      </header>
      <div className={styles.content}>
        <p>
          Muito mais do que saber ouvir e atender as necessidades de um cliente,
          o Customer Experiencie visa ir além e oferecer uma experiência que de
          fato trará muito mais proximidade entre o cliente e a marca.
        </p>
        <p>
          As boas práticas de um atendimento já não são o que foram há poucos
          anos atrás, o mercado demanda por profissionais capazes de
          proporcionar um contato transformador. Não há mais espaço para o
          atendimento engessado.
        </p>
      </div>
    </div>
  );
}
