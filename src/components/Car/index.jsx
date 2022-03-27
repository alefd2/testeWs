import React, { useContext } from "react";
import { ContainerCar, Button, ButtonArea} from "./styled";


import { IoTrashBin, IoPencil} from 'react-icons/io5'
import { CarContext } from "../../context/listContext";

export function Car( {id, nome, marca} ){
    
    
    const { handleEdit, handleDelete } = useContext(CarContext);
    
    return(
        
        <li>
            <ContainerCar>
                <p> {} </p>
                <p> {nome} </p>
                <p> {marca} </p>
            
                <ButtonArea>
                    <Button onClick={ () =>handleEdit(id, nome, marca) } > 
                        <IoPencil />
                    </Button>
                    <Button onClick={ () =>handleDelete(id) }  >
                        <IoTrashBin />
                    </Button>
                    
                </ButtonArea>
            </ContainerCar>
        </li>
       
    );
}