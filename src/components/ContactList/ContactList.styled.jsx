import styled from 'styled-components';

export const ListItem = styled.li`
    display: flex;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 10px 0;
`;

export const Contact = styled.p`
    display: flex;
    width: 50%;
    justify-content: space-between;
    `;

export const CloseBtn = styled.button`
    padding: 8px 10px;
    margin-left: auto;
    font-size: 16px;
    background-color: inherit;
    border: 1px solid #1d628b;
    border-radius: 5px;
    cursor: pointer;
    color: #1d628b;
    transition: all 300ms ease;
    &:hover {
        background-color: #1d628b;
        color: white;
    }
`;

export const ContactName = styled.span`
    font-size: 20px;
    font-weight: 500;
`

export const ContactNumber = styled.span`
    font-size: 18px;
`