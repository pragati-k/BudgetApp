import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BudgetEntry from './src/components/BudgetEntry';
import BudgetList from './src/components/BudgetList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BudgetEntry"
          component={BudgetEntry}
          options={{
            title: 'Budget Entry',
          }}
        />
        <Stack.Screen
          name="BudgetList"
          component={BudgetList}
          options={{title: 'Budget Entry Listing'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
