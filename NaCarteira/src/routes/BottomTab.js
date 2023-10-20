import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AntDesign } from '@expo/vector-icons';
import CustomPlusIcon from "./customIcons";
import Home from "../pages/Home"
import Entrada from "../pages/Entrada"
import Dicas from "../pages/Dicas";


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
            screenOptions={{headerShown: true}}
            />
            <Tab.Screen
            name="Dicas"
            component={Dicas}
            options={{
                tabBarIcon: ({color, size}) => <AntDesign name='book' color={color} size={size} />,
                tabBarLabel: "",
            }}
            />
        </Tab.Navigator>

    )
}