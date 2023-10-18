import React, { useEffect } from 'react';
import { View,
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Configuracao = ({ navigation }) => {
  
  useEffect(() => {
    async function checkOnboardingStatus() {
      const onboardingStatus = await AsyncStorage.getItem('onboardingCompleted');

      if (onboardingStatus !== 'true') {
        navigation.navigate('StackRoutes');
      }
    }

    checkOnboardingStatus();
  }, []); 

  const handleLogout = async () => {
    try {
      await signOut(auth);
      const onboardingStatus = await AsyncStorage.getItem('onboardingCompleted');
      if (onboardingStatus === 'true') {
        await AsyncStorage.setItem('onboardingCompleted', 'false');
      }

      navigation.navigate('Logar');
    } catch (error) {
      console.error('Erro ao desconectar o usuário:', error);
    }
  };

      
 return (
   <View style={styles.container}>
        <Text style={styles.Texto}>Configurações</Text>
        <View>
        <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
        >
          <Text>Desconectar</Text>
        </TouchableOpacity>
        </View>
   </View>
  );
}

export default Configuracao;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Texto:{
        fontSize: 20,
    },
    logoutButton:{
      marginTop: 14,
      backgroundColor: '#FF8C00',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
})

