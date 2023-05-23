import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {DataTable} from 'react-native-paper';

ScrollView;
const BudgetList = () => {
  const budgetData = useSelector(state => state.reducer);

  return (
    <View>
      <ScrollView style={styles.container}>
        <DataTable>
          <DataTable.Header style={{backgroundColor: '#ffb3b3'}}>
            <DataTable.Title textStyle={{fontSize: 15}}>Name</DataTable.Title>
            <DataTable.Title textStyle={{fontSize: 15}}>
              Planned Amount
            </DataTable.Title>
            <DataTable.Title textStyle={{fontSize: 15}} numeric>
              Actual Amount
            </DataTable.Title>
          </DataTable.Header>

          {budgetData.map((item, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell textStyle={{fontSize: 13}}>
                {item.name}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{fontSize: 13}} numeric>
                {item.plannedAmount}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{fontSize: 13}} numeric>
                {item.actualAmount}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 3,
  },
});

export default BudgetList;
