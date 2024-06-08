import { useContext } from 'react';
import { StyleSheet, Image, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Global } from '../contexts/global';
import {style} from './Stopo'

export default function Topo({titulo}){

    const  dados  = useContext(Global)

    return(
        <View style={style.topo}>

            <Text>{dados.cliente?.cliente?.nome}</Text>
            <Text>{dados.cliente?.padrao?.logradouro},{dados.cliente?.padrao?.numero},{dados.cliente?.padrao?.bairro}</Text>
            <Text style={style.rotulo}>{titulo}</Text>
        </View>
    )
}

