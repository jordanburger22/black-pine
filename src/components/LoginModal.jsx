import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GoogleLogin } from '@react-oauth/google';
import { Context } from '../context/Context';
import TextField from '@mui/material/TextField';

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
  const { login, signup, googleLogin } = useContext(Context);

  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    name: ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoogleSuccess = async (response) => {
    const { credential } = response;
    if (credential) {
      await googleLogin(credential);
      handleClose();
    } else {
      setErrorMsg('Google login failed: no credential received');
    }
  };

  const handleGoogleFailure = () => {
    setErrorMsg('Google login failed');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (isSignup) {
      try {
        await signup(formData);
        handleClose();
      } catch (error) {
        setErrorMsg('Signup failed');
      }
    } else {
      try {
        await login(formData);
        handleClose();
      } catch (error) {
        setErrorMsg('Login failed');
      }
    }
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
          {isSignup ? 'Signup' : 'Login'}
        </Typography>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                required
              />
            </>
          )}
          {!isSignup && (
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
          )}
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          {errorMsg && <Typography color="error">{errorMsg}</Typography>}
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            {isSignup ? 'Sign Up' : 'Login'}
          </Button>
        </form>

        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
          style={{ marginTop: '16px' }}
        />

        <Button
          onClick={() => setIsSignup((prev) => !prev)}
          sx={{ mt: 2 }}
          variant="outlined"
          fullWidth
        >
          {isSignup ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
        </Button>

        <Button onClick={handleClose} sx={{ mt: 2 }} variant="outlined" fullWidth>
          Close
        </Button>
      </Box>
    </Modal>
  );
}
