import { useState, useEffect } from "react";
import axios from "axios";
import {
    Typography,
    Container,
    Grid,
    Paper,
    TextField,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function App() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        axios
            .get("/products")
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error));
    }, []);

    const handleAddProduct = (event) => {
        event.preventDefault();
        axios
            .post("/products", { product, quantity })
            .then((response) => {
                setProducts([...products, response.data]);
                setProduct("");
                setQuantity("");
            })
            .catch((error) => console.log(error));
    };

    const handleEditProduct = (event, id) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newProduct = formData.get("newProduct");
        const newQuantity = formData.get("newQuantity");

        axios
            .put(`/products/${id}`, { product: newProduct, quantity: newQuantity })
            .then((response) => {
                const updatedProducts = products.map((product) => {
                    if (product.id === id) {
                        return response.data;
                    }
                    return product;
                });
                setProducts(updatedProducts);
            })
            .catch((error) => console.log(error));
    };

    const handleDeleteProduct = (id) => {
        axios
            .delete(`/products/${id}`)
            .then((response) => {
                const updatedProducts = products.filter((product) => product.id !== id);
                setProducts(updatedProducts);
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
                                Add product
                            </Typography>
                            <form onSubmit={handleAddProduct}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="Product"
                                            value={product}
                                            onChange={(event) =>
                                                setProduct(event.target.value)
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="Quantity"
                                            value={quantity}
                                            onChange={(event) =>
                                                setQuantity(event.target.value)
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
                            Products list
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Edit</TableCell>
                                        <TableCell>Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {products.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell>
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Product"
                                                    name="newProduct"
                                                    defaultValue={product.product}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Quantity"
                                                    name="newQuantity"
                                                    defaultValue={
                                                        product.quantity
                                                    }
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <form
                                                    onSubmit={(event) =>
                                                        handleEditProduct(
                                                            event,
                                                            product.id
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
                                                        handleDeleteProduct(
                                                            product.id
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
