import { useState } from 'react';
import axios from 'axios';

export default function Button() {
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
            <button onClick={handleButtonClick}>
                Get User Data
            </button>
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

