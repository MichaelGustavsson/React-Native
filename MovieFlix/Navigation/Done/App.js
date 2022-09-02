import { Fragment } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from './screens/MainScreen';
import MovieCategoriesScreen from './screens/MoviesCategoriesScreen';
import SeriesCategoryScreen from './screens/SeriesCategoryScreen';
import SportsCategoryScreen from './screens/SportsCategoryScreen';
import DocumentaryCategoryScreen from './screens/DocumentaryCategoryScreen';
import MovieOverViewScreen from './screens/MovieOverviewScreen';
import DetailsScreen from './screens/DetailsScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import { Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/ui/IconButton';

import Colors from './utilities/constants/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#000000' },
        headerTintColor: '#ffffff',
        tabBarStyle: { backgroundColor: Colors.primaryBackground600 },
        tabBarActiveTintColor: Colors.primaryText,
        tabBarInactiveTintColor: Colors.secondaryText,
      }}
    >
      <Tab.Screen
        name='Main'
        component={MainScreen}
        options={{
          title: 'Start sida',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='UserProfile'
        component={UserProfileScreen}
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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
            name='Tab'
            component={TabNavigator}
            options={{ headerShown: false, title: 'Start' }}
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
          <Stack.Screen name='Detaljer' component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}
