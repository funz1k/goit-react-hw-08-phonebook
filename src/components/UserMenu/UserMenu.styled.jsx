import styled from 'styled-components';

export const UserBlock = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`

export const UserInformation = styled.span`
margin-right: 20px;
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	font-weight: 400;
	font-size: 1.3rem;
	line-height: 1.334;
	letter-spacing: 0em;
`;

export const LogOutButton = styled.button`
    background-color: white;
    min-width: 64px;
    padding: 3px 30px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    transition: all 300ms ease;

    &:hover{
        color: white;
        background-color: #1976d2;
    }
`