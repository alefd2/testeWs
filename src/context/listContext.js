import {createContext, useState} from 'react';
import FormModal from '../components/FormModal';
import { useAxios } from '../hooks/useAxios';

import { Api } from '../services/axiosConfig';    

export const CarContext = createContext();

export function CarContextProvider( {children} ) {

    const { mutate } = useAxios("carros")
    
    //gerenciamento do estado
    const [openFormModal, setOpenFormModal] = useState(false);  
    const [nome, setNome] = useState(''); 
    const [marca, setMarca] = useState('');
    const [id, setId] = useState(false);
    

    
    function handleEdit (id, carNome, carMarca) {
        setNome(carNome);
        setMarca(carMarca);
        setId(id)
        setOpenFormModal(true);
    }

    // Aqui executa
    function handleAdd() {
        setOpenFormModal(true); //no evento clic do botão adc ele fica true e traz o modal
    }

    function handleClose() {
        if(nome) {
            setNome("")
        }
        if (marca) {
            setMarca("")
        }
        setOpenFormModal(false); // no evento do clic do modal ele executa passa para false
    }

    function nomeHandler (event){
        setNome(event.target.value)
    }
    
    function marcaHandler (event){
        setMarca(event.target.value)
    }
    //method DELETE
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
        nome, marca
        } 

        if(id){
            
            //method 
            Api.put(`carros/${id}`, carros);
        }else {
            //method
            Api.post("carros",carros);
        }
      
       setOpenFormModal(false);
    }
    
    
    //aqui retorna o valor já armazenado no state
    return(
        
        <CarContext.Provider 
        value={{handleAdd, 
                    handleClose, 
                    handleDelete,
                    nomeHandler,
                    marcaHandler,
                    handleSubmit,
                    handleEdit,
                    nome, 
                    setNome,
                    marca,
                    setMarca,
                    id, 
                    setId                   
                }}
        >
                {children}
                {openFormModal && <FormModal />}
        </CarContext.Provider>
 
 
 );
}