import { StyleSheet, View, ScrollView} from 'react-native';
import BannerPromocoes from './promocoes/banner';
import HomeBotoes from './categorias/botoes';
import Rodape from '../rodape/rodape';
import { style } from './Shome';

export default function Home(){

    return (
        <>
        <ScrollView style={style.area}>
            <View style={style.container}>
                <View style={style.areaBanner}>
                    <BannerPromocoes />
                </View>
                <View style={style.area}>
                    <HomeBotoes />
                </View>
            </View>
        </ScrollView>
        <Rodape opc="home" />
        </>
    );
}