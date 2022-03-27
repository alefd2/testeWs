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

    const { handleClose, nome, nomeHandler, marca, marcaHandler, handleSubmit } = useContext(CarContext)
    
    return(

        <Olerlay> {/* Camada acima da página - Escureçe a camada a baixo */}
            <Container> {/* Localo do conteúdo, modal */}
                <Header>
                    <strong>Adicione um carro</strong>
                    <button type="button" onClick={handleClose}>
                        <CloseIcon />
                    </button>
                </Header>
                <FormContainer onSubmit={handleSubmit}>
                    <FormMain>
                        <InputGroup>
                        <label htmlFor="nome">Nome</label>
                        <input id="nome" type="text" value={nome} onChange={nomeHandler} />
                        </InputGroup>

                        <InputGroup>
                        <label htmlFor="marca">Marca</label>
                        <input id="marca" type="text" value={marca} onChange={marcaHandler} />
                        </InputGroup>
                    </FormMain>
                    <Footer>
                        <button type="submit">
                            <CheckIcon />
                        </button>

                    </Footer>
                </FormContainer>
            </Container> 
        </Olerlay>
    );
}