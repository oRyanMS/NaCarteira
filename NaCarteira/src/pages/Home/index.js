import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

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
    label: 'Salário',
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
  {
    id: 4,
    label: 'Mesada',
    value: '500,00',
    date: '20/09/2023',
    type: 1 //entrada
  },
]


export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Ryan Maximiano"/>

        <Balance saldo="9.250,90" gastos="-527,00"/>

        <Actions/>
      

        <Text style={styles.title}> Últimas movimentações</Text>

        <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item}/>}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
