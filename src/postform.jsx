import React, { useState } from 'react';

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
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Body</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <button type="submit">{initialValues.id ? 'Update' : 'Create'} Post</button>
    </form>
  );
};

Postform.defaultProps = {
  initialValues: {},
};

