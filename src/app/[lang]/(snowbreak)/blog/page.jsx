import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const getData = async () => {
  // FETCH DATA WITH AN API
  const res = await fetch(`${process.env.BASE_FETCH_URL}/api/blog`, {
    cache: "no-store",
  });

  if (res.status !== 200) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
