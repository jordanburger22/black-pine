import React, { useState } from 'react';
import { useContext } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useForm } from '../../hooks/useForm'; // Adjust the import path as needed
import { Context } from '../../context/Context';
import ConfirmationModal from './ConfirmationModal'; // Adjust the import path as needed

const EditMassageForm = ({ style }) => {
    const { updateMassageStyle, deleteMassageStyle } = useContext(Context);
    const [openModal, setOpenModal] = useState(false);

    const sendUpdate = () => {
        updateMassageStyle(style._id, formState);
    };

    const { formState, handleChange, handleSubmit } = useForm(
        {
            title: style.title || "",
            description: style.description || "",
            price: style.price || "",
            image: style.image || "",
        },
        sendUpdate,
        true
    );

    const handleDelete = () => {
        deleteMassageStyle(style._id);
        setOpenModal(false);
    };

    return (
        <Box
            sx={{
                boxShadow: 24,
                p: 4,
                borderRadius: '10px',
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant="h6" gutterBottom>
                Edit {formState.title}
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Massage Title"
                    name="title"
                    value={formState.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    name="description"
                    value={formState.description}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                />
                <TextField
                    label="Price"
                    name="price"
                    value={formState.price}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Image URL"
                    name="image"
                    value={formState.image}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="dark"
                    fullWidth
                    sx={{ mt: 2, bgcolor: 'black' }}
                >
                    Save Changes
                </Button>
            </form>
            <Button
                variant="contained"
                color="dark"
                sx={{ mt: 2, backgroundColor: 'black' }}
                fullWidth
                onClick={() => setOpenModal(true)}
            >
                Delete Massage
            </Button>

            {/* Confirmation Modal */}
            <ConfirmationModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                onConfirm={handleDelete}
                message={`Are you sure you want to delete the massage style "${formState.title}"?`}
            />
        </Box>
    );
};

export default EditMassageForm;
