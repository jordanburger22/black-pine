import { useContext } from 'react';
import logo from '../assets/black-pine-logo.jpg'
import { Context } from '../context/Context';
import { Typography } from '@mui/material'


const Navbar = () => {

    const { businessInfo: { subHeader } } = useContext(Context)

    return (
        <nav className='navbar'>
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
        </nav>
    );
}

export default Navbar;