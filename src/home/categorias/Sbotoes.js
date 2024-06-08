import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container:{
        margin:15, paddingBottom:90
    },
    botoesArea:{
        flex:1, height:70, marginTop:10
    },
    boatoBg:{
        flex:1, borderRadius:10,padding:10, borderBlockColor:'red'
    },  
    botao:{
        flexDirection:'row', justifyContent:'space-between'
    },
    botaoIcone:{
        flex:1, backgroundColor:'yellow', borderRadius:8, height:80, marginEnd:7.5, marginTop:10
    },
    botaoTexto:{
        flex:1, backgroundColor:'yellow', borderRadius:8, height:80, marginStart:7.5, marginTop:10
    }

})