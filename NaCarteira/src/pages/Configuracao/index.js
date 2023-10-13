import React from 'react';
import { View,
    Text, 
    StyleSheet,
} from 'react-native';

export default function Configuracao() {
 return (
   <View style={styles.container}>
        <Text style={styles.Texto}>Configurações</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text:{
        fontSize: 20,
    },
})