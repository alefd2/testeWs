import React from 'react';

import { useAxios } from '../../hooks/useAxios'

import { CarAdd } from '../CarAdd'; //componente externo


import {Car} from '../Car';

import { ContainerCarList, CarListWrapper } from './style';

// Este componente apresenta a lista de resultados

export function CarList() { 

    
    
    const { data } = useAxios('carros');
    
    


    return(
 
        <ContainerCarList>   {/* <div className='container' */}
             
            <CarAdd />   {/* Add car Button that open modal of inputs */}

            <CarListWrapper> {/*  <table> */}
            
                <thead>
                        
                    <tr>
                            <th>Nome da Marca</th>
                            <th>Nome do Modelo</th>
                            <th>Ano</th>
                            <th>Combustível</th>
                            <th>Num. Portas</th>
                            <th>Valor Fipe</th>
                            <th>Cor</th>
                            <th>Data do Cadastro</th>
                            <th>Ações</th>
                    </tr>

                </thead>
                <tbody>
                    {data?.map((carro)=>(
                            <Car 
                                key={carro.id} //key default of react
                                id={carro.id}
                                marca_id={carro.marca_id}
                                marca_nome={carro.marca_nome}
                                nome_modelo={carro.nome_modelo}
                                ano={carro.ano}
                                combustivel={carro.combustivel}
                                num_portas={carro.num_portas}
                                valor_fipe={carro.valor_fipe}
                                cor={carro.cor}

                                // // data e hora
                                // timestamp_cadastro= {new Date(carro.timestamp_cadastro * 1000).toISOString().slice(0, 19).replace('T', ' ')} 

                                // Somente a Data
                                timestamp_cadastro= {new Date(carro.timestamp_cadastro * 1000).toLocaleDateString("pt-BR")}  
                            />
                        ))}    

                </tbody>
                
  
                
            </CarListWrapper>
        </ContainerCarList>
    

    )}
