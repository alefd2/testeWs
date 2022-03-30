import styled from "styled-components"


export const ContainerCarList = styled.div`

    display: flex;
    
    flex-direction: column;

    justify-content: center;
    align-items: center;
    /* width: 100vw; */
    /* height: 80vh; */

    table::-webkit-scrollbar {
        width: 10px;
        border: 1px solid rgba(200, 200, 200);
        border-radius: 0px 10px 10px 0px;
    }
    table::-webkit-scrollbar-thumb {
        
        background-color: #bdbdbd;
        border-radius: 0px 10px 10px 0px;

    }

`;

export const CarListWrapper = styled.table` /* table da aplicação */ 

    display: block;
    border-collapse: collapse;
    -moz-border-radius: 5px;

    /* border: 1px solid #ffffff; */
        
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    background: #FFEFFF;

    max-width: 1100px;
    max-height: 400px;

    overflow-y: scroll;
    scroll-behavior:smooth ;
    

    thead {
        background: #bdbdbd;
        border-radius: 10px;
    }
    

    th {
     
        padding: 15px;
        border: 1px solid rgb(218, 216, 216);

    }

    tbody {
        
    }

    td {
        
        padding: 5px 0px 5px 0px;

        max-width: 150px;

        align-items: center;
        justify-content: center;

    }
    
`;