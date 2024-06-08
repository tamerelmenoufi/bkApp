import { StyleSheet, Dimensions } from "react-native";


export const BannerWidth = Dimensions.get('window').width;
export const BannerHeight = 400;

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'flex-start'

    },
    carroselPageIndicador:{
        right:20, 
        bottom:50
    },
    setaPrincipal:{
        position:'absolute', bottom:0, height:30, width:'100%', flexDirection:'row'
    },
    setaLaterais:{
        flex:1, backgroundColor:'#fff'
    },
    seta:{
        width: 110, height: 30
    },
    slide:{
        width: BannerWidth, height: BannerHeight
    }

});