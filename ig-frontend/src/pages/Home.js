import React, { useState, useEffect } from 'react'
import Post from '../components/Post'


const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('http://localhost:1337/posts');
      const data = await res.json();
      setPosts(data)
    }
    getPosts();

  }, [])

  return (
    <div className="Home">
      {posts.map(post => (
        <Post
          likes={post.likes}
          description={post.description}
          url={post.image && post.image.url}
        />
      ))}
    </div>
  );
}

export default Home
