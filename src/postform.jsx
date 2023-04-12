import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

export default function Postform({ onSubmit, initialValues }) {
  const [title, setTitle] = useState(initialValues.title || '');
  const [body, setBody] = useState(initialValues.body || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
  };

  return (
    <form onSubmit={handleSubmit}>
<Box
sx={{ m:"1rem"}}
>
        <TextField
          label="Item"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
variant="filled"
        />
</Box><Box
sx={{ m:"1rem"}}
>

        <TextField
          label="Status"
          multiline
          value={body}
variant="filled"
          onChange={(e) => setBody(e.target.value)}
        />
</Box>
<Box sx={{display:"flex", justifyContent: "center" }}>
      <Button type="submit" variant="contained" sx={{bgcolor: "primary.dark", mb:"1rem", width: "10rem"}}>
        {initialValues.id ? 'Update' : 'Create'} Order
      </Button>
</Box>
    </form>
  );
};

Postform.defaultProps = {
  initialValues: {},
};

