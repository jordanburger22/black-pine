import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Tabs, Tab, Box, Typography, Grid2 } from '@mui/material';

const AdminLayout = () => {
    const navigate = useNavigate();
    const hanldeNavigate = (path) => {
        navigate(path);
    };

    return (
        <Grid2
            container
            spacing={2}
            sx={{ justifyContent: 'center', marginTop: '5vh', marginBottom: '15vh', width: '100%', backgroundColor: 'black' }}
        >
            <Grid2
                item
                size={{ xs: 12, sm: 8, md: 6, lg: 12 }}
                sx={{ display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: 'black' }}
            >
                <Box
                    sx={{ boxShadow: 24, p: 4, borderRadius: '10px', bgcolor: 'black', color: 'white' }}
                >
                    <Tabs
                        value={window.location.pathname.split('/').pop()}
                        indicatorColor='primary'
                        textColor="primary"
                        variant="fullWidth"
                        sx={{
                            color: 'white',
                        }}
                    >
                        <Tab
                            label="Services"
                            value="services"
                            onClick={() => hanldeNavigate('services')}
                            sx={{
                                color: 'white',
                            }}
                        />
                        <Tab
                            label="Massage Styles"
                            value="massage"
                            onClick={() => hanldeNavigate('massage')}
                            sx={{
                                color: 'white',
                            }}
                        />
                        <Tab
                            label="Business Info"
                            value="business-info"
                            onClick={() => hanldeNavigate('business-info')}
                            sx={{
                                color: 'white',
                            }}
                        />
                        {/* <Tab label="Orders" value="orders" onClick={() => hanldeNavigate('orders')} /> */}
                    </Tabs>
                    <Outlet /> {/* This will render the matched child route component */}
                </Box>
            </Grid2>
        </Grid2>
    );
};

export default AdminLayout;
