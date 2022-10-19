import { Post } from "components/Post";
import { IPost } from "types/Post";
import styles from "./styles.module.scss";

interface PostListProps {
  variant?: "primary" | "secundary";
  posts: IPost[];
}

export function PostList({ variant = "primary", posts }: PostListProps) {
  return (
    <div className={styles.container}>
      {posts.map((item) => (
        <Post key={item.id} data={item} variant={variant} />
      ))}
    </div>
  );
}
