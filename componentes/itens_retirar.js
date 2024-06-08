import { useEffect, useState, useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, Text, TouchableOpacity } from "react-native";
import { Global } from "../src/contexts/global";

export default ItensRetirar = (opc) => {

    const [retirar, setRetirar] = useState({})

    const  dados  = useContext(Global)


    return(
        <TouchableOpacity style={{flexDirection:'row', justifyContent:'flex-start', width:'100%', padding:10, borderColor:'#ccc', borderTopWidth:1}}>
            <Icon name='square' style={{margin:2, fontSize:15, marginRight:10}} ></Icon>
            <Text key={opc.codigo} >{dados.itens.filter(op => op.codigo == opc.item)[0].item}</Text>
            {/* <Text key={opc.codigo} >{dados.itens.filter(op => op.codigo == opc.item)[0].valor}</Text> */}
        </TouchableOpacity>
    )

}