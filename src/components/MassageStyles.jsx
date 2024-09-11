import { useContext } from "react";
import { Context } from "../context/Context";
import { Card, CardMedia, CardContent, Typography, Grid2, Button, Box } from "@mui/material"; // Import MUI components



const MassageStyles = () => {

    const fontSize = {
        xs: '1.2rem', // For extra small screens (phones)
        sm: '1.2rem', // For small screens (tablets)
        md: '1.5rem', // For medium screens (desktops)
        lg: '1.8rem', // For large screens
    };

    const {massageStyles} = useContext(Context)

    return ( 
                <Grid2  container spacing={4} justifyContent="center"> {/* Consistent container styling */}
                    <Box
                        className="massage-container"
                        sx={{
                            width: '65vw',
                            boxShadow: 24,
                            p: 4,
                            borderRadius: '10px',
                            bgcolor: 'background.paper', // Consistent background color
                            position: 'relative',
                            display: 'flex', // Flexbox for layout
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >

                        {/* Display massage styles */}
                        {massageStyles.map((massage, index) => (
                            <Card
                                key={index}
                                className="massage-card"
                                sx={{
                                    width: '100%',
                                    mb: 2,
                                    p: 2,
                                    borderRadius: '8px',
                                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {massage.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {massage.description}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginTop: 1 }} >
                                        Price: {massage.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Grid2>
     );
}
 
export default MassageStyles;