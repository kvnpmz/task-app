import { Grid, Typography } from "@mui/material";
import Postform from "./postform";

export default function CreatePostDisplay(props) {
    return (
        <>
            <Grid
                item
                xs={2}
                sx={{ backgroundColor: "#e0e0e0", height: "100%" }}
            >
                <Typography variant="h2" sx={{ fontSize: "2rem" }}>
                    Create Posts
                </Typography>
                <Postform onSubmit={props.createNewPost} />
            </Grid>
        </>
    );
}

