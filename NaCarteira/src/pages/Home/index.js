import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Animated, PanResponder } from 'react-native';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { format, isValid } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Header from '../../components/Header';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance'
import { db, auth } from '../../config/firebaseconfig';
import { useFocusEffect } from '@react-navigation/native';

const Home = () => {
  const [movementsWithId, setMovementsWithId] = useState([]);
  const [entradas, setEntradas] = useState(0);
  const [despesas, setDespesas] = useState(0);

  const user = auth.currentUser;

  const itemSwipeState = movementsWithId.map(() => new Animated.Value(0));

  const panResponder = itemSwipeState.map((x, index) =>
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        x.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -100) {
          deleteMovement(movementsWithId[index].id);
        }
        Animated.spring(x, { toValue: 0, useNativeDriver: false }).start();
      },
    })
  );

  const deleteMovement = async (movementId) => {
    if (user) {
      try {
        await deleteDoc(doc(db, `users/${user.uid}/Movements/${movementId}`));
        setMovementsWithId((movements) =>
          movements.filter((movement) => movement.id !== movementId)
        );
      } catch (error) {
        console.error('Erro ao excluir a movimentação:', error);
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      if (user) {
        fetchMovements();
      }
    }, [user])
  );

  const fetchMovements = async () => {
    if (user) {
      try {
        const movementsCollection = collection(db, `users/${user.uid}/Movements`);
        const snapshot = await getDocs(movementsCollection);
        const newData = [];

        snapshot.forEach((doc) => {
          const movementData = doc.data();
          newData.push({
            id: doc.id,
            ...movementData,
          });
        });

        setMovementsWithId(newData);

        // Calcular entradas e despesas
        let totalEntradas = 0;
        let totalDespesas = 0;

        newData.forEach((movement) => {
          if (movement.type === 'entrada') {
            totalEntradas += movement.amount;
          } else if (movement.type === 'despesa') {
            totalDespesas += movement.amount;
          }
        });

        setEntradas(totalEntradas);
        setDespesas(totalDespesas);
      } catch (error) {
        console.error('Erro ao buscar as movimentações:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Balance entradas={entradas} despesas={despesas} setEntradas={setEntradas} setDespesas={setDespesas} />
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={movementsWithId}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Animated.View
            {...panResponder[index].panHandlers}
            style={[
              styles.movement,
              { transform: [{ translateX: itemSwipeState[index] }]},
            ]}
          >
            <View style={styles.movementContent}>
              <Movements
                data={{
                  ...item,
                  date: isValid(new Date(item.date))
                    ? format(new Date(item.date), 'dd/MM/yyyy', { locale: ptBR })
                    : 'Data inválida',
                }}
              />
            </View>
          </Animated.View>
        )}
      />
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
  movement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  movementContent: {
    flex: 1,
  },
});

export default Home;
