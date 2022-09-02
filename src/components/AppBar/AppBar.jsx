import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import { NavContainer } from './AppBar.styled';
import { Section } from 'components/AppContainer/AppContainer.styled'
import { NavLinkStyled } from 'components/Navigation/Navigation.styled';

const AppBar = () => {

    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Section>
            <NavContainer>
                <Navigation />
                {isLoggedIn ? <UserMenu /> :
                    <NavLinkStyled to="/register">Sign Up</NavLinkStyled>}
            </NavContainer>
            <Outlet />
        </Section>



    )
}

export default AppBar