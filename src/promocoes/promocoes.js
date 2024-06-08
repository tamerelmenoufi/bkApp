import { useContext} from 'react';
import { View, ScrollView, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Rodape from '../rodape/rodape';
import Topo from '../topo/topo';
import { Global } from '../contexts/global';
import { style } from './Spromocoes';

export default function Promocoes( {route} ){

    const  dados  = useContext(Global)

    return (
        <View style={style.area}>
            <Topo titulo="Promoções" />
            <ScrollView style={[style.area,{marginTop:120, marginBottom:75}]}>
                <View style={style.container}>
                    {
                        dados.produtos?.map((retorno, indix)=>(
                            (retorno.promocao > 0)&&(
                            <TouchableOpacity style={[style.listaProdutos, {width:dados.PageWidth}]}>
                                <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'flex-start', backgroundColor:'#bd0100', marginHorizontal:10, height:130, borderRadius:10}}>
                                    <ImageBackground resizeMode='stretch' style={{width:150, height:100}} source={{uri:`https://painel.bkmanaus.com.br/src/`+((retorno.categoria == 8)?'combos':'produtos')+`/icon/${retorno.icon}`}} />
                                    <View style={{flexDirection:'column', flex:1}}>
                                        <Text numberOfLines={1} style={{fontSize:16, fontFamily:'FlameBold', color:'#fbdb00', paddingEnd:15}}>{retorno.produto}</Text>
                                        <Text numberOfLines={3} style={{fontSize:14, fontFamily:'Uniform', padding:5, color:'#fff', height:60, paddingEnd:15}}>{retorno.descricao}</Text>   
                                        <Text numberOfLines={1} style={{fontSize:14, fontFamily:'Uniform', color:'#fff'}}>DE R$ {retorno.valor}</Text>   
                                        <View style={{flexDirection:'row', flex:1}}>
                                            <Text style={{fontSize:15, fontFamily:'FlameBold', color:'#fbdb00', textAlign:'right', paddingEnd:20}}>por </Text>
                                            <Text style={{fontSize:20, fontFamily:'FlameBold', color:'#fbdb00', textAlign:'right', paddingEnd:20}}>R$ {`${retorno.valor_promocao}`}</Text>
                                            <Icon size={20} name='play-circle' style={{color:'#fbdb00'}} />
                                        </View>
                                    </View>                            
                                </View>                                
                            </TouchableOpacity>
                            )
                        ))
                    }
                </View>
            </ScrollView>
            <Rodape />
        </View>
    );
}