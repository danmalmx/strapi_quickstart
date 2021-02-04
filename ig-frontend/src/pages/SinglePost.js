import React, { useState, useEffect } from 'react'
import Post from '../components/Post'

const SinglePost = ({ match, history }) => {
  const { id } = match.params;

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:1337/posts/${id}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    history.push('/')
  }

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`http://localhost:1337/posts/${id}`);
      const data = await res.json()
      console.log(data);
      setPost(data);
      setLoading(false);
    }
    fetchPost();
  }, [])
  return (
    <div>
      { loading &&
        <p>Loading...</p>
      }
      { !loading &&
        <>
          {post.id &&
          <>
            <Post
              description={post.description}
              url={post.image && post.image.url}
              likes={post.likes}
            />
            <button onClick={handleDelete}>Delete this post</button>
            </>
          }
          {!post &&
            <p>404 not found</p>
          }
        </>
      }
    </div>
  )
}

export default SinglePost
