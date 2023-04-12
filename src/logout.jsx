import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

function LogoutButton() {
    const [message, setMessage] = useState(null);

    const handleLogout = async () => {
        try {
            await axios.get("/auth/logout");
            setMessage("Logged out successfully.");
            window.location.href = "/login"; // Redirect to login page
        } catch (error) {
            console.error(error);
            setMessage("An error occurred during logout.");
        }
    };

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
            >
                Logout
            </Button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default LogoutButton;

