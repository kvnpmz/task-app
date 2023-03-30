// Import the useState hook from the React library
import { useState } from 'react';

// Import the axios library for making HTTP requests
import axios from 'axios';

// Import UI components from the Material-UI library
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DialogBox from './dialogBox';
// Define the DisplayUsers component as the default export
export default function DisplayUsers() {

    // Define a state variable for storing user data
    const [userData, setUserData] = useState(null);
    // initialize showTable to false
    const [showTable, setShowTable] = useState(false);
    // initialize editingId to null
    const [editingId, setEditingId] = useState(null);

    // Define a function to handle button click events
    const handleButtonClick = async () => {
        // toggle showTable when the button is clicked
        setShowTable((prevShowTable) => !prevShowTable);
        if (!showTable) {
            // only fetch user data if showTable was false before toggling
            try {
                // Make a GET request to the '/get_users' endpoint
                const response = await axios.get('/get_users');
                // Log the response data to the console
                console.log('Response:', response.data);
                // Update the user data state variable with the response data
                setUserData(response.data);
            }
            catch (error) {
                // Log any errors to the console
                console.error(error);
            }
            }
    };
    //Define a function to handle edit button click 
    const handleEdit = (id) => {
        setEditingId(id);
        console.log(editingId);
    }


      
    // Render the UI elements for the DisplayUsers component
    return (
        <>
            {/* Render a button with an onClick handler */}
            <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleButtonClick}
                fullWidth
                sx={{ marginBottom: '20px' }}
            >
                {showTable ? 'Hide User Data' : 'Get User Data'}
            </Button>

            {/* Render the table only if showTable is true */}
            {showTable && userData && (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Username</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Map over the user data and render a row for each user */}
                            {userData.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>
                                        <DialogBox
                                            userId={user.id}
                                            userName={user.username}
                                            userEmail={user.email} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </>
    );
}
