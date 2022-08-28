import { View, Text, StyleSheet, Image } from 'react-native';

import MainButton from '../components/ui/MainButton';
import Colors from '../utilities/constants/colors';
import Title from '../components/ui/Title';
import AppHeader from '../components/ui/AppHeader';

const Welcome = () => {
  return (
    <View style={styles.screen}>
      {/* <Text style={styles.text}>MovieFlix</Text> */}
      <AppHeader>MovieFlix</AppHeader>
      <Title>Vad vill du se på idag?</Title>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <MainButton>Serier</MainButton>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton>Filmer</MainButton>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <MainButton>Dokumentärer</MainButton>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton>Sport</MainButton>
        </View>
      </View>
      <Title>Vi rekommenderar</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/The_Batman.jpg')}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: Colors.primary,
    fontSize: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  buttonContainer: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    opacity: 0.6,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
});
