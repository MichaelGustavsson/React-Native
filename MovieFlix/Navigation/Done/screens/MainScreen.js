import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../utilities/constants/colors';
import MainButton from '../components/ui/MainButton';
import AppHeader from '../components/ui/AppHeader';
import ScreenTemplate from './ScreenTemplate';

const MainScreen = ({ navigation }) => {
  const onMoviePressHandler = () => {
    navigation.navigate('Filmer');
  };
  const onSeriesPressHandler = () => {
    navigation.navigate('Serier');
  };
  const onSportPressHandler = () => {
    navigation.navigate('Sport');
  };
  const onDocumentaryPressHandler = () => {
    navigation.navigate('Dokumentärer');
  };

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <AppHeader>MovieFlix</AppHeader>
        <View>
          <Text style={styles.titleText}>Vad vill du se på idag?</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <MainButton onPressed={onSeriesPressHandler}>Serier</MainButton>
          <MainButton onPressed={onMoviePressHandler}>Filmer</MainButton>
        </View>
        <View style={styles.buttonsContainer}>
          <MainButton onPressed={onDocumentaryPressHandler}>
            Dokumentärer
          </MainButton>
          <MainButton onPressed={onSportPressHandler}>Sport</MainButton>
        </View>
        <View>
          <Text style={styles.titleText}>Vi rekommenderar</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/The_Batman.jpg')}
            resizeMode='cover'
            style={styles.image}
          />
        </View>
      </View>
    </ScreenTemplate>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titleText: {
    color: Colors.lightText,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: Colors.lightText,
    padding: 12,
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f86262',
    opacity: 0.6,
  },
});
