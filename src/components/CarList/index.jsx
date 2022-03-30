import React from 'react';

import { useAxios } from '../../hooks/useAxios'

import { CarAdd } from '../CarAdd'; //componente externo
import {Car} from '../Car';

import { ContainerCarList, CarListWrapper } from './style';

// Este componente apresenta a lista de resultados

export function CarList() {

    // const [list, setList] = useState();

    // useEffect(()=>{
    //     Api.get("vehicles").then(({data})=>{
    //         setList(data);
    //     })
  
    //    //eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])   
    
    const { data } = useAxios('carros');
    // console.log(data);

    return(
 
        <ContainerCarList>   {/*  como se fosse <div className='container' */}
        
        
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
                                timestamp_cadastro={carro.timestamp_cadastro}
                            />
                        ))}    

                </tbody>
                
  
                
            </CarListWrapper>
        </ContainerCarList>
    

    )}
