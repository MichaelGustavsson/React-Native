import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ImageBackground,
  Pressable,
  useWindowDimensions,
  Alert,
} from 'react-native';

import * as Location from 'expo-location';

import {
  getWeather,
  addAsFavourite,
  getWeatherByCity,
} from '../utilities/http';

import Spinner from '../components/ui/Spinner';

const MainScreen = () => {
  const [temp, setTemp] = useState('');
  const [highTemp, setHighTemp] = useState('');
  const [lowTemp, setLowTemp] = useState('');
  const [sky, setSky] = useState('');
  const [city, setCity] = useState('');
  const [currentCity, setCurrentCity] = useState('STENUNGSUND');
  const [currentTemp, setCurrentTemp] = useState('');
  const [foundCity, setFoundCity] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [searchedLocation, setSearchedLocation] = useState(null);

  useEffect(() => {
    (async () => {
      // För att få tillgång eller inte till gps enhet...
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        // Hämta latitud och longitud för enhetens posision...
        let location = await Location.getCurrentPositionAsync();
        const currentLocation = await getWeather(
          location.coords.latitude,
          location.coords.longitude
        );
        setLocation(currentLocation);
      }

      setIsLoading(false);
    })();
  }, []);

  const { styles } = weatherStyles();

  const onSearchHandler = async () => {
    try {
      const location = await getWeatherByCity(city);

      if (!location) {
        Alert.alert(
          'Hittar inte',
          `Kan inte hitta någon stad med namnet ${city}`
        );
        return;
      }
      setSearchedLocation(location);
    } catch (error) {
      Alert.alert(
        'Hittar inte',
        `Kan inte hitta någon stad med namnet ${city}`
      );
    }
  };

  const onSaveAsFavourite = async () => {
    const weatherData = {
      city,
      latitude: searchedLocation.coord.lat,
      longitude: searchedLocation.coord.lon,
    };

    await addAsFavourite(weatherData);
  };

  if (isLoading) {
    return <Spinner text='Vänta hämtar gps position...' />;
  }

  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.background}
        source={require('../assets/images/background.jpg')}
      >
        <View style={styles.weatherContainer}>
          <View style={styles.currentWeatherInfo}>
            <Text style={[styles.mainTitle, styles.textColor]}>
              {location?.name}
            </Text>
            <Text style={[styles.smallTitle, styles.textColor]}>
              Aktuell temperatur
            </Text>
            <Text style={[styles.mainTitle, styles.textColor]}>
              {Math.ceil(location?.main.temp)}
            </Text>
            <Text style={[styles.smallTitle, styles.textColor]}>
              {location?.weather[0].description}
            </Text>
            <View style={styles.highAndLow}>
              <Text style={[styles.smallTitle, styles.textColor]}>
                H: {location?.main.temp_max}
              </Text>
              <Text> </Text>
              <Text style={[styles.smallTitle, styles.textColor]}>
                L: {location?.main.temp_min}
              </Text>
            </View>
          </View>

          <TextInput
            style={[styles.inputField, styles.textColor]}
            placeholder='Ange ort'
            onChangeText={(value) => setCity(value)}
            value={city}
          />
          <View style={styles.button}>
            <Pressable onPress={onSearchHandler}>
              <Text style={[styles.buttonText, styles.textColor]}>Sök</Text>
            </Pressable>
          </View>

          <View style={styles.weatherInfoContainer}>
            <Text style={[styles.mainTitle, styles.textColor]}>
              {searchedLocation?.name}
            </Text>
            <Text style={[styles.subTitle, styles.textColor]}>
              Temperatur -{' '}
              {searchedLocation !== null
                ? Math.ceil(searchedLocation.main.temp)
                : ''}
            </Text>
          </View>
          <View style={styles.button}>
            <Pressable onPress={onSaveAsFavourite}>
              <Text style={[styles.buttonText, styles.textColor]}>
                Spara som favorit
              </Text>
            </Pressable>
          </View>
          {/* <Button title='Spara som favorit' onPress={onSaveAsFavourite} /> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default MainScreen;

const weatherStyles = () => {
  const { width } = useWindowDimensions();
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    background: {
      flex: 1,
    },
    textColor: {
      color: '#ffffff',
    },
    weatherContainer: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 40,
    },
    currentWeatherInfo: {
      alignItems: 'center',
      marginBottom: 50,
    },
    weatherInfoContainer: {
      alignItems: 'center',
      marginTop: 40,
    },
    mainTitle: {
      fontSize: width < 380 ? 24 : 38,
    },
    subTitle: {
      fontSize: width < 380 ? 16 : 24,
    },
    smallTitle: {
      fontSize: width < 380 ? 14 : 18,
    },
    highAndLow: {
      flexDirection: 'row',
    },
    inputField: {
      fontSize: width < 380 ? 16 : 24,
      borderBottomColor: '#ffffff',
      borderBottomWidth: width < 380 ? 1 : 2,
      paddingVertical: width < 380 ? 0 : 2,
    },
    button: {
      backgroundColor: '#560856',
      padding: width < 380 ? 6 : 8,
      marginVertical: width < 380 ? 10 : 20,
      alignItems: 'center',
      borderRadius: 30,
    },
    buttonText: {
      fontSize: width < 380 ? 14 : 18,
    },
  });

  return { styles };
};
