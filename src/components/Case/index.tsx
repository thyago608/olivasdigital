import { ButtonFilled } from "components/ButtonFilled";
import styles from "./styles.module.scss";

export function Case() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>Imagem</div>
      <div className={styles.content}>
        <strong>Uma decáda de história em governador valadares</strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          temporibus commodi corporis a debitis, tenetur cum in earum assumenda
          velit facilis iste, quasi nihil repudiandae. Illo sunt ipsa aspernatur
          eveniet.
        </p>
        <ButtonFilled>Saiba mais</ButtonFilled>
      </div>
    </div>
  );
}
