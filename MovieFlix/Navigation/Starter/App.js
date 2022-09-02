import { useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import MovieCategoriesScreen from './screens/MovieCategoriesScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLoggedInHandler = (value) => {
    if (value) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  let screen = <LoginScreen onLogIn={isLoggedInHandler} />;

  if (isLoggedIn) {
    screen = <MainScreen />;
  }

  return (
    <>
      <StatusBar barStyle='light-content' />
      <LinearGradient
        colors={['#000000', '#080707', '#1b1a1a', '#4d4b4b']}
        style={styles.screen}
      >
        <ImageBackground
          source={require('./assets/images/Batman.jpg')}
          resizeMode='cover'
          style={styles.screen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
          {/* <SafeAreaView style={styles.screen}>
            <MovieCategoriesScreen />
          </SafeAreaView> */}
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
