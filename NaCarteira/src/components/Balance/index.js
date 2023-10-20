import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db, auth } from '../../config/firebaseconfig';
import { MotiView } from 'moti';

export default function Balance({ entradas, despesas, setDespesas, setEntradas }) {
  const user = auth.currentUser;

  useEffect(() => {
    if (!user || !user.uid) {
      console.log("Usuário não autenticado ou ausente.");
      return;
    }

    const fetchMovimentacoes = async () => {
      try {
        const movimentacoesRef = db.collection(`users/${user.uid}/Movements`);
        const querySnapshot = await movimentacoesRef.get();

        let totalEntradas = 0;
        let totalDespesas = 0;

        querySnapshot.forEach((doc) => {
          const movementData = doc.data();
          if (movementData.type === 'entrada') {
            totalEntradas += movementData.amount;
          } else if (movementData.type === 'despesa') {
            totalDespesas += movementData.amount;
          }
        });

        // Não atualize diretamente as propriedades, use as funções passadas como propriedades.
        // setEntradas(totalEntradas);
        // setDespesas(totalDespesas);
      } catch (error) {
        console.error("Erro ao buscar movimentações:", error);
      }
    };

    fetchMovimentacoes();
  }, [user, setEntradas, setDespesas]);

  const saldo = entradas - despesas;

  return (
    <MotiView
      style={styles.container}
      from={{
        rotateX: '-100deg',
        opacity: 0,
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1,
      }}
      transition={{
        type: 'timing',
        delay: 300,
        duration: 900,
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Entrada</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{entradas.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saída</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{despesas.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.saldo}>{saldo.toFixed(2)}</Text>
        </View>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  itemTitle: {
    fontSize: 20,
    color: '#000',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencySymbol: {
    color: '#000',
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    color: '#2ecc71',
  },
  expenses: {
    fontSize: 22,
    color: '#e74c3c',
  },
  saldo: {
    fontSize: 22,
  }
});
