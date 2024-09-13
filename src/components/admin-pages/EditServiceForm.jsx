import React, { useState } from 'react';
import { useContext } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useForm } from '../../hooks/useForm'; 
import { Context } from '../../context/Context';
import ConfirmationModal from './ConfirmationModal'; 

const EditServiceForm = ({ service }) => {
    const { updateService, deleteService } = useContext(Context);
    const [openModal, setOpenModal] = useState(false);

    const { formState, handleChange, handleSubmit } = useForm(
        {
            title: service.title,
            subTitle: service.subTitle,
            description: service.description,
            price: service.price,
            serviceImg: service.serviceImg,
        },
        () => updateService(service._id, formState),
        true
    );

    const handleDelete = () => {
        deleteService(service._id);
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
                    label="Service Name"
                    name="title"
                    value={formState.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Service Sub Header"
                    name="subTitle"
                    value={formState.subTitle}
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
                    label="Service Image"
                    name="serviceImg"
                    value={formState.serviceImg}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    multiline
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
                Delete Service
            </Button>

            {/* Confirmation Modal */}
            <ConfirmationModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                onConfirm={handleDelete}
                message={`Are you sure you want to delete the service "${formState.title}"?`}
            />
        </Box>
    );
};

export default EditServiceForm;
