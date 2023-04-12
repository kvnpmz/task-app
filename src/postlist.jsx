import React from 'react';
import { Button, Box, Grid, Paper, Typography } from "@mui/material";

const Postlist = ({ posts, onEdit, onDelete }) => {

  console.log("Posts data in Postlist component:", posts);
  return (
<>
      {posts.map((post) => (
<Box sx={{m: "0.5rem"}} key={post.id}>

<Paper sx={{width: "100%", borderRadius: "1rem"}} elevation={3}>
<Box sx={{ justifyContent: "space-evenly", p: "1rem"}}>
          <Typography variant="h2" sx={{fontSize:"1.3rem"}}>{post.title}</Typography>
<br />
          <Typography variant="p">{post.body}</Typography>
<br />
          <Typography variant="p">User: {post.username}</Typography>
<br />
<br />
          <Button sx={{bgcolor: "primary.light", mr:"1rem"}}variant="contained" onClick={() => onEdit(post)}>Edit</Button>
          <Button variant="contained" sx={{bgcolor: "primary.dark"}} onClick={() => onDelete(post.id)}>Delete</Button>
</Box>
      </Paper>
</Box>
      ))}
</ >
  );
};

export default Postlist;

