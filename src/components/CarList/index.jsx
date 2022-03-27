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
    console.log(data);

    return(
 
        <ContainerCarList>   {/*  como se fosse <div className='container' */}
            <CarListWrapper> {/*  como se fosse <ul>  */}
                
                <CarAdd />   {/*  como se fosse as <li> retornadas */}
                {data?.map((carro)=>(
                    <Car 
                        key={carro.id}
                        id={carro.id}
                        nome={carro.nome}
                        marca={carro.marca}
                    />
                ))}      
                
            </CarListWrapper>
        </ContainerCarList>
    

    )}
