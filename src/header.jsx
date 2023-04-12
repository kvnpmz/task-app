import { Grid, AppBar, Toolbar, Typography } from "@mui/material";
import Logout from "./logout";

export default function Header() {
    return (
        <>
            <Grid item>
                <AppBar position="static">
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <Typography variant="h1" sx={{ fontSize: "2em" }}>
                            Blog Posts
                        </Typography>
                        <Logout />
                    </Toolbar>
                </AppBar>
            </Grid>
        </>
    );
}

