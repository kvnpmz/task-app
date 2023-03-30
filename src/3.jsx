import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // fetch all users from the Flask backend on component mount
  useEffect(() => {
    axios.get('/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  // handle form submission for creating a new user
  const handleAddUser = event => {
    event.preventDefault();
    axios.post('/users', { name, email })
      .then(response => {
        setUsers([...users, response.data]);
        setName('');
        setEmail('');
      })
      .catch(error => console.log(error));
  };

  // handle form submission for editing an existing user
  const handleEditUser = (id, newName, newEmail) => {
    axios.put(`/users/${id}`, { name: newName, email: newEmail })
      .then(response => {
        const updatedUsers = users.map(user => {
          if (user.id === id) {
            return response.data;
          }
          return user;
        });
        setUsers(updatedUsers);
      })
      .catch(error => console.log(error));
  };

  // handle click event for deleting an existing user
  const handleDeleteUser = id => {
    axios.delete(`/users/${id}`)
      .then(response => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <form onSubmit={event => {
              event.preventDefault();
              handleEditUser(user.id, event.target.newName.value, event.target.newEmail.value);
            }}>
              <input type="text" name="newName" placeholder="New name" />
              <input type="text" name="newEmail" placeholder="New email" />
              <button type="submit">Save</button>
            </form>
          </li>
        ))}
      </ul>
      <h2>Add user</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" value={name} onChange={event => setName(event.target.value)} placeholder="Name" />
        <input type="text" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;

