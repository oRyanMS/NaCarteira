import { NavigationContainer } from '@react-navigation/native'
import AuthRoutes from './authRoutes'

export default function Routes() {
    return(
        <NavigationContainer>
            <AuthRoutes/>
        </NavigationContainer>
    )
}