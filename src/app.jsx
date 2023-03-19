// Importing the `useState` hook from the `react` module
import { useState } from 'react';
// Importing the `Grid`, `Paper`, and `Typography` components from the `@mui/material` module
import { Grid, Paper, Typography } from '@mui/material/';
// Importing the `Form` component from a local file named `form.jsx`
import Form from './form';
// Importing the `DisplayUsers` component from a local file named `displayUsers.jsx`
import DisplayUsers from './displayUsers';
// Importing the `Header` component from a local file named `header.jsx`
import Header from './header';

// Defining the `App` component as the default export of the module
export default function App() {
    // The `App` component returns a `Grid` component with some child components
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ p: 2, m: 1, backgroundColor: '#F5F5F5' }}>
                    <Form /> {/* A `Form` component for creating new items */}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
                <Paper sx={{  p: 2, m: 1, height: '300px', backgroundColor: '#1E3440' }}>
                    <DisplayUsers /> {/* A `DisplayUsers` component that displays existing items */}
                </Paper>
            </Grid>
        </Grid>
    );
}

