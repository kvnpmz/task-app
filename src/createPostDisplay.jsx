import { Grid, Paper, Typography } from "@mui/material";
import Postform from "./postform";

export default function CreatePostDisplay(props) {
    return (
        <>
            <Grid
                item
                xs={2}
                sx={{ backgroundColor: "#e0e0e0", height: "100%"}}
            >
                <Paper
sx={{ height: "84vh", m:"1.25rem 0.4rem"}}>

                    <Typography variant="h2" sx={{ fontSize: "1.5rem", p:"1rem", mb:"1rem" }}>
                        Create Orders
                    </Typography>
                    <Postform onSubmit={props.createNewPost} />
                </Paper>
            </Grid>
        </>
    );
}

