import { useContext, useState} from 'react';
import { View, ScrollView, TextInput, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Rodape from '../rodape/rodape';
import Topo from '../topo/topo';
import { Global } from '../contexts/global';
import { style } from './Slogin';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import axios from 'axios';

export default function Ativar( {route} ){

    const  dados  = useContext(Global)
    const navigation = useNavigation();
    const [codigo, setCodigo] = useState('');

    console.log(route.params.telefone)

    const enviarDados = ()=>{
        if(codigo.length == 4 && codigo == route.params.codigo){
            axios.post('https://api2.bkmanaus.com.br/cliente.php',{
                id_unico:dados.cliente.vendas_tmp?.id_unico,
                telefone:route.params.telefone,
                acao:'ativar'
            })
            .then(retorno =>{
                dados.setCliente(retorno.data);
                console.log(retorno.data)
                navigation.navigate('Home');
            })
        }else{
            alert('O número do telefone está errado ou incompleto')
        }
    }

    return (
        <View style={style.area}>
            <Topo titulo="Login" />
                <View style={[style.container,{marginTop:150}]}>
                    <View style={{flexDirection:'column', flex:1, margin:20}}>
                        <Text>Código de Ativação</Text>
                        <TextInput
                            style={{ height: 40, width: '100%',  borderColor: '#a1a1a1', borderWidth: 0.5, paddingHorizontal: 10, borderRadius:8 }}
                            placeholder="Digite algo..."
                            maxLength={4}
                            keyboardType='numeric'
                            onChangeText={(text)=>{
                                setCodigo(text)
                            }}
                            value={codigo}
                        />
                        <Text style={{color:'#a1a1a1', marginBottom: 20, fontSize:12 }}>Digite o seu número Telefone/WhatsApp identificação!</Text>
                        <TouchableOpacity 
                            style={{backgroundColor:'#b60710', width:150, padding:10, borderRadius:8, alignContent:'center'}}
                            onPress={enviarDados}
                        >
                            <Text style={{fontSize:15, color:'#fff', alignContent:'center', textAlign:'center'}}>Ativar Acesso</Text>                               
                        </TouchableOpacity>
                    </View>  
                </View>
            <Rodape />
        </View>
    );
}