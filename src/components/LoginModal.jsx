import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GoogleLogin } from '@react-oauth/google';
import { Context } from '../context/Context'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  color: 'black',
  p: 4,
};

export default function LoginModal(props) {
  const { open, handleClose } = props;
  const { googleLogin } = useContext(Context); // Use context to handle Google login

  const handleSuccess = async(response) => {
    const { credential } = response;
    if (credential) {
      await googleLogin(credential); // Call the context method to handle login
      handleClose(); // Close the modal after successful login
    } else {
      console.error('Google login failed: no credential received');
    }
  };

  const handleFailure = () => {
    console.error('Google login failed');
  };

  return (
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
  );
}
