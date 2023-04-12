import React from 'react';
import { Button } from '@mui/material';

const Postlist = ({ posts, onEdit, onDelete }) => {

  console.log("Posts data in Postlist component:", posts);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>Author: {post.username}</p>
          <Button variant="contained" color="secondary" onClick={() => onEdit(post)}>Edit</Button>
          <Button variant="contained" color="primary" onClick={() => onDelete(post.id)}>Delete</Button>
        </li>
      ))}
    </ul>
  );
};

export default Postlist;

