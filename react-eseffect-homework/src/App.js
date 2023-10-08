import { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

    const fetchData1 = async () => {
      try {
        const response1 = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response1.ok) {
          throw new Error("Failed to fetch data");
        }
        const data1 = await response1.json();
        setPosts(data1);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData1();

    const fetchData2 = async () => {
      try {
        const response2 = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        if (!response2.ok) {
          throw new Error("Failed to fetch data");
        }
        const data1 = await response2.json();
        setAlbums(data1);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData2();
  }, []);

  return (
    <div>
      <header>Users</header>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>

      <div>
      <header>Posts</header>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>

      <div>
      <header>Albums</header>
        <ul>
          {albums.map((album) => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
