import { useContext } from "react";
import { Context } from "../../context/Context";
import { Grid2, TextField, Button, Box, Typography } from "@mui/material";

const Services = () => {
    const { services } = useContext(Context);


    return (
        <Grid2 container spacing={2}>
            {services.map((service) => (
                <Grid2 item xs={12} sm={6} md={4} key={service.id}>
                    <Box 
                        sx={{ 
                            boxShadow: 24,
                            p: 4,
                            borderRadius: '10px',
                            bgcolor: 'black',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            color: 'white',
                            backgroundColor: 'white',
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Edit Service
                        </Typography>
                        <form>
                            <TextField
                                label="Service Name"
                                defaultValue={service.title}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Service Sub Header"
                                defaultValue={service.subTitle}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Description"
                                defaultValue={service.description}
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                            />
                            <TextField
                                label="Price"
                                defaultValue={service.price}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Service Image"
                                defaultValue={service.serviceImg}
                                fullWidth
                                margin="normal"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Save Changes
                            </Button>
                        </form>
                    </Box>
                </Grid2>
            ))}
        </Grid2>
    );
};

export default Services;
