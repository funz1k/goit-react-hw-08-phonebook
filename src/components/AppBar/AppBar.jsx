import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom'
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
            </Button>
            {isLoggedIn ? <UserMenu /> : <NavLink to="/register">Sign Up</NavLink>}
            <Outlet />
        </div>
    )
}

export default AppBar