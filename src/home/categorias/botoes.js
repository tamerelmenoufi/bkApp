import { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground, Image} from 'react-native';
import { style } from './Sbotoes';
import { Global } from '../../contexts/global';
import { useNavigation } from '@react-navigation/native';

export default function HomeBotoes(){

    const  dados  = useContext(Global)
    const navigation = useNavigation();

    const [categorias, setCategorias] = useState({})

    useEffect(()=>{
        // console.log(dados.categorias)
        setCategorias(dados.categorias)
    },[dados])


    const ListaCategorias = (list) => (
        <TouchableOpacity style={style.botoesArea} onPress={() => navigation.navigate(((list.codigo == 8)?'Combos':'Produtos'), {categoria:list.codigo})}>
            <ImageBackground resizeMode="contain" borderRadius={15} style={style.boatoBg} source={{uri:`https://painel.bkmanaus.com.br/src/categorias/icon/${list.icon}`}}>
            </ImageBackground>
        </TouchableOpacity>
    )

    return(
        <View style={style.container}>
            {/* {
                categorias?.map((d, i) => (
                    <TouchableOpacity style={style.botoesArea} onPress={() => navigation.navigate('Combos', {categoria:1})}>
                        <Text>Teste: {dados.nome}</Text>
                        <Text>Endereço: {dados.endereco}</Text>
                        <Text>Telefone: {dados.telefone}</Text>
                        <Text>Sexo: {dados.Verifica('m')}</Text>
                    </TouchableOpacity>                    
                ))
            } */}

            <TouchableOpacity style={{flex:1, height:120, marginHorizontal:5, borderRadius:7}} onPress={() => navigation.navigate('Promocoes', {categoria:1})}>
                <ImageBackground resizeMode="cover" borderRadius={15} style={style.boatoBg} source={{uri:"https://painel.bkmanaus.com.br/app/img/promocoes.png"}}>
                </ImageBackground>
            </TouchableOpacity>

            <FlatList
                data={categorias}
                renderItem={({item}) => ListaCategorias(item) }
                numColumns={2}
            />

        </View>
    )
}