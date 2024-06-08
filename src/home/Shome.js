import { StyleSheet } from "react-native";
import { BannerHeight } from './promocoes/Sbanner';

export const style = StyleSheet.create({
    aera:{
        flex:1
    },
    areaBanner:{
        height:BannerHeight
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'

    },
});