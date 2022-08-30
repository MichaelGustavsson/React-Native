import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // useLegacyImplementation={true}
        screenOptions={{
          headerStyle: { backgroundColor: '#7c4f4f' },
          headerTintColor: '#99d0f6',
          // drawerStyle: { backgroundColor: '#b5f0f0' },
        }}
      >
        <Tab.Screen
          name='Main'
          component={MainScreen}
          options={{
            tabBarIcon: (color, size) => (
              <Ionicons name='home' size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
