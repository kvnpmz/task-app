import { Grid, Paper, Typography } from "@mui/material";
import Postlist from "./postlist";

export default function PostlistDisplay(props) {
    return (
        <>
            <Grid
                item
                xs={8}
                sx={{
                    backgroundColor: "#e0e0e0",
                    height: "100%",
                    overflow: "auto",
                    p: "1.25rem 0.25rem 0rem",
                }}
            >
                    <Typography variant="h2" sx={{ fontSize: "1.5rem", p:"0.4rem" }}>
                        Orders List
                    </Typography>
                    {props.showPostList && (
                        <Postlist
                            posts={props.posts}
                            onEdit={props.setSelectedPost}
                            onDelete={props.deletePost}
                        />
                    )}
            </Grid>
        </>
    );
}

