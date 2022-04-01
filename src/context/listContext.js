import {createContext, useState} from 'react';
import FormModal from '../components/FormModal';
import { useAxios } from '../hooks/useAxios';

import { Api } from '../services/axiosConfig';    

export const CarContext = createContext();

export function CarContextProvider( {children} ) {

    const { data, mutate } = useAxios("carros")

      


    
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
    const [timestamp_cadastro, setTimestamp_cadastro] = useState('');

    

    ///MODAL

        ///// EVENTO DE EDITAR 
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
        
        var myDate = timestamp_cadastro;
        myDate = myDate.split("/");
        var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);


        // const alef = Date.parse(timestamp_cadastro).toString()
        setTimestamp_cadastro(Math.floor(newDate.getTime() / 1000))
        // setTimestamp_cadastro(timestamp_cadastro);
        
        setOpenFormModal(true);

    }


        /////EVENTO 
    function handleAdd() {

        if(!id) {  // se exixtir um id, então zere todos os estados deste id ao clicar no botão
            setIMarcaId("");
            setNome_Modelo("");
            setMarca_nome("");
            setAno("");
            setCombustivel("");
            setNumPortas("");
            setValor_fipe("");
            setCor("");
            const timestamp = Math.floor(Date.now() / 1000)
            setTimestamp_cadastro(timestamp);
        } else {
            setIMarcaId("");
            setNome_Modelo("");
            setMarca_nome("");
            setAno("");
            setCombustivel("");
            setNumPortas("");
            setValor_fipe("");
            setCor("");
            const timestamp = Math.floor(Date.now() / 1000)
            setTimestamp_cadastro(timestamp);
        }



        setOpenFormModal(true); //no evento clic do botão adc ele fica true e traz o modal
    }

    // EVENTO DE FECHAR
    function handleClose() {
        if(id) {  // se exixtir um id, então zere todos os estados deste id ao clicar no botão
            setId("");
            setIMarcaId("");
            setNome_Modelo("");
            setMarca_nome("");
            setAno("");
            setCombustivel("");
            setNumPortas("");
            setValor_fipe("");
            setCor("");
            setTimestamp_cadastro("")
        }else {  //caso seja fechado sem valores
            setId("");
            setIMarcaId("");
            setNome_Modelo("");
            setMarca_nome("");
            setAno("");
            setCombustivel("");
            setNumPortas("");
            setValor_fipe("");
            setCor("");
            setTimestamp_cadastro("")
        }

        setOpenFormModal(false); // no evento do clic do modal ele executa passa para false
    }





    ///// ESTADO DO INPUT
    function modeloHandler (event){
        setNome_Modelo(event.target.value) //CAPTURA E ENVIA O VALOR DO ESTADO DO EVENTO 
    }
    function marcaHandler (event){
        if(event.target.value === "TOYOTA") {
            setIMarcaId(1)
        }else if(event.target.value === "FORD" ){
            setIMarcaId(2)
        }else if(event.target.value === "VW" ){
            setIMarcaId(3)
        }else if(event.target.value === "FIAT" ){
            setIMarcaId(4)
        }else if(event.target.value === "AUDI" ){
            setIMarcaId(5)
        }else if(event.target.value === "BMW" ){
            setIMarcaId(6)
        }else if(event.target.value === "CHEVROLET" ){
            setIMarcaId(7)
        }else if(event.target.value === "FERRARI" ){
            setIMarcaId(8)
        }else if(event.target.value === "HONDA" ){
            setIMarcaId(9)
        }else {}
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
        
        //SWR - PASSO 
        const updatedCars = data?.filter( (data) => data.id !== id)
        
        mutate(updatedCars, false);
       
    }

    // SUBMMIT
    function handleSubmit (event){
        event.preventDefault();
        
        //valor que quero passar no submmit
        const carros = {
            id, marca_id, nome_modelo, marca_nome, ano, combustivel, num_portas, valor_fipe, cor, timestamp_cadastro,
        } 

        if(id){
            //method PUT
            Api.put(`carros/${id}`, carros);
            
            const updatedCars = data?.map( (data) => {
                if(data.id === id) {
                    return {...data, id, marca_id, nome_modelo, marca_nome, ano, combustivel, num_portas, valor_fipe, cor,timestamp_cadastro}
                }
                return data
            })
        
            mutate(updatedCars, false);
            
        }else {
            //method POST
            Api.post("carros",carros);
            
            const updatedCars = [...data, carros]

            mutate(updatedCars, false);

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