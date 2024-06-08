import { useContext } from 'react';
import { StyleSheet, Image, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Global } from '../contexts/global';
import {style} from './Srodape'
import { useNavigation } from '@react-navigation/native';

export default function Rodape({opc}){

    const dados = useContext(Global);
    const navigation = useNavigation();

    function validarUser(local){
        if(dados.cliente?.cliente?.codigo){
            // alert('usuario detectado')
            navigation.navigate(local);
        }else{
            // console.log(dados.cliente)
            // alert(dados.cliente.vendas_tmp?.id_unico)
            navigation.navigate('Login');
        }
    }

    return(
        <View style={style.rodape}>
            <View style={style.barra}>
                <TouchableOpacity style={style.botao} onPress={()=>{validarUser('Home')}}>
                    <Image style={style.logo} source={ require('../img/logo.png') } />
                </TouchableOpacity>
                <TouchableOpacity style={style.botao} onPress={()=>{validarUser('Home')}}>
                    <Icon name="home" style={[style.iconeMenu, ((opc == 'home')?({color:'#ffdb37'}):'')]} />
                    <Text style={[style.iconeText, ((opc == 'home')?({color:'#ffdb37'}):'')]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.botao} onPress={()=>{validarUser('Perfil')}}>
                    <Icon name="user-alt" style={[style.iconeMenu, ((opc == 'perfil')?({color:'#ffdb37'}):'')]} />
                    <Text style={[style.iconeText, ((opc == 'perfil')?({color:'#ffdb37'}):'')]}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.botao} onPress={()=>{validarUser('Pedido')}}>
                    <Icon name="shopping-bag" style={[style.iconeMenu, ((opc == 'pedido')?({color:'#ffdb37'}):'')]} />
                    <Text style={[style.iconeText, ((opc == 'pedido')?({color:'#ffdb37'}):'')]}>Pedido</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.botao} onPress={()=>{validarUser('Pagar')}}>
                    <Icon name="dollar-sign" style={[style.iconeMenu, ((opc == 'pagar')?({color:'#ffdb37'}):'')]} />
                    <Text style={[style.iconeText, ((opc == 'pagar')?({color:'#ffdb37'}):'')]}>Pagar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.botao,{marginEnd:20}]} onPress={()=>{validarUser('Contato')}}>
                    <Icon name="mobile" style={[style.iconeMenu, ((opc == 'contato')?({color:'#ffdb37'}):'')]} />
                    <Text style={[style.iconeText, ((opc == 'contato')?({color:'#ffdb37'}):'')]}>Contato</Text>
                </TouchableOpacity>                
            </View>
        </View>
    )
}

