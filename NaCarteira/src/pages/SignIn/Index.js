import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../config/firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert,
} from 'react-native';

import { MotiView } from 'moti';

const SignIn = ({navigation}) => {
  const [nome, setNome] = useState("");
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
  }, []);

  const handleCadastro = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      // Atualize o perfil do usuário para incluir o nome
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: nome,
      });
    
      navigation.navigate("TabRoutes");
    } catch (error) {
      Alert.alert("Erro ao cadastrar: " + error.message);
    }
  };


  return(
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
          type:"timing",
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
            <Text style={styles.title}> Nome </Text>
            <TextInput
            placeholder="Digite seu nome.."
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />
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
              onPress={handleCadastro}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonLogin}
            onPress={ () => navigation.navigate('Login')}
            >
            <Text style={styles.pageLogin}>Já tem uma conta? Faça login</Text>
            </TouchableOpacity>
            
          </MotiView>
      </View>
  );
}

export default SignIn;

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