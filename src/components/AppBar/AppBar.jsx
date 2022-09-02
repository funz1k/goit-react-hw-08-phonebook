import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom'
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';

const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <div>
            <Navigation />
            {isLoggedIn ? <UserMenu /> :
                <NavLink to="/register">Sign Up</NavLink>}
            <Outlet />
        </div>
    )
}

export default AppBar