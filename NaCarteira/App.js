import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import AuthRoutes from "./src/routes/authRoutes";


export default function App() {
  return (
    <NavigationContainer>
      <AuthRoutes/>
    </NavigationContainer>
  );
}
