import { useContext, useEffect, useState} from 'react';
import { View, ScrollView, Text, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Rodape from '../rodape/rodape';
import Topo from '../topo/topo';
import { Global } from '../contexts/global';
import { style } from './Sprodutos';

export default function Detalhes( {route} ){

    const [itensRetiradas, setItensRetiradas] = useState([]);

    const dados  = useContext(Global)
    const produto = dados.produtos[route.params.codigo]

    const itens = JSON.parse(produto.itens)

    console.log('IdUnico')
    console.log(dados.cliente.vendas_tmp.id_unico)


    useEffect(()=>{

        axios.post('https://api2.bkmanaus.com.br/adicionar_item.php',{
            codigo:produto.codigo,
            categoria:produto.categoria,
            valor:((produto.promocao > 0)?produto.valor_promocao:produto.valor),
            quantidade:1,
            remocao:itensRetiradas,
            inclusao:{},
            inclusao_valor:{},
            inclusao_quantidade:{},
            substituicao:{},
            substituicao_valor:{},
            anotacoes:{},
            idUnico:dados.cliente.vendas_tmp.id_unico,
            status:false,
            acao:'anotacoes'
          })
          .then((retorno)=>{
            console.log(retorno.data.vendas_tmp)
            dados.setCliente(retorno.data);
          })


    },[itensRetiradas])


    /*
    "item17": {
        "tipo": "produto",
        "total": 25.9,
        "valor": 25.9,
        "codigo": 17,
        "regras": {
            "remocao": [
                "1",
                "2"
            ],
            "categoria": "1"
        },
        "status": "",
        "adicional": 0,
        "anotacoes": "",
        "quantidade": 1
    }
    //*/
    

    const retiradas = (opc) => {

        console.log(dados.cliente.vendas_tmp)

        const objetos = itensRetiradas.filter(o => o.item === opc.item);

        if(objetos.length > 0){
            const NovoObjetos = itensRetiradas.filter(o => o.item !== opc.item);
            setItensRetiradas(NovoObjetos)
        }else{
            setItensRetiradas([... itensRetiradas, opc])
        }



    }


    return (
        <View style={style.area}>
            <Topo titulo="Produto" />
            <ScrollView style={[style.area,{marginTop:120, marginBottom:150}]}>
                <View style={[style.container, {padding:20, alignItems:'center'}]}>
                    <Text style={{color:'#670600', fontSize:30, fontFamily:'FlameBold', textAlign:'center'}}>{produto.produto}</Text>
                    <ImageBackground resizeMode='cover' style={{flex:1, width:280, height:250}} source={{uri:`https://painel.bkmanaus.com.br/src/`+((produto.categoria == 8)?'combos':'produtos')+`/icon/${produto.icon}`}} />
                    <Text style={{fontFamily:'Uniform', fontSize:15, marginBottom:20, lineHeight: 20}}>{produto.codigo}</Text>
                    <Text style={{fontFamily:'Uniform', fontSize:15, marginBottom:20, lineHeight: 20}}>{produto.descricao}</Text>
                    <View style={{width:'100%', flexDirection:'row', justifyContent:'flex-start'}}>
                        <Icon name='comment-alt' style={{fontSize:18, padding:0, marginRight:10, fontWeight:'bold',transform: [{ scaleX: -1 }],}} ></Icon>
                        <Text style={{fontFamily:'Uniform', fontSize:15, fontWeight:'bold'}}>Anotações do Pedido</Text>
                    </View>
                    <TextInput 
                        style={{width:'100%', borderWidth:1, borderColor:'#ccc', borderRadius:5, marginTop:5, height:90, textAlignVertical:'top', padding:10}}
                        multiline={true}
                        numberOfLines={4} 
                    ></TextInput>
                    <View style={{marginTop:20, width:'100%'}}>
                        <View style={{backgroundColor:'#eee', padding:10, borderTopEndRadius:7, borderTopLeftRadius:7, borderWidth:1, borderColor:'#ccc', borderBottomWidth:0}}>
                            <Text>Retirar Algum Item?</Text>
                        </View>
                        <View style={{borderBottomLeftRadius:7, borderBottomEndRadius:7, borderWidth:1, borderColor:'#ccc', borderTopWidth:0}}>
                        {
                            itens.map(opc=>(
                                <TouchableOpacity 
                                    style={{flexDirection:'row', justifyContent:'flex-start', width:'100%', padding:10, borderColor:'#ccc', borderTopWidth:1}}
                                    onPress={()=>{retiradas(opc)}}    
                                >
                                    <Icon name={(itensRetiradas.find((reg)=> reg.item === opc.item))?'check-square':'square'} style={{margin:2, fontSize:15, marginRight:10}} ></Icon>
                                    <Text key={opc.codigo} >{dados.itens.filter(op => op.codigo == opc.item)[0].item}</Text>
                                </TouchableOpacity>
                            ))
                        }
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{position:'absolute', bottom:75, left:10, right:10, height:70}}>
                <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <TouchableOpacity>
                            <Icon name="minus-circle" style={{margin:10, fontSize:25, color:'red'}}></Icon>
                        </TouchableOpacity>
                        <Text style={{margin:10, fontSize:20, fontWeight:'bold', fontFamily:'UniformBold'}}>1</Text>
                        <TouchableOpacity>
                            <Icon name="plus-circle" style={{margin:10, fontSize:25, color:'green'}}></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:'#dc3545', borderRadius:7}}>
                        <Icon name="shopping-bag" style={{margin:10, fontSize:25, color:'#fff'}}></Icon>
                        <Text style={{margin:10, fontSize:20, color:'#fff', fontFamily:'FlameBold'}}>R$ {produto.valor}</Text>
                    </View>                    
                </View>
            </View>
            <Rodape />
        </View>
    );
}