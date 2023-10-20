import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Categoria = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/WalletinSemFundo.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Funcionalidade nova em breve</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FF8C00'
  },
  image: {
    width: 400, 
    height: 400, 
  },
  text: {
    fontSize: 26,
    marginTop: 16,
    fontWeight:'bold'
  },
});

export default Categoria;
