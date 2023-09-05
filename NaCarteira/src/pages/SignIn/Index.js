import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { MotiView } from 'moti';
import { useNavigation } from '@react-navigation/native'



export default function SignIn() {
  const navigation = useNavigation();
  const [nome, setNome] = useState(false);
  
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
            style={styles.input}
            onChange={(e) => setNome(e)}
            />
            <TouchableOpacity 
              style={styles.button}
              onPress={ () => navigation.navigate('Home',{nome})}>
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
          </MotiView>
      </View>
  );
}

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
  }
})