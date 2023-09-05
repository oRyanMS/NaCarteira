import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { MotiImage, MotiView } from 'moti';
import { useNavigation } from '@react-navigation/native'


export default function Welcome() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      
      <View style={styles.containerLogo}>
        <MotiImage
        source={require('../../assets/NaCarteiraLogo.png')}
        style={{ width: '100%' }}
        resizeMode="contain"
        from={{
          rotateY: '-180deg'
        }}
        animate={{
          rotateY: '0deg'
        }}
        transition={{
          delay: 80,
          duration: 900,
        }}
        />
      </View>

      <MotiView 
      style={styles.containerForm}
      from={{
        translateY: 700,
      }}
      animate={{
        translateY: 0,
      }}
      transition={{
        type: 'timing',
        duration: 600,
      }}
      >
        <Text style={styles.title}>Faça cada centavo valer a pena, monitore seus gastos com ajuda do Walletin</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Começar</Text>
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
  containerLogo:{
    flex: 2,
    backgroundColor: '#dadada',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm:{
    flex: 1,
    backgroundColor: '#FF8C00',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 12,
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