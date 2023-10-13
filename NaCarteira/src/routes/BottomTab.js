import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AntDesign } from '@expo/vector-icons';
import CustomPlusIcon from "./customIcons";

import Home from "../pages/Home"
import Carteira from "../pages/Carteira"
import Categoria from "../pages/Categoria"
import Compra from "../pages/Compra"
import Entrada from "../pages/Entrada"
import Configuracao from "../pages/Configuracao";


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({color, size}) => <AntDesign name='home' size={size} color={color} />,
                tabBarLabel: ""
            }}
            />
            <Tab.Screen
            name="Entrada"
            component={Entrada}
            options={{
                tabBarIcon: () => <CustomPlusIcon />,
                tabBarLabel: '', 
              }}
            />
            <Tab.Screen
            name="Configuracao"
            component={Configuracao}
            options={{
                tabBarIcon: ({color, size}) => <AntDesign name='setting' color={color} size={size} />,
                tabBarLabel: "",
            }}
            />
        </Tab.Navigator>

    )
}