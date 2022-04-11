import { useSelector } from "react-redux";
import "./post.css";
const Posts = () => {
  const post = useSelector((state) => state.post.posts);
  const tags = ["None", "Quotes", "Mood", "Shitpost", "Tech"];
  return (
    <>
      <section className="post-container">
        {post.slice(1).map((post, index) => (
          <div className="posts" key={index}>
            <p className="posts-title">{post.title}</p>
            <p className={`posts-tags-${tags[post.tags]} posts-tags`}>
              {tags[post.tags]}
            </p>
            <p className="posts-description">{post.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Posts;
