import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

export default function DialogBox({ userId, userName, userEmail }) {
    const [open, setOpen] = useState(false);
    
    const [id, setId] = useState(userId);

    function handleOpen() {
    setOpen(true);
    }

    function handleClose() {
    setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Edit {userId}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit User</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="ID"
                            fullWidth
                            value={userId}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Username"
                            fullWidth
                            value={userName}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Email"
                            fullWidth
                            value={userEmail}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                                Save
                        </Button>
                    </DialogActions>
            </Dialog>
        </div>
    );
}

