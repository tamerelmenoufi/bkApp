import React, {createContext, useEffect, useState} from "react";
import * as SecureStore from 'expo-secure-store';
import { Dimensions } from "react-native";
import axios from "axios";
import {vendas} from "./vendas";


const PageWidth = Dimensions.get('window').width;

export const Global = createContext({})
  
function SessaoGlobal({children}){

    const [produtos, setProdutos] = useState({});
    const [itens, setItens] = useState({});
    const [categorias, setCategorias] = useState({});
    const [combos, setCombos] = useState({});
    const [cliente, setCliente] = useState({});

    

    function Verifica(opc){
        if(opc == 'm'){
            return 'Masculino'
        }else{
            return 'Feminino'
        }
    }

    

    const gerarIdUnico = () => {
        // Obter um carimbo de data/hora atual
        const timestamp = new Date().getTime();
        // Gerar um número aleatório entre 0 e 9999
        const numeroAleatorio = Math.floor(Math.random() * 10000);
        // Concatenar o carimbo de data/hora e o número aleatório para formar o ID único
        const idUnico = `${timestamp}-${numeroAleatorio}`;
        return idUnico;
    };
    
    
        async function save(key, value) {
            await SecureStore.setItemAsync(key, value);
            return value;
        }
    
        async function del(key) {
            await SecureStore.deleteItemAsync(key);
            return '';
        }
      
      async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
          axios.post('https://api2.bkmanaus.com.br/cliente.php',{
            id_unico:result
          })
          .then((retorno)=>{
            // console.log(retorno.data)
            setCliente(retorno.data);
          })
        } else {
          return save(key, gerarIdUnico())
        }
      }



    useEffect(()=>{

        getValueFor('clienteId');

        // del('clienteId') 

        axios.get('https://api2.bkmanaus.com.br/categorias.php')
        .then((retorno)=>{
            // console.log(retorno.data);
            setCategorias(retorno.data)
        })

        axios.get('https://api2.bkmanaus.com.br/produtos.php')
        .then((retorno)=>{
            // console.log(retorno.data);
            setProdutos(retorno.data)
        })

        axios.get('https://api2.bkmanaus.com.br/itens.php')
        .then((retorno)=>{
            // console.log(retorno.data);
            setItens(retorno.data)
        })


        axios.get('https://api2.bkmanaus.com.br/combos.php')
        .then((retorno)=>{
            // console.log(retorno.data);
            setCombos(retorno.data)
        })
    
    },[])


    return (
        <Global.Provider value={{
                                cliente,
                                setCliente,
                                Verifica,
                                vendas,
                                categorias,
                                combos,
                                produtos,
                                itens,
                                PageWidth
                                }}>
            {children}
        </Global.Provider>        
    )

}

export default SessaoGlobal;