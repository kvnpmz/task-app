import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

export default function Form() {

  return (
    <>
        <Card
        sx={{
            boxShadow: '0px 4px 8px rgba(38, 38, 38, 0.2)',
            borderRadius: '8px',
            maxWidth: '350px',
            padding: '20px',
            margin: 'auto',
        }}
        >
            <Box>
                <Button variant='contained' >
                    Display Tasks
                </Button>
            </Box>
        </Card>
    </>
    );
}
/*
    function handleSubmit(event) {
        event.preventDefault();
        
        const url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
*/
