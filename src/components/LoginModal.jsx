import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {GoogleLogin} from '@react-oauth/google'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  color:'black',
  p: 4,
};

export default function LoginModal(props) {
  const { open, handleClose } = props;

  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    // Handle the successful login response here
  };

  const handleFailure = () => {
    console.error('Login failed');
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login with Google
          </Typography>
          <GoogleLogin 
            onSuccess={handleSuccess}
            onError={handleFailure}
          />
          <Button onClick={handleClose} sx={{ mt: 2 }} variant="outlined">
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
