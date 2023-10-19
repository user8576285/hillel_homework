import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, showAllPosts] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      showAllPosts(result);
    };
    handleFetch();
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      {posts.map((post) => {
        return (
          <div>
            <Link to={`${post.id}`}>{post.title}</Link>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
