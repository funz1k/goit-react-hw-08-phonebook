import { NavLink } from 'react-router-dom'
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <>
            <NavLink to="/">Home</NavLink>
            {isLoggedIn && (
                <NavLink to="/contacts">Contacts</NavLink>
            )}
        </>

    )
};

export default Navigation;