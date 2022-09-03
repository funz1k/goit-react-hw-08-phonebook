import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	font-weight: 400;
	font-size: 1.3rem;
	line-height: 1.334;
	letter-spacing: 0em;
	transition: all 300ms ease;
	&.active {
		color: #1976d2;
		border-bottom: 2px solid #1976d2
	}

	&:hover {
		color: #1976d2;
		border-bottom: 2px solid #1976d2;
	}

	&:not(:last-child) {
		margin-right: 50px;
	}
`;