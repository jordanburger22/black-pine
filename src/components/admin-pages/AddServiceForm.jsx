import React, { useContext } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useForm } from '../../hooks/useForm'; // Adjust the import path as needed
import { Context } from '../../context/Context';

const AddServiceForm = () => {

    const {addService} = useContext(Context)

    const { formState, handleChange, handleSubmit } = useForm(
        {
            title: '',
            subTitle: '',
            description: '',
            price: '',
            serviceImg: '',
        },
        () => {
            addService(formState)
        }
        
    );

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
                Add New Service
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
                    Add Service
                </Button>
            </form>
        </Box>
    );
};

export default AddServiceForm;
