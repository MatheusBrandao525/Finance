import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Pix de Matheus Felipe',
    value: '6.000,00',
    date: '31/12/2022',
    type: 1 // Entradas
  },
  {
    id: 2,
    label: 'Pag. boleto hospedagem',
    value: '450,00',
    date: '31/12/2022',
    type: 0 // Despesas
  },
  {
    id: 3,
    label: 'Pix env. Felipe Brandão',
    value: '124,00',
    date: '31/12/2022,',
    type: 0
  }
]


export default function Home() {
  return (
      <View style={styles.container}>
        <Header/>
        <Balance saldo="5.426,00" gastos="-574,00"/>
        <Actions/>
        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={ (item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Moviments data={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin:14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,

  }
});
