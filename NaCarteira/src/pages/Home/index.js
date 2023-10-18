import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { format, isValid } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import { db, auth } from '../../config/firebaseconfig';
import { useFocusEffect } from '@react-navigation/native';

const Home = () => {
  const [movements, setMovements] = useState([]);
  const user = auth.currentUser;
  const [loading, setLoading] = useState(true);
  const [movementsWithId, setMovementsWithId] = useState([]);


  // Função para buscar os dados do Firestore e atualizar o estado
  const fetchMovements = async () => {
    if (user) {
      try {
        const movementsCollection = collection(db, `users/${user.uid}/Movements`);
        const snapshot = await getDocs(movementsCollection);
        const newData = [];
      
        snapshot.forEach((doc) => {
          const movementData = doc.data();
          newData.push({
            id: doc.id, // Adicione o ID aqui
            ...movementData,
          });
        });
      
        setMovementsWithId(newData);
      } catch (error) {
        console.error('Erro ao buscar as movimentações:', error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      // Defina "loading" como true novamente para mostrar "Carregando..."
      setLoading(true);
      // Limpe as movimentações anteriores
      setMovements([]);
      // Busque os dados do Firestore
      fetchMovements();
    }, [user])
  );

  return (
    <View style={styles.container}>
      <Header />
      <Balance/>
      <Actions/>
      <Text style={styles.title}> Últimas movimentações</Text>
      {loading ? (
        <Text style={styles.loadingText}>Carregando...</Text>
      ) : (
        <FlatList
        style={styles.list}
        data={movementsWithId}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Movements
            data={{
              ...item,
              date: isValid(new Date(item.date)) ? format(new Date(item.date), "dd/MM/yyyy", { locale: ptBR }) : 'Data inválida',
            }}
          />
        )}
      />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
  loadingText:{
    marginStart: '5%'
  },
});

export default Home;
