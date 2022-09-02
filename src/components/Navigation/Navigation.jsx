import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { NavLinkStyled } from './Navigation.styled';

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            {isLoggedIn && (
                <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
            )}
        </>

    )
};

export default Navigation;