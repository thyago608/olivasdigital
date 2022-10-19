import styles from "./styles.module.scss";
import { MainNews } from "components/MainNews";
import { News } from "components/News";

export function Home() {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.circle} />
      </div>
      <main className={styles.container}>
        <h2 className={styles.heading}>
          Conteúdos <span>para você</span>
        </h2>
        <section className={styles.blog}>
          <header>
            <h3>Blog</h3>
          </header>
          <div className={styles.news}>
            <MainNews />
            <div className={styles.newsList}>
              <strong className={styles.title}>Outras postagens</strong>
              <News
                data={{
                  category: "customer experience",
                  title:
                    "Feedback de Clientes:transforme tudo em dados e obtenha melhores resultados",
                }}
              />
              <News
                data={{
                  category: "tecnologia",
                  title: "Chatbot cognitivo: o que é e como pode ajudar?",
                }}
              />
              <News
                data={{
                  category: "customer experience",
                  title:
                    "Atendimento ao cliente: quais as expectativas de Geração Millennials",
                }}
              />
              <News
                data={{
                  category: "customer experience",
                  title: "Open Banking: o sucesso do sistema no Brasil",
                }}
              />
              <News
                data={{
                  category: "customer experience",
                  title: "Open Banking: o sucesso do sistema no Brasil",
                }}
              />

              <button type="button" className={styles.more}>
                Ver mais
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
