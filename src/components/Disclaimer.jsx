import React from 'react';
import { Box, Typography } from '@mui/material';

const Disclaimer = () => {
    return (
        <Box
            sx={{
                bgcolor: 'black',
                color: 'white',
                p: 2,
                bottom: 0,
                width: '100%',
                paddingLeft: '15vw',
                paddingRight: '15vw',
                textAlign: 'center',
                zIndex: 1000,
            }}
        >
            <Typography variant="body2">
                Disclaimer: The information and services provided, including massage, reiki, and tarot readings, are for informational and relaxation purposes only. They do not constitute medical, legal, or psychological advice. I do not provide diagnoses or treatment for physical or mental health conditions. Always consult with a qualified healthcare provider or professional for medical, legal, or health-related concerns.
            </Typography>
        </Box>
    );
};

export default Disclaimer;
