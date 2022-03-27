import React, {useContext} from "react";
import { AddCarButton , AddIcon } from './styled';

import { CarContext } from '../../context/listContext'


export function CarAdd() {

     const { handleAdd } = useContext(CarContext)

    return(
               
        <li>
            <AddCarButton onClick={handleAdd}> 
                <AddIcon />
            </AddCarButton>
        </li>


    );
}