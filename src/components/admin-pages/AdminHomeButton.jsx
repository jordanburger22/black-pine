import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminHomeButton = () => {

    const navigate = useNavigate();

    return (
        <Button
            variant="outlined"
            color="dark"
            className="admin-home-button"
            onClick={() => navigate('/admin')}
            sx={{ bgcolor: 'black', color: 'white', borderColor: 'white' }}>
            Admin Home
        </Button>
    );
}

export default AdminHomeButton;