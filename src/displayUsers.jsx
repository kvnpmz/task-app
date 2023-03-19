import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button'; // Import Button component from MUI library

export default function DisplayUsers() {
    const [userData, setUserData] = useState(null);

    const handleButtonClick = async () => {
    try {
        const response = await axios.get('/get_users');
        console.log('Response:', response.data); // Add console log to view response data
        setUserData(response.data);
    } catch (error) {
        console.error(error);
    }
    };

    return (
        <>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleButtonClick}
            >
                Get User Data
            </Button>
            {userData && (
                <div>
                    {userData.map(user => (
                        <div key={user.id}>
                            <p>Email: {user.email}</p>
                            <p>Username: {user.username}</p>
                        </div>
                ))}
                </div>
            )}
        </ >
    );
}

