import { Button } from '@mui/material';
import shoppingBag from '../assets/shopping-bag.svg'

const ShoppingBagButton = () => (
  <Button
    variant="contained"
    color='dark'
    sx={{
      color: 'white',
      borderColor: 'white',
      marginLeft: '1vw',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px 16px', // Adjust padding as needed
      '&:hover': {
        backgroundColor: '#333', // Darker shade on hover
        borderColor: '#aaa', // Lighter border color on hover
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)', // Add shadow effect on hover
      },
      '& span': {
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        padding: '2px 6px', // Adjust size as needed
        fontSize: '14px', // Adjust font size as needed
        color: 'white',
      },
    }}
  >
    <img src={shoppingBag} alt="Shopping Bag" />
    <span>0</span>
  </Button>
);

export default ShoppingBagButton;
