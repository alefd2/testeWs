import React, { useContext } from "react";
import { Button, ButtonArea} from "./styled";


import { IoTrashBin, IoPencil} from 'react-icons/io5'
import { CarContext } from "../../context/listContext";

export function Car( {id, marca_id, marca_nome,nome_modelo, ano, combustivel, num_portas, valor_fipe, cor, timestamp_cadastro} ){
    
    
    const { handleEdit, handleDelete } = useContext(CarContext);
    
    return(

            <tr>    
                    
                    <td>{marca_nome}</td>

                    <td>{nome_modelo}</td>
                       
                    <td>{ano}</td>
                    
                    <td>{combustivel}</td>
                    <td>{num_portas}</td>

                    <td>{valor_fipe}</td>

                    <td>{cor}</td>

                    <td>{timestamp_cadastro}</td> 

                    <td>
                        <ButtonArea>
                            <Button onClick={ () =>handleEdit(id, marca_id, marca_nome, nome_modelo, ano, combustivel, num_portas, valor_fipe, cor, timestamp_cadastro) } > 
                                <IoPencil />
                            </Button>
                            <Button onClick={ () =>handleDelete(id) }  >
                                <IoTrashBin />
                            </Button>
                            
                        </ButtonArea>   
                    </td>
        
            </tr>
       
    );
}