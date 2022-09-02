import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
margin-right: 20px;
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	font-weight: 400;
	font-size: 1.3rem;
	line-height: 1.334;
	letter-spacing: 0em;
	&.active {
		color: var(--color-button);
	}
`;