import {createContext, useState} from 'react';
import FormModal from '../components/FormModal';
import { useAxios } from '../hooks/useAxios';

import { Api } from '../services/axiosConfig';    

export const CarContext = createContext();

export function CarContextProvider( {children} ) {

    const { mutate } = useAxios("carros")



    const timestamp = Math.floor(Date.now() / 1000)
      


    
    //gerenciamento do estado
    const [openFormModal, setOpenFormModal] = useState(false);

    const [id, setId] = useState('');
    const [marca_id, setIMarcaId] = useState('');
    const [nome_modelo, setNome_Modelo] = useState(''); 
    const [marca_nome, setMarca_nome] = useState('');
    const [ano, setAno] = useState('');
    const [combustivel, setCombustivel] = useState('');
    const [num_portas, setNumPortas] = useState('');
    const [valor_fipe, setValor_fipe] = useState('');
    const [cor, setCor] = useState('');
    const [timestamp_cadastro, setTimestamp_cadastro] = useState(timestamp);

    

    
    function handleEdit (id, marca_id, marca_nome,nome_modelo, ano, combustivel, num_portas, valor_fipe, cor, timestamp_cadastro) {
        
        setId(id);
        setIMarcaId(marca_id);
        setNome_Modelo(nome_modelo);
        setMarca_nome(marca_nome);
        setAno(ano);
        setCombustivel(combustivel);
        setNumPortas(num_portas);
        setValor_fipe(valor_fipe);
        setCor(cor);
        setTimestamp_cadastro(timestamp_cadastro);
        
        setOpenFormModal(true);

    }


    //MODAL
    //// abre o modal
    function handleAdd() {
        setOpenFormModal(true); //no evento clic do botão adc ele fica true e traz o modal
    }
    //// fecha o modal
    function handleClose() {
        if(nome_modelo) {
            setNome_Modelo("")
        }
        if (marca_nome) {
            setMarca_nome("")
        }
        setOpenFormModal(false); // no evento do clic do modal ele executa passa para false
    }





    ///// ESTADO DO INPUT
    function modeloHandler (event){
        setNome_Modelo(event.target.value)
    }
    function marcaHandler (event){
        setMarca_nome(event.target.value)
    }
    function anoHandler (event){
        setAno(event.target.value)
    }
    function combustivelHandler (event){
        setCombustivel(event.target.value)
    }
    function portasHandler (event){
        setNumPortas(event.target.value)
    }
    function fipeHandler (event){
        setValor_fipe(event.target.value)
    }
    function corHandler (event){
        setCor(event.target.value)
    }


    //METHODS

    
    /////DELETE
    function handleDelete(id) {
        Api.delete(`carros/${id}`);

        //substitui o data na tela
        mutate();

        //lógica para usar mutate complexo retornando o estado do valor novo (os valores restantes)
        // const updatedCars = {
        //     carros: data?.filter( (data) => data.id !== id)
        // }

       
    }

    // botão executa 
    function handleSubmit (event){
        event.preventDefault();
        
        const carros = {
            id, marca_id, nome_modelo, marca_nome, ano, combustivel, num_portas, valor_fipe, cor, timestamp_cadastro,
        } 

        if(id){
            //method PUT
            Api.put(`carros/${id}`, carros);
        }else {
            //method POST
            Api.post("carros",carros);
        }
      
       setOpenFormModal(false);
    }
    
    
    return(
        
        <CarContext.Provider 
        value={{    handleAdd, 
                    handleClose,

                    handleEdit,
                    handleDelete,
                    
                    handleSubmit,
                    
                    modeloHandler,
                    marcaHandler,
                    anoHandler,
                    combustivelHandler,
                    portasHandler,
                    fipeHandler,
                    corHandler,
                    
                    id, setId,
                    marca_id, setIMarcaId,
                    nome_modelo, setNome_Modelo,
                    marca_nome, setMarca_nome,
                    ano, setAno,
                    combustivel, setCombustivel,
                    num_portas, setNumPortas,
                    valor_fipe, setValor_fipe,
                    cor, setCor,
                    timestamp_cadastro, setTimestamp_cadastro

                }}
        >
                {children}
                {openFormModal && <FormModal />}
        </CarContext.Provider>
 
 
 );
}