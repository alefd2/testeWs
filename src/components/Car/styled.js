import styled from 'styled-components';

export const ButtonArea = styled.div`
    width: 100%;
    display: flex;

    justify-content: space-evenly;


`;
export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: opacity 0.2s ease-out;

    svg {
        height: 20px;
        width: 20px;
        color: #1e1e1e;
        margin: 0px 10px 5px 0;
    }


    
`;