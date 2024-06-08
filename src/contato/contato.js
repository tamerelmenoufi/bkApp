import { useContext, useState} from 'react';
import { View, ScrollView, TextInput, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Rodape from '../rodape/rodape';
import Topo from '../topo/topo';
import { Global } from '../contexts/global';
import { style } from './Scontato';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import axios from 'axios';

export default function Contato( {route} ){

    const  dados  = useContext(Global)
    const navigation = useNavigation();
    const [telefone, setTelefone] = useState('');

    return (
        <View style={style.area}>
            <Topo titulo="Contato" />
                <View style={[style.container,{marginTop:150}]}>
                    <View style={{flexDirection:'column', flex:1, margin:20}}>
                        <Text>Dados do Cliente</Text>
                    </View>  
                </View>
            <Rodape opc="contato" />
        </View>
    );
}