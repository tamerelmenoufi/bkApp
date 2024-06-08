import { useContext} from 'react';
import { View, ScrollView, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Rodape from '../rodape/rodape';
import Topo from '../topo/topo';
import { Global } from '../contexts/global';
import { style } from './Sprodutos';
import { useNavigation } from '@react-navigation/native';


export default function Produtos( {route} ){

    const  dados  = useContext(Global)
    const navigation = useNavigation();

    // console.log(dados.produtos[route.params.categoria].categoria)
    return (
        <View style={style.area}>
            <Topo titulo="Produtos" />
            <ScrollView style={[style.area,{marginTop:120, marginBottom:75}]}>
                <View style={style.container}>
                    {
                        dados.produtos?.map((retorno, index)=>(
                            (route.params.categoria == retorno.categoria && retorno.promocao == 0)&&(
                            <TouchableOpacity style={[style.listaProdutos, {width:dados.PageWidth}]} onPress={()=>{ navigation.navigate('Detalhes', {codigo:index}) }}>
                                <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'flex-start'}}>
                                    <ImageBackground resizeMode='stretch' style={{width:145, height:105, margin:5}} source={{uri:`https://painel.bkmanaus.com.br/src/`+((retorno.categoria == 8)?'combos':'produtos')+`/icon/${retorno.icon}`}} />
                                    <View style={{flexDirection:'column', flex:1}}>
                                        <Text numberOfLines={1} style={{fontSize:16, fontFamily:'FlameBold', color:'#600f0b', paddingEnd:15}}>{retorno.produto}</Text>
                                        <Text numberOfLines={3} style={{fontSize:13, fontFamily:'Uniform', padding:5, color:'#333', height:60, paddingEnd:15}}>{retorno.descricao}</Text>   
                                        <View style={{flexDirection:'row', flex:1, alignContent:'flex-end'}}>
                                            <Text style={{fontSize:20, fontFamily:'FlameBold', color:'#f4352b', textAlign:'right', paddingEnd:20, flex:1}}>R$ {`${retorno.valor}`}</Text>
                                            <Icon size={20} name='play-circle' style={{color:'#f4352b', textAlign:'right', paddingEnd:20}} />
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