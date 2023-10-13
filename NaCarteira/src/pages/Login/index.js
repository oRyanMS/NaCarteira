import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../config/firebaseconfig"

import { MotiView } from 'moti';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      // Realiza o login com o email e senha fornecidos
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Se o login for bem-sucedido, você vai para a tela principal
      navigation.navigate('Home'); // Navega para a tela principal do aplicativo
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
          onPress={ () => navigation.navigate('SignIn')}
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