import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: space-around;
`

export const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    width: 150px;
    height: 30px;
    padding: 0 15px 0 15px;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 200px;
    height: auto;
    border-radius: 5px;
    font-weight: 600;
    color: #1d628b;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #1d628b;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.07);
    transition: all 300ms ease;
    &:hover {
        background-color: #1d628b;
        color: white;
    }
`;