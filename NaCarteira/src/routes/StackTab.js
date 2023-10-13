import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn/Index";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
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
            name="home" 
            component={Home}
            options={{
                headerShown: false
            }}
            />
        </Stack.Navigator>
    )
}