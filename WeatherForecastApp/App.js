import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#560856' },
            headerTintColor: '#ffffff',
            title: 'Väder',
          }}
        >
          <Stack.Screen
            name='Main'
            component={MainScreen}
            options={({ navigation }) => ({
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon='bookmark-o'
                  color={tintColor}
                  size={18}
                  onPress={() => {
                    navigation.navigate('Favourites');
                  }}
                />
              ),
            })}
          />
          <Stack.Screen name='Favourites' component={FavouriteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
