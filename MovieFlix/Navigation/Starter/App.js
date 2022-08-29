import { useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from './utilities/constants/colors';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLoggedInHandler = (value) => {
    if (value) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  let screen = <LoginScreen onLogin={isLoggedInHandler} />;

  if (isLoggedIn) {
    screen = <MainScreen />;
  }
  return (
    <>
      <StatusBar barStyle='light-content' />
      <LinearGradient colors={Colors.gradient} style={styles.screen}>
        <ImageBackground
          source={require('./assets/images/Batman.jpg')}
          resizeMode='cover'
          style={styles.screen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
