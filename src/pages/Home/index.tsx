import { Emphasis } from "components/Emphasis";
import { Button } from "components/Button";
import { PostList } from "components/PostList";
import { posts } from "mock";
import styles from "./styles.module.scss";
import { NewsLetter } from "components/NewsLetter";
import { Case } from "components/Case";

export function Home() {
  const postsShort = posts.slice(0, 3);

  const SectionBlog = (
    <section className={styles.blog}>
      <header>
        <h3>Blog</h3>
      </header>
      <div className={styles.posts}>
        <Emphasis />
        <div className={styles.postsList}>
          <strong className={styles.title}>Outras postagens</strong>
          <PostList posts={posts} />
          <Button>Ver mais</Button>
        </div>
      </div>
    </section>
  );

  const SectionMainNews = (
    <section className={styles.mainNews}>
      <header className={styles.mainNewsTitle}>
        <h3>Principais notícias</h3>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.mainNewsList}>
          <PostList variant="secundary" posts={postsShort} />
          <Button variant="white">Ver mais</Button>
        </div>
        <div className={styles.right}></div>
      </div>
    </section>
  );

  const SectionCases = (
    <section className={styles.cases}>
      <header className={styles.casesTitle}>
        <h3>Cases</h3>
      </header>
      <div className={styles.casesList}>
        <Case />
        <Case />
        <Case />
        <Case />
      </div>
    </section>
  );

  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.circle} />
      </div>
      <main className={styles.container}>
        <h2 className={styles.heading}>
          Conteúdos <span>para você</span>
        </h2>
        {SectionBlog}
        {SectionMainNews}
        {SectionCases}
        <NewsLetter />
      </main>
    </div>
  );
}
