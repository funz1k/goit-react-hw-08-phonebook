import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import img from 'img/alif-caesar-rizqi-pratama-loUlSOXL81c-unsplash.jpg'

export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: no-repeat center/100% url(${img});
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
    min-width: 160px;
    min-height: 40px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    transition: all 300ms ease;

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    &:hover{
        opacity: 90%;
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

export const HomeTitle = styled.h1`
    display: flex;
    flex-direction: column;
    font-size: 60px;
    font-weight: 700;


`
export const TitleElem = styled.span`
        &:not(:last-child) {
        margin-bottom: 20px;
    }
`