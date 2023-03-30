import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import {
    Grid,
    Container,
    Paper,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // fetch all users from the Flask backend on component mount
    useEffect(() => {
        axios
            .get("/users")
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error));
    }, []);

    // handle form submission for creating a new user
    const handleAddUser = (event) => {
        event.preventDefault();
        axios
            .post("/users", { name, email })
            .then((response) => {
                setUsers([...users, response.data]);
                setName("");
                setEmail("");
            })
            .catch((error) => console.log(error));
    };

    // handle form submission for editing an existing user
    const handleEditUser = (event, id) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newName = formData.get("newName");
        const newEmail = formData.get("newEmail");

        axios
            .put(`/users/${id}`, { name: newName, email: newEmail })
            .then((response) => {
                const updatedUsers = users.map((user) => {
                    if (user.id === id) {
                        return response.data;
                    }
                    return user;
                });
                setUsers(updatedUsers);
            })
            .catch((error) => console.log(error));
    };

    // handle click event for deleting an existing user
    const handleDeleteUser = (id) => {
        axios
            .delete(`/users/${id}`)
            .then((response) => {
                const updatedUsers = users.filter((user) => user.id !== id);
                setUsers(updatedUsers);
            })
            .catch((error) => console.log(error));
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography variant="h1" align="center">
                                My CRUD App
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper>
                            <Typography variant="h2" align="center">
                                Add user
                            </Typography>
                            <form onSubmit={handleAddUser}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="Name"
                                            value={name}
                                            onChange={(event) =>
                                                setName(event.target.value)
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="Email"
                                            value={email}
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            fullWidth
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Add
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper>
                            <Typography variant="h2" align="center">
                                Users list
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Edit</TableCell>
                                            <TableCell>Delete</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {users.map((user) => (
                                            <TableRow key={user.id}>
                                                <TableCell>
                                                    <TextField
                                                        fullWidth
                                                        variant="outlined"
                                                        label="Name"
                                                        name="newName"
                                                        defaultValue={user.name}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        fullWidth
                                                        variant="outlined"
                                                        label="Email"
                                                        name="newEmail"
                                                        defaultValue={
                                                            user.email
                                                        }
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <form
                                                        onSubmit={(event) =>
                                                            handleEditUser(
                                                                event,
                                                                user.id
                                                            )
                                                        }
                                                    >
                                                        <Grid
                                                            container
                                                            spacing={2}
                                                            alignItems="center"
                                                        >
                                                            <Grid item xs={12}>
                                                                <Button
                                                                    type="submit"
                                                                    variant="contained"
                                                                    color="primary"
                                                                >
                                                                    Save
                                                                </Button>
                                                            </Grid>
                                                        </Grid>
                                                    </form>
                                                </TableCell>
                                                <TableCell>
                                                    <Button
                                                        onClick={() =>
                                                            handleDeleteUser(
                                                                user.id
                                                            )
                                                        }
                                                        variant="contained"
                                                        color="secondary"
                                                    >
                                                        Delete
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography variant="subtitle1" align="center">
                                Kevin's React App &copy; 2023
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
