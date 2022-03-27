import styled from 'styled-components';

export const ContainerCar = styled.div`
    border: 2px solid #ffffff;
    background-color: rgba(1,1,1,0.5);
    margin-bottom:5px ;
    padding: 1px;
    height: 30px;
    width: 700px;

    border-radius: 9px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    color: #ffffff;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    
   p {
    display: flex;
   }

`;
export const ButtonArea = styled.div`
    /* width: 100%;
    display: flex;
    margin-left: 50px;
    justify-content: space-evenly; */


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