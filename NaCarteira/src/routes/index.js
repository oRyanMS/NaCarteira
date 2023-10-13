import { NavigationContainer } from '@react-navigation/native'
import TabRoutes from './BottomTab'

export default function Routes() {
    return(
        <NavigationContainer>
            <TabRoutes/>
        </NavigationContainer>
    )
}