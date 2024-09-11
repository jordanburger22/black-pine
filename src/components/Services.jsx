import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { Card, CardMedia, CardContent, Typography, Grid2, Button, Box } from "@mui/material";
import MassageStyles from "./MassageStyles";

const Services = () => {
    const { services} = useContext(Context);
    const [isMassage, setIsMassage] = useState(false);

    const handleToggle = () => {
        setIsMassage(!isMassage);
    };


    const serviceElements = services.map((service, index) => {
        return (
            <Grid2
                key={index}
                className='service-container'
                size={{
                    xs: 12, 
                    sm: 6, 
                    md: service.title === "Massage" ? 10 : 5, 
                }}
            >
                <Card
                    className="service-card"
                    sx={{
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                    }}
                >
                    <CardMedia
                        component="img"
                        alt={service.title}
                        height="200"
                        image={service.serviceImg}
                        title={service.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}> 
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
                                        marginBottom: '1rem',
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
            <Grid2 container spacing={4} justifyContent="center"> 
                {serviceElements}
            </Grid2>

        </>
    );
};

export default Services;
