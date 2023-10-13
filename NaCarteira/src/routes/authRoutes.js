import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
      if (onboardingStatus === 'true') {
        setOnboardingCompleted(true);
      }
    }

    checkOnboardingStatus();
  }, []);

  return (
      <Stack.Navigator>
        {onboardingCompleted ? (
          <Stack.Screen
            name="TabRoutes"
            component={TabRoutes}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="StackRoutes"
            component={StackRoutes}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
  );
}
