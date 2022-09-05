import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MainButton from './components/ui/MainButton';

export default function App() {
  return (
    <LinearGradient style={styles.screen} colors={['#256a17', '#55b37b']}>
      <StatusBar style='auto' />
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Mormor Dagny's</Text>
          <Text style={styles.subTitle}>Konditori</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logoImage}
            source={require('./assets/images/semester.jpg')}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <MainButton>Bröd</MainButton>
          <MainButton>Bakverk</MainButton>
        </View>
        <View style={styles.buttonsContainer}>
          <MainButton>Tårtor</MainButton>
          <MainButton>Smörgåsar</MainButton>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.salesImage}
            source={require('./assets/images/bread.jpg')}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  headerContainer: {
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    color: '#ffffff',
  },
  subTitle: {
    fontSize: 24,
    color: '#ffffff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  logoImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    opacity: 0.7,
  },
  salesImage: {
    width: 300,
    height: 300,
    borderRadius: 20,
    opacity: 0.9,
  },
});
