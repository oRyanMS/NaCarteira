import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    Dimensions
} from 'react-native';
import { MotiImage, MotiView } from 'moti';
import { useNavigation } from '@react-navigation/native'


export default function Welcome() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      
      <View style={styles.containerLogo}>
        <MotiImage
        source={require('../../assets/WalletinWelcome.png')}
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
        <View style={styles.centerText}>
        <Text style={styles.title}>Faça cada centavo</Text>
        <Text style={styles.penatitle}>valer a pena!</Text>
        </View>
        <View style={styles.centerSubTitle}>
        <Text style={styles.subtitle}>Monitore seus gastos</Text>
        <Text style={styles.subtitle2}>com a ajuda do Walletin.</Text>
        </View>
        <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('Login')}>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderCurve: 10,
    borderRadius: 400,
    marginTop: 50,
    marginBottom: 70,
    paddingTop: 80,
    paddingBottom: 14,
  },
  containerForm:{
    flex: 1,
    backgroundColor: '#FF8C00',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  centerText:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerSubTitle:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  penatitle:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle:{
    fontSize: 24,
  },
  subtitle2:{
    fontSize: 24,
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