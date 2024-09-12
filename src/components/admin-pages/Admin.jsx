import { CardContent, Typography, Grid2, Button, Box } from "@mui/material";

const Admin = () => {
    return (
        <Grid2
            container
            spacing={2}
            sx={{
                justifyContent: 'center', // Center horizontally
                marginTop: '5vh',
                marginBottom: '15vh',
            }}
        >
            <Grid2
                item
                xs={12}
                sm={8}
                md={6}
                lg={4}
                sx={{
                    display: 'flex',
                    justifyContent: 'center', // Center horizontally
                }}
            >
                <Box
                    sx={{
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '10px',
                        bgcolor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'white',
                        width: '100%', // Take full width of the Grid2 item
                        maxWidth: '500px', // Max width for larger screens
                    }}
                >
                    <Button
                        variant="outlined"
                        color="dark"
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            borderColor: 'white',
                            mb: 2,
                        }}
                    >
                        Services
                    </Button>
                    <Button
                        variant="outlined"
                        color="dark"
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            borderColor: 'white',
                            mb: 2,
                        }}
                    >
                        Massage Styles
                    </Button>
                    <Button
                        variant="outlined"
                        color="dark"
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            borderColor: 'white',
                            mb: 2,
                        }}
                    >
                        Business Info
                    </Button>
                    <Button
                        variant="outlined"
                        color="dark"
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            borderColor: 'white',
                        }}
                    >
                        Orders
                    </Button>
                </Box>
            </Grid2>
        </Grid2>
    );
}

export default Admin;
