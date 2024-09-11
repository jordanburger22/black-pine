import { useContext } from 'react';
import logo from '../assets/black-pine-logo.jpg';
import { Context } from '../context/Context';
import { Button, Typography } from '@mui/material';
import loginSVG from '../assets/login.svg';
import ShoppingBagButton from './ShoppingBagButton';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';

const Navbar = () => {
    const { businessInfo: { subHeader } } = useContext(Context);

    return (
        <nav>
            <div className='navigation'>
                <Button
                    variant="contained"
                    color='dark'
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        marginLeft: '1vw',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px 16px', // Adjust padding to fit content
                        '&:hover': {
                            backgroundColor: '#333', // Darker shade on hover
                            borderColor: '#aaa', // Lighter border color on hover
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Add shadow effect on hover
                        },
                        minWidth: '120px', // Ensure the button is wide enough
                        textAlign: 'center', // Center text horizontally

                    }}
                >
                    <img src={loginSVG} alt="Login" style={{ maxHeight: '5vh', }} /> {/* Add margin to separate image from text */}
                    Login
                </Button>
                <ShoppingBagButton />
                <Button>
                    <img src={facebook} style={{ maxHeight: '5vh', }}/>
                </Button>
                <Button>
                    <img src={instagram} style={{ maxHeight: '4vh', }}/>
                </Button>
            </div>
            <div className='navbar'>
                <img className='navbar-img' src={logo} alt='Logo' />
                <Typography variant="h4" fontFamily="Dancing Script" sx={{
                    fontSize: {
                        xs: '1.5rem', // For extra small screens (phones)
                        sm: '2rem', // For small screens (tablets)
                        md: '2.5rem', // For medium screens (desktops)
                        lg: '3rem', // For large screens
                    },
                    marginTop: '1vh',
                }}>
                    {subHeader}
                </Typography>
            </div>
        </nav>
    );
}

export default Navbar;
