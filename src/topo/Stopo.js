import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    topo:{
        position:'absolute', 
        top:0, 
        left:0, 
        right:0, 
        height:120, 
        zIndex:100, 
        backgroundColor:'#ffc63a',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingBottom:5,
    },
    rotulo:{
        fontSize:30,
        color:'#670600',
        fontFamily:'FlameBold',
    }
})