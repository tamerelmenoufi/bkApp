import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    rodape:{
        position:'absolute', 
        bottom:0, 
        left:0, 
        right:0, 
        height:70, 
        zIndex:100, 
        backgroundColor:'#fff'
    },
    barra:{
        marginVertical:0,
        marginHorizontal:5,
        height:60,
        borderRadius:25, 
        backgroundColor:'#b60710', 
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center'
    },
    logo:{
        width:60,
        height:60
    },
    iconeMenu:{
        fontSize:25,
        // color:'#fefc3d',
        color:'#5a0103'
    },
    iconeText:{
        color:'#5a0103',
        fontSize:10,
        justifyContent:'center',
        alignItems:'center',
        padding:1,
        fontWeight:'bold'
    },
    botao:{
        flexDirection:'column', 
        alignItems:'center'
    },
})