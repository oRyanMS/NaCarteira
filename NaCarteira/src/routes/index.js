import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from "../pages/Welcome"
import Singin from "../pages/Singin/Index"


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Welcome" 
            component={Welcome}
            />
            <Stack.Screen 
            name="Singin" 
            component={Singin}
            />
        </Stack.Navigator>
    )
}