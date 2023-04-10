import React from "react";
import ReactDOM from "react-dom/client";
import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/register",
        element: <RegisterForm />,
    },
    {
        path: "/login",
        element: <LoginForm />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

/*
"proxy": "http://localhost:5000",
*/

