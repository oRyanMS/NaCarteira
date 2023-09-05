import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { MotiView } from 'moti';
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
  const navigation = useNavigation();

 return (
        <MotiView style={styles.containerForm}>
          <Text style={styles.title}>Insira seus dados</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={ () => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Inserir</Text>
        </TouchableOpacity>
      </MotiView>
  );
}

const styles = StyleSheet.create({
  containerForm:{
    flex: 1,
    backgroundColor: '#FF8C00',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  button:{
    position: 'absolute',
    backgroundColor: '#000',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: "#FFF",
    fontWeight: 'bold'
  }
})