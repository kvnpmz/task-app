import React from 'react';

const Postlist = ({ posts, onEdit, onDelete }) => {

  console.log("Posts data in Postlist component:", posts);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>Author: {post.username}</p>
          <button onClick={() => onEdit(post)}>Edit</button>
          <button onClick={() => onDelete(post.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Postlist;

