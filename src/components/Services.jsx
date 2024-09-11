import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { Card, CardMedia, CardContent, Typography, Grid2, Button, Box } from "@mui/material"; // Import MUI components
import MassageStyles from "./MassageStyles";

const Services = () => {
    const { services, massageStyles } = useContext(Context); // Extract massageStyles from context
    const [isMassage, setIsMassage] = useState(false);

    const handleToggle = () => {
        setIsMassage(!isMassage);
    };

    const fontSize = {
        xs: '1.2rem', // For extra small screens (phones)
        sm: '1.2rem', // For small screens (tablets)
        md: '1.5rem', // For medium screens (desktops)
        lg: '1.8rem', // For large screens
    };

    const serviceElements = services.map((service, index) => {
        return (
            <Grid2
                key={index}
                className='service-container'
                size={{
                    xs: 12, // 12 columns for extra small screens (phones)
                    sm: 6, // 6 columns for small screens (tablets)
                    md: service.title === "Massage" ? 10 : 5, // 4 columns for medium screens (desktops)
                }}
            >
                <Card
                    className="service-card"
                    sx={{
                        height: '100%', // Ensures the card takes the full height
                        display: 'flex', // Flexbox layout
                        flexDirection: 'column', // Column direction to stack elements vertically
                    }}
                >
                    <CardMedia
                        component="img"
                        alt={service.title}
                        height="200" // Fixed height for the image
                        image={service.serviceImg}
                        title={service.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}> {/* Flex-grow allows content to stretch */}
                        <Typography gutterBottom variant="h5" component="div">
                            {service.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {service.subTitle}
                        </Typography>
                        {service.description &&
                            <Typography variant="body2" color="text.secondary">
                                {service.description}
                            </Typography>}
                        {service.price &&
                            <Typography variant="body1" color="text.primary">
                                Price: {service.price}
                            </Typography>}
                        {service.title === 'Massage' &&
                            <>
                                <Button
                                    variant="outlined"
                                    color="dark"
                                    sx={{
                                        marginBottom: '1rem', // Add margin at the bottom
                                    }}
                                    onClick={handleToggle}
                                >
                                    {isMassage ? 'Hide' : 'See'} Massage Styles
                                </Button>

                                {isMassage && <MassageStyles />}
                            </>
                        }
                    </CardContent>
                </Card>
            </Grid2>
        );
    });

    return (
        <>
            <Grid2 container spacing={4} justifyContent="center"> {/* Grid2 container for cards */}
                {serviceElements}
            </Grid2>

        </>
    );
};

export default Services;
