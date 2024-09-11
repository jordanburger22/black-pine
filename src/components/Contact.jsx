import { useContext } from "react";
import { Context } from "../context/Context";
import { Typography, Grid2, Box, TextField, Button } from "@mui/material";
import logo from '../assets/black-pine-logo.jpg'

const Contact = () => {
    const { businessInfo } = useContext(Context);
    console.log(businessInfo);

    return (
        <Grid2
            container
            spacing={4}
            justifyContent='center'
            p={4}
        >
             <Grid2
                size={{
                    xs: 12,
                    sm: 6,
                    md: 5,
                }}
            >
                <form style={{ padding: '1vh' }}>
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
                        }}>
                        <TextField
                            fullWidth
                            variant="filled"
                            label="Name"
                            name="name"
                            color=""
                            placeholder="Enter your name"
                            sx={{ marginBottom: "20px" }}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            sx={{ marginBottom: "20px" }}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            label="Phone"
                            name="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            sx={{ marginBottom: "20px" }}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            label="Address"
                            name="address"
                            placeholder="Enter your address"
                            sx={{ marginBottom: "20px" }}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            label="Subject"
                            name="subject"
                            placeholder="Type the subject"
                            sx={{ marginBottom: "20px" }}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            label="Message"
                            name="message"
                            placeholder="Enter your message"
                            multiline
                            rows={4}
                            sx={{ marginBottom: "20px" }}
                        />
                        <Button type="submit" variant="contained" color="dark" sx={{ backgroundColor: 'black', color: 'white' }}>
                            Send
                        </Button>
                    </Box>
                </form>
            </Grid2>
            <Grid2
                size={{
                    xs: 12,
                    sm: 6,
                    md: 5,
                }}
                sx={{
                    widthh: '40vw',
                }}
            >
                <Box
                    sx={{
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '10px',
                        bgcolor: 'background.paper',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'black',
                    }}
                >
                    <Typography variant="h4" component="h4" sx={{ marginBottom: "20px" }}>
                        Contact me
                    </Typography>
                    <Typography variant="h5" component="p" sx={{ marginBottom: "20px" }}>
                        {businessInfo.name}
                    </Typography>
                    <Typography variant="body1" component="p" color="text.secondary" sx={{ marginBottom: "20px" }}>
                        {businessInfo.phoneNumber}
                    </Typography>
                    <Typography variant="body1" component="p" color="text.secondary" sx={{ marginBottom: "20px" }}>
                        {businessInfo.address}
                    </Typography>
                </Box>
                <Box
                p={4}
                >
                    <img src={logo} className="contact-logo"/>
                </Box>
            </Grid2>
           
            <Grid2
                size={{
                    xs: 12,
                    sm: 6,
                    md: 5,
                }}
                sx={{
                    widthh: '40vw',
                }}
            >
                
            </Grid2>
        </Grid2 >
    );
};

export default Contact;
