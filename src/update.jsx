import { useState } from 'react';  // import the useState hook from React
import axios from 'axios';  // import the axios library for making HTTP requests

export default function User({ id, name, email, onUpdate, onDelete }) {
    // define a functional component called User, which takes props including
    // an id, name, email, and callback functions for handling updates and deletions

    const [editing, setEditing] = useState(false);  // initialize a state variable called "editing" to false
    const [formData, setFormData] = useState({ name, email });  // initialize a state variable called "formData" to an object with properties "name" and "email"

    const handleInputChange = event => {  // define a function called handleInputChange, which takes an event object as a parameter
        const { name, value } = event.target;  // destructure the name and value properties from the event's target (an input element)
        setFormData({ ...formData, [name]: value });  // update the formData state variable to include the new name/value pair using the spread operator and bracket notation
    };

    const handleUpdate = async () => {  // define a function called handleUpdate, which is an async function
        try {
            const response = await axios.put(`/update_user/${id}`, formData);  // make a PUT request to update the user with the given id and the current formData
            onUpdate(response.data);  // call the onUpdate callback function with the updated user data
            setEditing(false);  // set the "editing" state variable to false to exit edit mode
        } catch (error) {
            console.error(error);  // log any errors to the console
        }
    };

    const handleDelete = async () => {  // define a function called handleDelete, which is an async function
        try {
            const response = await axios.delete(`/delete_user/${id}`);  // make a DELETE request to delete the user with the given id
            onDelete(response.data);  // call the onDelete callback function with the deleted user data
        } catch (error) {
            console.error(error);  // log any errors to the console
        }
    };

    if (editing) {  // if "editing" is true, render an edit form
        return (
            <tr>
                <td>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </td>
                <td>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </td>
                <td>
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                </td>
            </tr>
        );
    }

    // if "editing" is false, render a table row with the user's name, email, and buttons for editing and deleting
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <button onClick={() => setEditing(true)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    );
}
