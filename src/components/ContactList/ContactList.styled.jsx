import styled from 'styled-components';

export const ListContainer = styled.ul`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    margin-right: 50px;
    margin-left: 50px;
`

export const ListItem = styled.li`
    display: grid;
    width: 100%;
    grid-template-columns: 33.3% 33.3% 33.3%;
    border-bottom: 1px solid #d3d3d3;
    padding: 10px 0;
    
        &:not(:last-child) {
        margin-bottom: 30px;
        }
`;

// export const Contact = styled.div`

//     `;

export const CloseBtn = styled.button`
    background-color: #1976d2;
    width: 150px;
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
    margin-left: auto;


    &:hover {
        opacity: 90%;
    }
`;

export const ContactName = styled.span`
    font-size: 20px;
    font-weight: 500;
`

export const ContactNumber = styled.span`
    font-size: 18px;
`