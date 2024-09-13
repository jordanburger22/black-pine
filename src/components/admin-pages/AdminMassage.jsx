import React from 'react';
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { Box, Tabs, Tab, Typography, Grid2 } from "@mui/material";
import AdminHomeButton from './AdminHomeButton';
import EditMassageForm from './EditMassageForm';
import AddMassageForm from './AddMassageForm';

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

const AdminMassage = () => {
    const { massageStyles } = useContext(Context);
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleEditMassageSubmit = (formState) => {
        // Add your submit logic here for editing a massage style
        console.log('Edited Massage:', formState);
    };

    const handleAddMassageSubmit = (formState) => {
        // Add your submit logic here for adding a new massage style
        console.log('New Massage:', formState);
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
                <Grid2  xs={3} sx={{ borderRight: 1, borderColor: 'divider' }}>
                    {/* Vertical Tabs */}
                    <Tabs
                        orientation="vertical"
                        value={tabValue}
                        onChange={handleChange}
                        aria-label="Vertical tabs"
                        sx={{ borderRight: 1, borderColor: 'divider', color: 'white' }}
                    >
                        {massageStyles.map((style, index) => (
                            <Tab key={style._id} label={style.title} sx={{ color: 'white' }} />
                        ))}
                        <Tab label="Add New Massage" sx={{ color: 'white' }} />
                    </Tabs>
                </Grid2>

                <Grid2  xs={9} sx={{ padding: 3 }}>
                    {/* Tab Panels for each Massage Style */}
                    {massageStyles.map((style, index) => (
                        <TabPanel value={tabValue} index={index} key={style._id}>
                            <EditMassageForm
                                style={style}
                                handleSubmit={handleEditMassageSubmit}
                            />
                        </TabPanel>
                    ))}

                    {/* Add New Massage Form */}
                    <TabPanel value={tabValue} index={massageStyles.length}>
                        <AddMassageForm
                            handleSubmit={handleAddMassageSubmit}
                        />
                    </TabPanel>
                </Grid2>
            </Grid2>
        </div>
    );
};

export default AdminMassage;
