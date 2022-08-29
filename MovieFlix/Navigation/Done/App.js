import { Fragment, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import MovieCategoriesScreen from './screens/MoviesCategoriesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Fragment>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Main' component={MainScreen} />
          <Stack.Screen name='Filmer' component={MovieCategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}
