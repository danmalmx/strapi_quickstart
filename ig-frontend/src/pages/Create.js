import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Create = () => {

  const [description, setDescription] = useState('');
  const [file, setFile] = useState(0);
  const [error, setError] = useState('');

  const { user } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!user) {
      setError('Please log in first')
      return;
    }

    if(!description) {
      setError('Please add a description')
      return;
    }

    if(!file) {
      setError('Please add an image')
      return;
    }

    const formData = new FormData();

    formData.append('data', JSON.stringify({description}));
    formData.append('files.image', file);

    try {
      const res = await fetch('http://localhost:1337/posts',  {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${user.jwt}`
        },
        body: formData,
      })
      const data = await res.json();

      console.log(data);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div className="Create">
       <h2>Create</h2>

       {error && <p>{error}</p>}
       <form onSubmit={handleSubmit}>
        <input
          placeholder="Description"
          value={description}
          onChange={(event) => {
            setError('')
            setDescription(event.target.value)
          }}
          />
        <input
          type="file"
          placeholder="Add a file"
          onChange={(event) => {
            setError('')
            setFile(event.target.files[0])
          }}

        />
        <button>Submit</button>
       </form>
    </div>
  )
}

export default Create
