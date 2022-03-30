import React, {useContext} from "react";
import { AddCarButton , DivButtonContainer, AddIcon } from './styled';

import { CarContext } from '../../context/listContext'


export function CarAdd() {

     const { handleAdd } = useContext(CarContext)

    return(
               
            <DivButtonContainer>
                <strong>Adicione um Carro</strong>
                
                <AddCarButton onClick={handleAdd}> 
                    <AddIcon />
                </AddCarButton>
            </DivButtonContainer >


    );
}