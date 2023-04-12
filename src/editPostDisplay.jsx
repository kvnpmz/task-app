import { Button, Grid, Box, Typography } from "@mui/material";
import Postform from "./postform";

export default function EditPostDisplay(props) {
    return (
        <>
            <Grid
                item
                xs={2}
                sx={{ backgroundColor: "#e0e0e0", height: "100%" }}
            >
                {props.selectedPost && (
                    <Box>
                        <Typography variant="h2" sx={{ fontSize: "2rem" }}>
                            Edit Post
                        </Typography>
                        <Postform
                            initialValues={props.selectedPost}
                            onSubmit={(updatedPost) =>
                                props.updatePost(
                                    props.selectedPost.id,
                                    updatedPost
                                )
                            }
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => props.setSelectedPost(null)}
                        >
                            Cancel
                        </Button>
                    </Box>
                )}
            </Grid>
        </>
    );
}

