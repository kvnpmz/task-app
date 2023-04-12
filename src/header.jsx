import { Grid, AppBar, Toolbar, Typography } from "@mui/material";
import Logout from "./logout";

export default function Header() {
    return (
        <>
            <Grid item >
                <AppBar position="static" >

                    <Toolbar sx={{ justifyContent: "space-between", boxShadow: '0px 4px 12px 0 rgba(0, 0, 0, 0.5)' }}>
                        <Typography variant="h1" sx={{ fontSize: "2em" }}>
                            OrderMate
                        </Typography>
                        <Logout />
                    </Toolbar>
                </AppBar>
            </Grid>
        </>
    );
}

