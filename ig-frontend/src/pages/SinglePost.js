import React, { useState, useEffect, useContext } from 'react'
import Post from '../components/Post'
import { UserCntext, UserContext} from '../context/UserContext'

const SinglePost = ({ match, history }) => {
  const { id } = match.params;

  const {user, setUser} = useContext(UserContext)
  console.log('user', user);

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState('');

  const fetchPost = async () => {
    const res = await fetch(`http://localhost:1337/posts/${id}`);
    const data = await res.json()
    console.log(data);
    setPost(data);
    setDescription(data.description)
    setLoading(false);
  }

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:1337/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.jwt}`
      }
    });
    const data = await res.json();
    history.push('/')
  }

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch(`http://localhost:1337/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.jwt}`
      },
      body: JSON.stringify({
        description,
      })
    })

    const data = await res.json();
    console.log('handleEditSubmit', data);
    fetchPost();
  }
  useEffect(() => {
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
            {user &&
              <>
                <button onClick={handleDelete}>Delete this post</button>
                <button onClick={() => setEdit(true)}>Edit this post</button>
                {edit &&
                  <form onSubmit={handleEditSubmit}>
                    <input
                      value={description}
                      placeholder="New description"
                      onChange={(event) => setDescription(event.target.value)}
                    />
                    <button>Confirm</button>
                  </form>
                }
              </>

            }
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
