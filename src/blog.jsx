import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import Header from "./header";
import PostlistDisplay from "./postlistDisplay";
import theme from "./theme";
import CreatePostDisplay from "./createPostDisplay";
import EditPostDisplay from "./editPostDisplay";

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [showPostList, setShowPostList] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get("/posts");
            console.log("Response data:", response.data);
            if (Array.isArray(response.data)) {
                setPosts(response.data);
                setShowPostList(true);
            } else {
                console.error("Error: Response data is not an array");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const createNewPost = async (post) => {
        try {
            await axios.post("/create", post);
            fetchPosts();
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    const updatePost = async (id, post) => {
        try {
            await axios.put(`/${id}/update`, post);
            fetchPosts();
            setSelectedPost(null);
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    const deletePost = async (id) => {
        try {
            await axios.delete(`/${id}/delete`);
            fetchPosts();
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid
                container
                direction="column"
                sx={{ height: "100vh", padding: 0 }}
            >
                <Header />
                <Grid
                    item
                    container
                    sx={{ flexGrow: 1, height: "calc(100vh - 64px)" }}
                >
                    <CreatePostDisplay createNewPost={createNewPost} />
                    <PostlistDisplay
                        posts={posts}
                        setSelectedPost={setSelectedPost}
                        deletePost={deletePost}
                        showPostList={showPostList}
                    />

                    <EditPostDisplay
                        updatePost={updatePost}
                        setSelectedPost={setSelectedPost}
                        selectedPost={selectedPost}
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

