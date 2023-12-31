import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import{
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Text
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti';


const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const Header = () => {
    const [nomeDoUsuario, setNomeDoUsuario] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setNomeDoUsuario(user.displayName || 'Walletin');
          }
        });
      }, []);

    return (
        <View style={styles.container}>
            <MotiView style={styles.content} 
            from={{
                translateY: -150,
                opacity: 0,
            }}
            animate={{
                translateY: 0,
                opacity: 1,
            }}
            transition={{
                type:"timing",
                duration: 800,
                delay: 300,
            }}>
                <MotiText style={styles.username}
                from={{
                    translateX: -300
                }}
                animate={{
                    translateX: 0,
                }}
                transition={{
                    type: "timing",
                    duration: 800,
                    delay: 800,
                }}
                >
                <Text style={styles.usernameSaudacao}>Olá,</Text> {nomeDoUsuario}
                </MotiText>

                <View style={styles.userAndSettings}>
                <TouchableOpacity 
                activeOpacity={0.9} 
                style={styles.buttonSettings}
                onPress={ () => navigation.navigate('Configuracao')}
                >
                    <Feather name='settings' size={20} color={"#fff"}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name='user' size={27} color={"#fff"}/>
                </TouchableOpacity>
                </View>
            </MotiView>
        </View>
    );
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FF8C00',
        paddingTop: statusBarHeigth,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    usernameSaudacao:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'normal'
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/2,
    },
    userAndSettings:{
        flexDirection: 'row',
    },
    buttonSettings:{
        width: 30,
        height: 30,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/2,
        marginTop: '10%',
        marginRight: 10,
    }
})