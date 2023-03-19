import { useState } from 'react'; // Import useState hook from React
import axios from 'axios'; // Import Axios library for making HTTP requests
import Box from '@mui/material/Box'; // Import Box component from MUI library
import Button from '@mui/material/Button'; // Import Button component from MUI library
import Card from '@mui/material/Card'; // Import Card component from MUI library
import TextField from '@mui/material/TextField'; // Import TextField component from MUI library

export default function Form() { // Define a functional component called Form

    // Define two state variables, name and email, and their respective setter functions using the useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Define a submit handler function that will be called when the form is submitted
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        try {
            // Make a POST request to the server using Axios and pass in the name and email data in the request body
            const response = await axios.post('/add_user', {
                name,
                email,
            }, {
                // Set the 'Content-Type' header to 'application/json'
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Display a success message with the response data
            // Assume the response data has a 'message' property containing the desired string
            alert(response.data.message);
        } catch (error) {
            // If there is an error, display an error message with the error status code
            alert('Error: ' + error.response.status);
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="name"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                   Submit
                </Button>
            </form>
        </ >
    );
}
