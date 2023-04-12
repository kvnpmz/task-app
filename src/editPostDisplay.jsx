import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Postform from "./postform";

export default function EditPostDisplay(props) {
    return (
        <>
            <Grid
                item
                xs={2}
                sx={{ backgroundColor: "#e0e0e0", height: "100%", p: "1.25rem 0.4rem 0rem", }}
            >

                <Paper sx={{height: "84vh"}}>
                    {props.selectedPost && (
                        <>
                            <Typography variant="h2" sx={{ fontSize: "1.5rem", p:"1rem", mb:"1rem" }}>
                                Edit Order
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
<Box sx={{display:"flex", justifyContent: "center"}}>
                            <Button
                                variant="contained"
sx={{ bgcolor: "primary.light", width:"10rem"}}
                                onClick={() => props.setSelectedPost(null)}
                            >
                                Cancel
                            </Button>
</Box>
                        </ >
                    )}
                </Paper>
            </Grid>
        </>
    );
}

