import { Grid, Typography } from "@mui/material";
import Postlist from "./postlist";

export default function PostlistDisplay(props) {
    return (
        <>
            <Grid
                item
                xs={8}
                sx={{
                    backgroundColor: "#f5f5f5",
                    height: "100%",
                    overflow: "auto",
                }}
            >
                <Typography variant="h2" sx={{ fontSize: "2rem" }}>
                    List Posts
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

