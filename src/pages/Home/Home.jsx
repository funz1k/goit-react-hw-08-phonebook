import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>
                My Phone book
            </h1>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                <NavLink to="/login">Sign In</NavLink>
            </Button>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                <NavLink to="/register">Sign Up</NavLink>
            </Button>
        </div>
    )
}

export default Home;
