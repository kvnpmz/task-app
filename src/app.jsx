import { useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material/';
import Form from './form';
import DisplayUsers from './displayUsers';

export default function App() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" component="h1">My CRUD App</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper>
                   <Form /> {/* Form for creating new items */}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
                <Paper>
                    <DisplayUsers /> {/* Table for displaying existing items */}
                </Paper>
            </Grid>
        </Grid>
    );
}
