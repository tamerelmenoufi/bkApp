import {useContext, useState, useEffect} from 'react';
import Carousel from 'react-native-banner-carousel';
import { Global } from '../../contexts/global';
import { Image, ImageBackground, View, Text} from 'react-native';
import { style, BannerWidth } from './Sbanner';


const images = [
    require('../../img/banner.png'),
    require('../../img/banner.png'),
    require('../../img/banner.png')
]



export default function BannerPromocoes() {

    const  dados  = useContext(Global)

    // console.log(dados.produtos)

        return (
            <View style={style.container}>
                <Carousel
                    autoplay={false}
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                    pageIndicatorContainerStyle={style.carroselPageIndicador}
                >
                    {
                    Array.isArray(dados.produtos) && dados?.produtos?.map((e)=>(
                        (e.promocao > 0 && e.situacao == 1)&&(<View key={e.codigo} style={style.slide}>  
                            <ImageBackground resizeMode="cover" style={style.slide} source={{ uri:"https://painel.bkmanaus.com.br/src/produtos/icon/"+e.capa}} />
                        </View>)                   
                    ))
                    }
                </Carousel>
                <View style={style.setaPrincipal}>
                    <View style={style.setaLaterais}></View>
                        <Image style={style.seta} source={ require('../../img/banner_seta.png') } />
                    <View style={style.setaLaterais}></View>
                </View>
            </View>
        );
}