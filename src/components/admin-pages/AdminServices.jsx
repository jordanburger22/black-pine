import * as React from 'react';
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { Box, Tabs, Tab, Typography, Grid2 } from "@mui/material";
import AdminHomeButton from './AdminHomeButton';
import EditServiceForm from './EditServiceForm';
import AddServiceForm from './AddServiceForm';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const AdminServices = () => {
    const { services } = useContext(Context);
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleEditServiceSubmit = (formState) => {
        // Add your submit logic here for editing a service
        console.log('Edited Service:', formState);
    };

    const handleAddServiceSubmit = (formState) => {
        // Add your submit logic here for adding a new service
        console.log('New Service:', formState);
    };

    return (
        <div className='admin-header'>
            <Grid2 container sx={{
                height: '100%',
                bgcolor: 'black',
                mt: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid2 xs={3} sx={{ borderRight: 1, borderColor: 'divider' }}>
                    {/* Vertical Tabs */}
                    <Tabs
                        orientation="vertical"
                        value={tabValue}
                        onChange={handleChange}
                        aria-label="Vertical tabs"
                        sx={{ borderRight: 1, borderColor: 'divider', color: 'white' }}
                    >
                        {services.map((service, index) => (
                            <Tab key={service._id} label={service.title} sx={{ color: 'white' }} />
                        ))}
                        <Tab label="Add New Service" sx={{ color: 'white' }} />
                    </Tabs>
                </Grid2>

                <Grid2  xs={9} sx={{ padding: 3 }}>
                    {/* Tab Panels for each Service */}
                    {services.map((service, index) => (
                        <TabPanel value={tabValue} index={index} key={service._id}>
                            <EditServiceForm
                                service={service}
                                handleSubmit={handleEditServiceSubmit}
                            />
                        </TabPanel>
                    ))}

                    {/* Add New Service Form */}
                    <TabPanel value={tabValue} index={services.length}>
                        <AddServiceForm
                            handleSubmit={handleAddServiceSubmit}
                        />
                    </TabPanel>
                </Grid2>
            </Grid2>
        </div>
    );
};

export default AdminServices;
