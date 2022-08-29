import { Fragment } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import MovieCategoriesScreen from './screens/MoviesCategoriesScreen';
import SeriesCategoryScreen from './screens/SeriesCategoryScreen';
import SportsCategoryScreen from './screens/SportsCategoryScreen';
import DocumentaryCategoryScreen from './screens/DocumentaryCategoryScreen';
import MovieOverViewScreen from './screens/MovieOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Fragment>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#ffffff',
            contentStyle: { backgroundColor: '#000000' },
          }}
        >
          <Stack.Screen
            name='Main'
            component={MainScreen}
            options={{
              title: 'Start sida',
            }}
          />
          <Stack.Screen name='Filmer' component={MovieCategoriesScreen} />
          <Stack.Screen
            name='Serier'
            component={SeriesCategoryScreen}
            options={{
              title: 'Serier kategorier',
            }}
          />
          <Stack.Screen name='Sport' component={SportsCategoryScreen} />
          <Stack.Screen
            name='Dokumentärer'
            component={DocumentaryCategoryScreen}
          />
          <Stack.Screen name='Sammanfattning' component={MovieOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}
