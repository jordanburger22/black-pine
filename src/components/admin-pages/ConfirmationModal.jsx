import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const ConfirmationModal = ({ open, onClose, onConfirm, message }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="confirmation-modal-title"
            aria-describedby="confirmation-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    color: 'black',
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <Typography id="confirmation-modal-title" variant="h6" component="h2">
                    Confirmation
                </Typography>
                <Typography id="confirmation-modal-description" sx={{ mt: 2 }}>
                    {message}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                    <Button
                        onClick={onConfirm}
                        variant="contained"
                        sx={{ mr: 2, backgroundColor: 'red' }}
                    >
                        Confirm
                    </Button>
                    <Button
                        onClick={onClose}
                        variant="outlined"
                        color="secondary"
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                        }}
                    >
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default ConfirmationModal;
