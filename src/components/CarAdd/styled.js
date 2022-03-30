import styled from 'styled-components'

import { IoAdd } from 'react-icons/io5'

export const DivButtonContainer = styled.div`
    strong {
        font-size: 25px;
    }

    display: flex;
    justify-items: center;
`;



export const AddCarButton = styled.button`
    border: 2px solid #ffffff;
    background-color:rgba(200, 200, 200);
    
    margin: 0px 0px 50px 10px ;
    /* padding: 10px; */
    height: 30px;
    width: 150px;
    cursor: pointer;

    border-radius: 9px;
    box-shadow: 0 0 10px rgba(0,0,0,0.48);
    
    

    /* justify-content: space-evenly; */
    /* align-items: center; */

`;


export const AddIcon = styled(IoAdd)`
    position: relative;
    /* right: 50% */
    top: 2px;

    stroke: #ffffff;
    width: 16px;
    height: 16px;
`;