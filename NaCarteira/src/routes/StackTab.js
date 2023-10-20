import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn/Index";
import Login from "../pages/Login";
import Carteira from "../pages/Carteira";
import Categoria from "../pages/Categoria";
import Compra from "../pages/Compra";
import Configuracao from "../pages/Configuracao";
import Entrada from "../pages/Entrada";
import TabRoutes from "./BottomTab";
import Home from "../pages/Home";
import Dicas from "../pages/Dicas";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen 
            name="Welcome" 
            component={Welcome}
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
            name="Login" 
            component={Login}
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
            name="TabRoutes" 
            component={TabRoutes}
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
            name="Categoria" 
            component={Categoria}
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
            name="Configuracao" 
            component={Configuracao}
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
            <Stack.Screen 
            name="Dicas" 
            component={Dicas}
            options={{
                headerShown: false
            }}
            />
        </Stack.Navigator>
    )
}