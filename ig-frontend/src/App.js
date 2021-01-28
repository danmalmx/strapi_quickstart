import './App.css';

import Post from './components/Post'

const posts = [
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
