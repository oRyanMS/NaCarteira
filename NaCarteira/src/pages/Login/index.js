import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MotiView } from 'moti';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    async function checkOnboardingStatus() {
      const onboardingStatus = await AsyncStorage.getItem('onboardingCompleted');

      if (onboardingStatus === 'true') {
        // Navegue para a tela principal ou apropriada após a conclusão do onboarding.
        navigation.navigate('TabRoutes');
      }
    }

    checkOnboardingStatus();
  }, []); // O array vazio indica que este efeito será executado somente uma vez, após a montagem do componente.

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      // Realiza o login com o email e senha fornecidos
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Recupere o nome do usuário do perfil
      const user = userCredential.user;
      const nomeDoUsuario = user.displayName;

      // Agora você tem o nome do usuário disponível na variável nomeDoUsuario

      // Verifique e atualize o status do onboarding
      const onboardingStatus = await AsyncStorage.getItem('onboardingCompleted');
      if (onboardingStatus !== 'true') {
        // Defina o status do onboarding como 'true' se ainda não estiver definido
        await AsyncStorage.setItem('onboardingCompleted', 'true');
      }

      // Navegue para a tela principal após o login
      navigation.navigate('TabRoutes');
    } catch (error) {
      Alert.alert("Erro ao fazer login: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <MotiView
        style={styles.containerheader}
        from={{
          translateX: -150
        }}
        animate={{
          translateX: 0
        }}
        transition={{
          type: "timing",
          duration: 700,
          delay: 200,
        }}
      >
        <Text style={styles.tileheader}>Bem-vindo(a)</Text>
      </MotiView>
      <MotiView
        style={styles.containerForm}
        from={{
          translateY: 300
        }}
        animate={{
          translateY: 0
        }}
        transition={{
          type: "timing",
          duration: 300,
        }}
      >
        <Text style={styles.title}> E-mail </Text>
        <TextInput
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <Text style={styles.title}> Senha </Text>
        <TextInput
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.pageLogin}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#dadada',
  
    },
    containerheader:{
      marginTop: '14%',
      marginBottom: '8%',
      paddingStart: '5%',
    },
    tileheader:{
      fontSize: 28,
      fontWeight: 'bold'
    },
    containerForm:{
      backgroundColor: '#FF8C00',
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%'
    },
    title:{
      fontSize: 25,
      marginTop: 28,
    },
    input:{
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
    },
    button:{
      backgroundColor: '#dadada',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText:{
      fontSize: 18,
      fontWeight: 'bold'
    },
    buttonLogin:{
      width: '100%',
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
