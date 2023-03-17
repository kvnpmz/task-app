import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './form';
import Button from './button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>
            <Form />
            <Button />
        </ >
    </React.StrictMode>
);

/*
import App from './app';
    <App />
"proxy": "http://localhost:5000",
*/
