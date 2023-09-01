import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,80',
    date: '17/09/2023',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix',
    value: '1.200,00',
    date: '14/09/2023',
    type: 1 //entrada
  },
  {
    id: 3,
    label: 'Pix Mãe',
    value: '100,00',
    date: '21/09/2023',
    type: 0 //despesas
  },
]


export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Ryan Maximiano"/>

        <Balance saldo="9.250,90" gastos="-527,00"/>

        <Text style={styles.title}> Últimas movimentações</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dadada',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
});
