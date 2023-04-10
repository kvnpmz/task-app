import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("/auth/login", { username, password })
            .then((response) => {
                if (response.data.success) {
                    // Login was successful
                    window.location = "/";
                } else {
                    setError(response.data.error);
                }
            })
            .catch((error) => {
                console.error(error);
                setError("An error occurred while logging in.");
            });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Log in
                </button>
            </form>
        </div>
    );
}

export default LoginForm;

