import React, { useState, useEffect } from 'react'
import './App.css';

import Post from './components/Post'

const mockPosts = [
  {
    likes: 10,
    description: 'Just plain old me. Well, not just!!',
    image: {
      url: '/uploads/daniel_malmgren_OLA_7478_a6d556674e.jpg',
    }
  },
  {
    likes: 30,
    description: 'Second post',
    image: {
      url: '/uploads/daniel_malmgren_OLA_7478_a6d556674e.jpg',
    }
  },
]


function App() {

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
    <div className="App">
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

export default App;
