import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn/Index";
import Home from "../pages/Home";
import Categoria from "../pages/Categoria";
import Carteira from "../pages/Carteira";
import Compra from "../pages/Compra";
import Entrada from "../pages/Entrada";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
        
            <Stack.Screen 
            name="Welcome" 
            component={Welcome}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen 
            name="SignIn" 
            component={SignIn}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen 
            name="Categoria" 
            component={Categoria}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen 
            name="Carteira" 
            component={Carteira}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen 
            name="Compra" 
            component={Compra}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen 
            name="Entrada" 
            component={Entrada}
            options={{
                headerShown: false
            }}
            />
        </Stack.Navigator>
    )
}