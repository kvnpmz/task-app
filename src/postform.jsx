import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function Postform({ onSubmit, initialValues }) {
  const [title, setTitle] = useState(initialValues.title || '');
  const [body, setBody] = useState(initialValues.body || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Body"
          multiline
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        {initialValues.id ? 'Update' : 'Create'} Post
      </Button>
    </form>
  );
};

Postform.defaultProps = {
  initialValues: {},
};

