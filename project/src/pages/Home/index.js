import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';

const list = [
  {
    id: 1,
    label: 'Boleto Luz',
    value: '300,50',
    date: '17/09/2023',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix Cliente',
    value: '1900,50',
    date: '20/09/2023',
    type: 1 //despesas
  },
  {
    id: 3,
    label: 'Pix Cliente 2',
    value: '1900,50',
    date: '20/09/2023',
    type: 1 //despesas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name='Nicolas de Barros'/>
        <Balance saldo='10.00.00' gastos='-500,00'/>

        <Text style={styles.title}>Últimas Movimentações</Text>
        <FlatList 
          style={styles.list}
          data={list}
          keyExtractor={ (item) => String(item.id) }
          showsVerticalScrollIndicator = {false}
          renderItem={ ({ item }) => <Text>TESTE</Text> }
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight:14,
    marginTop: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14,

  }
});
