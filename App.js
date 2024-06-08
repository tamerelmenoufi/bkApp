import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import addFontes from './src/contexts/fontes';
import Home from "./src/home/home";
import Combos from './src/combos/combos';
import Produtos from './src/produtos/produtos';
import Promocoes from './src/promocoes/promocoes';
import SessaoGlobal from "./src/contexts/global";
import Login from './src/login/login';
import Ativar from './src/login/ativar';
import Perfil from './src/cliente/cliente';
import Pedido from './src/pedido/pedido';
import Pagar from './src/pagar/pagar';
import Contato from './src/contato/contato';
import Detalhes from './src/produtos/detalhes';


const Stack = createNativeStackNavigator();

export default function App(){

    addFontes()

    return (
      <SessaoGlobal>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Stack.Screen name="Combos" component={Combos} options={{headerShown:false}} />
            <Stack.Screen name="Produtos" component={Produtos} options={{headerShown:false}} />
            <Stack.Screen name="Promocoes" component={Promocoes} options={{headerShown:false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="Ativar" component={Ativar} options={{headerShown:false}} />
            <Stack.Screen name="Perfil" component={Perfil} options={{headerShown:false}} />
            <Stack.Screen name="Pedido" component={Pedido} options={{headerShown:false}} />
            <Stack.Screen name="Pagar" component={Pagar} options={{headerShown:false}} />
            <Stack.Screen name="Contato" component={Contato} options={{headerShown:false}} />
            <Stack.Screen name="Detalhes" component={Detalhes} options={{headerShown:false}} />
          </Stack.Navigator>
      </NavigationContainer>
     </SessaoGlobal>
    );
}