import { Button } from "components/Button";
import { Category } from "components/Category";
import { NewsList } from "components/NewsList";
import styles from "./styles.module.scss";

export function MainNews() {
  return (
    <div className={styles.container}>
      <div className={styles.emphasis}>
        <div className={styles.hero}>
          <img
            src="/images/girl-coding.png"
            alt="girl coding"
            title="girl coding"
          />
        </div>
        <div className={styles.heading}>
          <div>
            <Category>Tecnologia</Category>
            <time>11/11/2022</time>
          </div>
          <h4>
            Contando com a tecnologia para o treinamento de especialistas no
            atendimento
          </h4>
        </div>
        <div className={styles.content}>
          <p>
            Muito mais do que saber ouvir e atender as necessidades de um
            cliente, o Customer Experiencie visa ir além e oferecer uma
            experiência que de fato trará muito mais proximidade entre o cliente
            e a marca.
          </p>
          <p>
            As boas práticas de um atendimento já não são o que foram há poucos
            anos atrás, o mercado demanda por profissionais capazes de
            proporcionar um contato transformador. Não há mais espaço para o
            atendimento engessado.
          </p>
        </div>
      </div>
    </div>
  );
}
