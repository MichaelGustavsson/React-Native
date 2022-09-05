import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  useWindowDimensions,
  ScrollView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MainButton from './components/ui/MainButton';

export default function App() {
  const { styles } = myStyles();
  const { width } = useWindowDimensions();

  let content = (
    <View style={[styles.content]}>
      <View style={[styles.headerContainer]}>
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
  );

  if (width > 500) {
    content = (
      <View style={styles.wideContent}>
        <View style={styles.wideHeaderContainer}>
          <View>
            <Text style={styles.wideHeader}>Mormor Dagny's</Text>
            <Text style={styles.wideSubTitle}>Konditori</Text>
          </View>
          <Image
            style={styles.wideLogoImage}
            source={require('./assets/images/semester.jpg')}
          />
        </View>
        <View style={styles.wideMainContainer}>
          <View style={styles.wideButtonsContainer}>
            <MainButton>Bröd</MainButton>
            <MainButton>Bakverk</MainButton>
            <MainButton>Tårtor</MainButton>
            <MainButton>Smörgåsar</MainButton>
          </View>
          <View>
            <Image
              style={styles.wideSalesImage}
              source={require('./assets/images/bread.jpg')}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <LinearGradient style={styles.screen} colors={['#256a17', '#55b37b']}>
      <ScrollView>
        <StatusBar style='auto' />
        {content}
      </ScrollView>
    </LinearGradient>
  );
}

const deviceWidth = Dimensions.get('window').width;

const myStyles = () => {
  const { width, height } = useWindowDimensions();

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      // marginTop: deviceWidth < 380 ? 30 : 50,
      marginTop: width < 380 ? 30 : 50,
    },
    headerContainer: {
      alignItems: 'center',
      // borderWidth: deviceWidth < 380 ? 1 : 2,
      borderColor: '#ffffff',
      // padding: deviceWidth < 380 ? 12 : 16,
      padding: width < 380 ? 12 : 16,
    },
    header: {
      fontSize: deviceWidth < 380 ? 24 : 32,
      color: '#ffffff',
    },
    subTitle: {
      fontSize: deviceWidth < 380 ? 16 : 24,
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
      width: deviceWidth < 380 ? 125 : 180,
      height: deviceWidth < 380 ? 125 : 180,
      borderRadius: 100,
      opacity: 0.7,
    },
    salesImage: {
      width: width < 380 ? 300 : 350,
      // maxWidth: '80%',
      height: width < 380 ? 200 : 300,
      // maxHeight: '90%',
      borderRadius: 20,
      opacity: 0.9,
    },
    wideContent: {
      flexDirection: 'column',
      marginHorizontal: 40,
      marginVertical: Platform.select({ ios: 10, android: 30 }),
    },
    wideHeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 30,
    },
    wideHeader: {
      fontSize: Platform.select({ ios: 32, android: 24 }),
      color: '#ffffff',
    },
    wideSubTitle: {
      fontSize: Platform.select({ ios: 24, android: 18 }),
      color: '#ffffff',
    },
    wideLogoImage: {
      height: Platform.select({ ios: 110, android: 90 }),
      width: Platform.select({ ios: 110, android: 90 }),
      borderRadius: 65,
      opacity: 0.9,
    },
    wideMainContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    wideButtonsContainer: {
      flex: 1,
      marginRight: 20,
    },
    wideSalesImage: {
      height: Platform.select({ ios: 180, android: 160 }),
      width: 400,
      borderRadius: 20,
      opacity: 0.8,
    },
  });

  return { styles };
};
