import { ButtonFilled } from "components/ButtonFilled";
import { ICase } from "types/Case";
import styles from "./styles.module.scss";

interface CaseProps {
  data: ICase;
}

export function Case({ data }: CaseProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>Imagem</div>
      <div className={styles.content}>
        <strong>{data.title}</strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          temporibus commodi corporis a debitis, tenetur cum in earum assumenda
          velit facilis iste, quasi nihil repudiandae. Illo sunt ipsa aspernatur
          eveniet.
        </p>
        <ButtonFilled variant={data.variant}>Saiba mais</ButtonFilled>
      </div>
    </div>
  );
}
