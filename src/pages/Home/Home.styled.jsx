import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1976d2;
    min-width: 64px;
    padding: 6px 30px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    width: 100%;

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    &:hover{
        opacity: 80%;
    }
`

export const Link = styled(NavLink)`
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    color: white;
    font-size: 0.875rem;
	line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
`
