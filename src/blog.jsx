import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Postform from './postform';
import Postlist from './postlist';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPostList, setShowPostList] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/posts');
      console.log("Response data:", response.data); // Add this line to log the response data
      if (Array.isArray(response.data)) {
        setPosts(response.data);
        setShowPostList(true); // Set showPostList to true once the data is fetched
      } else {
        console.error('Error: Response data is not an array');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createPost = async (post) => {
    try {
      await axios.post('/create', post); // Update this line
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const updatePost = async (id, post) => {
    try {
      await axios.put(`/${id}/update`, post); // Update this line
      fetchPosts();
      setSelectedPost(null);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`/${id}/delete`); // Update this line
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <Postform onSubmit={createPost} />
      {showPostList && (
        <Postlist posts={posts} onEdit={setSelectedPost} onDelete={deletePost} />
      )}
      {selectedPost && (
        <div>
          <h2>Edit Post</h2>
          <Postform
            initialValues={selectedPost}
            onSubmit={(updatedPost) => updatePost(selectedPost.id, updatedPost)}
          />
          <button onClick={() => setSelectedPost(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Blog;

