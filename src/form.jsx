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
            {/* This is a form that will call the handleSubmit function when submitted */}
            <form onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* This is a text field input for the user's name */}
                    <TextField
                        id="name"
                        label="Name"
                        value={name} // This is a value prop that sets the current value of the text field to the `name` variable
                        onChange={(e) => setName(e.target.value)} // This is an onChange prop that updates the `name` variable whenever the user types into the text field
                        required // This is a required prop that indicates that the user must enter a value before submitting the form
                        fullWidth // This is a fullWidth prop that makes the text field span the full width of its container
                        margin="normal" // This is a margin prop that sets the margin around the text field to "normal"
                        sx={{ mb: 2 }}
                    />
                    {/* This is a text field input for the user's email */}
                    <TextField
                        id="email"
                        label="Email"
                        type="email" // This is a type prop that sets the input type to "email"
                        value={email} // This is a value prop that sets the current value of the text field to the `email` variable
                        onChange={(e) => setEmail(e.target.value)} // This is an onChange prop that updates the `email` variable whenever the user types into the text field
                        required // This is a required prop that indicates that the user must enter a value before submitting the form
                        fullWidth // This is a fullWidth prop that makes the text field span the full width of its container
                        margin="normal" // This is a margin prop that sets the margin around the text field to "normal"
                        sx={{ mb: 2 }}
                    />
                    {/* This is a submit button for the form */}
                    <Button
                        type="submit" // This is a type prop that sets the button type to "submit"
                        variant="contained" // This is a variant prop that sets the button style to "contained"
                        color="primary" // This is a color prop that sets the button color to "primary"
                        fullWidth
                        sx={{ alignSelf: 'flex-end' }}
                    >
                    {/* This is the text displayed on the button */}
                        Submit
                </Button>
            </form>
        </>
    );
}

