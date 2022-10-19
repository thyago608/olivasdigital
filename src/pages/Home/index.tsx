import { Emphasis } from "components/Emphasis";
import { Button } from "components/Button";
import { NewsList } from "components/NewsList";
import { news } from "mock";
import styles from "./styles.module.scss";
import { NewsLetter } from "components/NewsLetter";

export function Home() {
  const newsShort = news.slice(0, 3);

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
            <Emphasis />
            <div className={styles.newsList}>
              <strong className={styles.title}>Outras postagens</strong>
              <NewsList news={news} />
              <Button>Ver mais</Button>
            </div>
          </div>
        </section>

        <section className={styles.mainNews}>
          <header className={styles.mainNewsTitle}>
            <h3>Principais notícias</h3>
          </header>
          <div className={styles.wrapper}>
            <div className={styles.mainNewsList}>
              <NewsList variant="secundary" news={newsShort} />
              <Button variant="white">Ver mais</Button>
            </div>
            <div className={styles.right}></div>
          </div>
        </section>

        <NewsLetter />
      </main>
    </div>
  );
}
