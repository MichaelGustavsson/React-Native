import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ScreenTemplate = ({ children }) => {
  return (
    <LinearGradient
      style={styles.screen}
      colors={['#000000', '#080707', '#1b1a1a', '#4d4b4b']}
    >
      <ImageBackground
        source={require('../assets/images/Batman.jpg')}
        resizeMode='cover'
        style={styles.screen}
        imageStyle={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
};

export default ScreenTemplate;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
