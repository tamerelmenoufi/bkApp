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

export default function Login( {route} ){

    const  dados  = useContext(Global)
    const navigation = useNavigation();
    const [telefone, setTelefone] = useState('');

    const enviarDados = ()=>{
        if(telefone.length == 15){
            alert('estou mandando o codigo');
            axios.post('https://api2.bkmanaus.com.br/cliente.php',{
                telefone,
                acao:'enviar_codigo'
            })
            .then(retorno =>{
                navigation.navigate('Ativar', {codigo:retorno.data.codigo, telefone});
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
                        <Text>Telefone</Text>
                        <TextInputMask
                            style={{ height: 40, width: '100%',  borderColor: '#a1a1a1', borderWidth: 0.5, paddingHorizontal: 10, borderRadius:8 }}
                            placeholder="Digite algo..."
                            type={'cel-phone'}
                            options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                            }}
                            onChangeText={(text)=>{
                                setTelefone(text)
                            }}
                            value={telefone}
                        />
                        <Text style={{color:'#a1a1a1', marginBottom: 20, fontSize:12 }}>Digite o seu número Telefone/WhatsApp identificação!</Text>
                        <TouchableOpacity 
                            style={{backgroundColor:'#b60710', width:150, padding:10, borderRadius:8, alignContent:'center'}}
                            onPress={enviarDados}
                        >
                            <Text style={{fontSize:15, color:'#fff', alignContent:'center', textAlign:'center'}}>Enviar Código</Text>                               
                        </TouchableOpacity>
                    </View>  
                </View>
            <Rodape />
        </View>
    );
}