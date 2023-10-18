import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MotiView } from 'moti';

export default function Balance() {
  const [entradas, setEntradas] = useState(0);
  const [despesas, setDespesas] = useState(0);

  useEffect(() => {
    // Substitua isso com sua lógica para buscar os dados das movimentações
    const movimentacoes = [
      {
        type: true,
        value: '1200.00', // Valor de entrada
      },
      {
        type: false,
        value: '300.80', // Valor de despesa
      },
      // Adicione mais movimentações conforme necessário
    ];

    let entradasTotal = 0;
    let despesasTotal = 0;

    movimentacoes.forEach((movimentacao) => {
      if (movimentacao.type) {
        entradasTotal += parseFloat(movimentacao.value.replace(',', '.'));
      } else {
        despesasTotal += parseFloat(movimentacao.value.replace(',', '.'));
      }
    });

    setEntradas(entradasTotal);
    setDespesas(despesasTotal);
  }, []);

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
          <Text style={styles.balance}>{(entradas - despesas).toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saída</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{despesas.toFixed(2)}</Text>
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
});
