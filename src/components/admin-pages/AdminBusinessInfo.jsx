import React, { useContext, useEffect } from 'react';
import { Context } from "../../context/Context";
import { Box, TextField, Button, Typography } from "@mui/material";
import AdminHomeButton from './AdminHomeButton';
import { useForm } from '../../hooks/useForm'; // Adjust the import path as needed

const AdminBusinessInfo = () => {
    const { businessInfo, updateBusinessInfo } = useContext(Context);

    // Initialize form with businessInfo from context
    const { formState, handleChange, handleSubmit, setFormState } = useForm(
        {
            businessName: '',
            address: '',
            phoneNumber: '',
            name: '',
            businessFacebookUrl: '',
            personalFacebookUrl: '',
            instagramUrl: '',
            subHeader: '',
        },
        () => {
            // Call the context function to update the business information
            updateBusinessInfo(formState);
        },
        true
    );

    useEffect(() => {
        if (businessInfo) {
            // Update form state when businessInfo changes
            setFormState(businessInfo);
        }
    }, [businessInfo]);

    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: 'black',
                marginBottom: '5vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3,
                mt: 4,
            }}
        >
            <Box
                sx={{
                    boxShadow: 24,
                    p: 4,
                    borderRadius: '10px',
                    bgcolor: 'background.paper',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '70%',
                    width: '100%',
                }}
            >
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Business Name"
                        name="businessName"
                        value={formState.businessName}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Address"
                        name="address"
                        value={formState.address}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Phone Number"
                        name="phoneNumber"
                        value={formState.phoneNumber}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Owner's Name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Business Facebook URL"
                        name="businessFacebookUrl"
                        value={formState.businessFacebookUrl}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Personal Facebook URL"
                        name="personalFacebookUrl"
                        value={formState.personalFacebookUrl}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Instagram URL"
                        name="instagramUrl"
                        value={formState.instagramUrl}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Sub Header"
                        name="subHeader"
                        value={formState.subHeader}
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
            </Box>
        </Box>
    );
};

export default AdminBusinessInfo;
