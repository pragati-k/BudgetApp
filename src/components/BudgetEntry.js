import {useState} from 'react';
import {TextInput, View, ScrollView, StyleSheet} from 'react-native';
import {Button, Text} from '@react-native-material/core';
import {useDispatch} from 'react-redux';
import {addBudget} from './../redux/action';

const BudgetEntry = props => {
  const [budget, setBudget] = useState({
    name: '',
    plannedAmount: 0,
    actualAmount: 0,
  });

  const dispatch = useDispatch();

  const handleAddBudget = () => {
    dispatch(addBudget(budget));
  };

  const handleOnchange = (text, input) => {
    setBudget(prevState => ({...prevState, [input]: text}));
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={style.formContainer}>
        <Text variant="h4" style={{textAlign: 'center'}}>
          {' '}
          Enter Your Budget{' '}
        </Text>
        <Text>Name</Text>
        <TextInput
          style={style.formTextInput}
          onChangeText={text => handleOnchange(text, 'name')}
        />
        <Text>Planned Amount</Text>
        <TextInput
          style={style.formTextInput}
          keyboardType="numeric"
          onChangeText={text => handleOnchange(text, 'plannedAmount')}
        />
        <Text>Actual Amount</Text>
        <TextInput
          style={style.formTextInput}
          keyboardType="numeric"
          onChangeText={text => handleOnchange(text, 'actualAmount')}
        />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          style={style.button}
          title="Save"
          color="#ffb3b3"
          onPress={() => handleAddBudget()}
        />
        <Button
          style={style.button}
          title="See all Budget"
          color="#ffb3b3"
          onPress={() => props.navigation.navigate('BudgetList')}
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  formContainer: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 14,
    margin: 14,
  },
  formTextInput: {
    borderColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 10,
    fontSize: 20,
  },
  button: {
    margin: 9,
    width: 250,
  },
});

export default BudgetEntry;
