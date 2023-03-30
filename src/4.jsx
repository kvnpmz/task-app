import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h1" align="center">React CRUD App</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper>
hello
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
hello
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="subtitle1" align="center">React CRUD App &copy; 2023</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;



















