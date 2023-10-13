import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Actions() {
    const navigation = useNavigation();

 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
    
    <TouchableOpacity 
        style={styles.actionButton}
        onPress={() =>
            navigation.navigate('Entrada')
        }>
        <View style={styles.areaButton}>
            <AntDesign name='addfolder' size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
    </TouchableOpacity>

    <TouchableOpacity 
        style={styles.actionButton}
        onPress={() =>
            navigation.navigate('Compra')
        }>
        <View style={styles.areaButton}>
            <AntDesign name='shoppingcart' size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelButton}>Compras</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
        style={styles.actionButton}
        onPress={() =>
            navigation.navigate('Carteira')
        }>
        <View style={styles.areaButton}>
            <AntDesign name='creditcard' size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.actionButton}
        onPress={() =>
            navigation.navigate('Categoria')
        }
    >
        <View style={styles.areaButton}>
            <AntDesign name='appstore-o' size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelButton}>Categorias</Text>
    </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        marginEnd: 14,
        marginStart: 14,
    },
    actionButton:{
        alignItems: 'center',
        marginRight: 32,
    },
    areaButton:{
        backgroundColor: '#dedede',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})