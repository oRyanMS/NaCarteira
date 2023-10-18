import React from 'react';
import { View,
    Text, 
    StyleSheet,
    Button
} from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebaseconfig';

export default function Configuracao({navigation}) {

    const handleLogout = async () => {
        try {
          await signOut(auth);
          // O usuário foi desconectado com sucesso
          navigation.navigate('StackRoutes')
        } catch (error) {
          // Ocorreu um erro durante o logout
          console.error('Erro ao desconectar o usuário:', error);
        }
      };
 return (
   <View style={styles.container}>
        <Text style={styles.Texto}>Configurações</Text>
        <Button title="Sair" onPress={handleLogout} />
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Texto:{
        fontSize: 20,
    },
})

