import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { MotiView } from 'moti';

const Categoria = () => {
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
                <Text style={styles.tileheader}>Categorias</Text>
            </MotiView>
        </View>
    )
}

export default Categoria;

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

})