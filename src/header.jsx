// Import the necessary components and functions from React and Material-UI libraries
import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

// Create a custom styled AppBar component with a specific background color and margin

const StyledAppBar = styled(AppBar)`
    /* Customize the AppBar color here */
    background-color: #2196F3;
    /*/ Add some margin below the AppBar */
    margin-bottom: 16px; 
 `;

// Define the Header component
export default function Header() {
    return (
        // Use the custom StyledAppBar component with a static position
        <StyledAppBar position="static">
            {/* Add a Toolbar component within the AppBar */}
            <Toolbar>
                {/* Use Grid container to center the content */}
                <Grid container justifyContent="center">
                    {/* Create a Grid item that takes up the full width (12 columns) of the container */}
                    <Grid item xs={12}>
                        {/* Add a Typography component with a specific variant, component, and alignment */}
                        <Typography variant="h4" component="h1" textAlign="center">
                            {/* Provide the text content for the Typography component */}
                            My CRUD App
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </StyledAppBar>
    );
}

