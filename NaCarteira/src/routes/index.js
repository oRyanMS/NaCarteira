import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn/Index";
import Home from "../pages/Home";
import FirstPage from "../pages/SignIn/first";
import SecondPage from "../components/Header/second";


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            
            <Stack.Screen 
            name="FirstPage"
            component={FirstPage}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen 
            name="SecondPage" 
            component={SecondPage}
            options={{
                headerShown: false
            }}
            />
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
        </Stack.Navigator>
    )
}