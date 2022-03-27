import styled from "styled-components"


export const ContainerCarList = styled.div`

    display: block;
    
    /* flex-direction: column; */

    /* justify-content: center;
    align-items: center; */
    width: 100vw;
    height: 100vh;
`;

export const CarListWrapper = styled.ul` /* ul da aplicação */
    display: flex;                  /* Aqui os dados são listados centralizados como uma coluna*/
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    justify-self: center; /*seta o filho*/

    
    
`;