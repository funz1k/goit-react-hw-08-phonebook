import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    
    @media ( max-width: 800px)  {
        flex-direction: column;
        align-items: center;
    }
`

export const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    width: 200px;
    height: 40px;
    padding: 0 15px 0 15px;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    margin-right: 40px;

    &::placeholder {
        font-style: inherit;
        font-size: 14px;
    }

    @media ( max-width: 800px)  {
        margin-bottom: 30px;
        margin-right: 0;
    }
`;

export const Button = styled.button`
    background-color: #1976d2;
    min-width: 232px;
    min-height: 40px;
    border: none;
    border-radius: 4px;
    color: white;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    font-size: 0.875rem;
	line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    transition: all 300ms ease;

    &:hover {
        opacity: 90%;
        color: white;
    }
`;