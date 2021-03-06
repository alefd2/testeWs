import React, { useContext } from "react";
import { CarContext } from "../../context/listContext";


import {
    Olerlay, 
    Container, 
    Header, 
    FormContainer, 
    FormMain, 
    InputGroup, 
    Footer, 
    CloseIcon, 
    CheckIcon
} from './styled';



export default function FormModal(){

    const {handleClose, 
           handleSubmit,
           nome_modelo, modeloHandler,
           marca_nome, marcaHandler,
           ano , anoHandler,
           combustivel, combustivelHandler, 
           num_portas, portasHandler, 
           valor_fipe , fipeHandler, 
           cor, corHandler
         } = useContext(CarContext)
    
    return(

        <Olerlay> {/* Camada acima da página - Escureçe a camada a baixo */}
            <Container> {/* Localo do conteúdo, modal */}
                <Header>
                    <strong>Add um carro</strong>
                    <button type="button" onClick={handleClose}>
                        <CloseIcon />
                    </button>
                </Header>
                <FormContainer onSubmit={handleSubmit}>
                    <FormMain>  {/* Recebe ons inputs   */}              
                        <InputGroup>
                        <label htmlFor="nome_modelo">Nome do Modelo</label>
                        <input  id="nome_modelo" 
                                type="text" 
                                value={nome_modelo} 
                                placeholder="COROLA" 
                                onChange={modeloHandler} 
                        />
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="marca_nome">Nome da Marca</label>
                            <select id="marca_nome" value={marca_nome} onChange={marcaHandler}>
                                <option value="TOYOTA">TOYOTA</option>
                                <option value="FORD">FORD</option>
                                <option value="VW">VW</option>
                                <option value="FIAT">FIAT</option>
                                <option value="AUDI">AUDI</option>
                                <option value="BMW">BMW</option>
                                <option value="CHEVROLET">CHEVROLET</option>
                                <option value="FERRARI">FERRARI</option>
                                <option value="HONDA">HONDA</option>
                            </select>
                        </InputGroup>
{/* 
                        <InputGroup>
                            <label htmlFor="marca_nome">Nome da Marca</label>
                            <input id="marca_nome" 
                                    type="text" 
                                    value={marca_nome} 
                                    placeholder="TOYOTA" 
                                    onChange={marcaHandler} 
                            />
                        </InputGroup>
                         */}
                        <InputGroup>
                            <label htmlFor="ano">Ano do modelo</label>
                            <input id="ano" 
                                    type="number"
                                    min="1900" 
                                    max="2050" 
                                    value={ano} 
                                    placeholder="2022" 
                                    onChange={anoHandler} 
                            />
                        </InputGroup>
                        
                        <InputGroup>
                            <label htmlFor="combustvel">Combustível</label>
                            <input id="combustivel" 
                                    type="text" 
                                    value={combustivel}  
                                    placeholder="Gasolina" 
                                    onChange={combustivelHandler} 
                            />
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="num_portas">Numero de portas</label>
                            <input id="num_portas" 
                                    type="number" 
                                    min="1" 
                                    max="6" 
                                    value={num_portas} 
                                    placeholder="4" 
                                    onChange={portasHandler} 
                            />
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="valor_fipe">Valor Fipe</label>
                            <input id="valor_fipe" 
                                    type="number" 
                                    value={valor_fipe} 
                                    placeholder="50000" 
                                    onChange={fipeHandler} 
                            />
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="cor">Cor do Carro</label>
                            <input id="cor" 
                                    type="text" 
                                    placeholder="branco" 
                                    value={cor} 
                                    onChange={corHandler} 
                            />
                        </InputGroup>


                    </FormMain>

                    <Footer>  {/* button  */} 
                        <button type="submit">
                            <CheckIcon />
                        </button>

                    </Footer>
                </FormContainer>
            </Container> 
        </Olerlay>
    );
}