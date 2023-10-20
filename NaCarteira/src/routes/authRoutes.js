import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackRoutes from './StackTab';
import TabRoutes from './BottomTab';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  useEffect(() => {
    async function checkOnboardingStatus() {
      const onboardingStatus = await AsyncStorage.getItem('onboardingCompleted');
      console.log('onboardingStatus:', onboardingStatus);
  
      if (onboardingStatus === 'true') {
        console.log('Setting onboardingCompleted to true');
        setOnboardingCompleted(true);
      }
    }
  
    checkOnboardingStatus();
  }, []);
  

  // Redirecione para TabRoutes se o onboarding estiver completo e o usuário estiver autenticado
  if (onboardingCompleted) {
    return (
      <Stack.Navigator initialRouteName="TabRoutes">
        <Stack.Screen
          name="TabRoutes"
          component={TabRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StackRoutes"
          component={StackRoutes}
          options={{ headerShown: false}}
          
        />
        <Stack.Screen
          name="AuthRoutes"
          component={AuthRoutes}
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
    );
  }

  // Caso contrário, redirecione para as rotas de introdução ou cadastro
  return (
    <Stack.Navigator initialRouteName="StackRoutes">
      <Stack.Screen
        name="StackRoutes"
        component={StackRoutes}
        options={{ headerShown: false}}
        
      />
      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuthRoutes"
        component={AuthRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
