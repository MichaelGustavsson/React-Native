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
} from 'react-native';

import { getWeather, addAsFavourite } from '../utilities/http';

const MainScreen = () => {
  const [temp, setTemp] = useState('');
  const [highTemp, setHighTemp] = useState('');
  const [lowTemp, setLowTemp] = useState('');
  const [sky, setSky] = useState('');
  const [city, setCity] = useState('');
  const [currentCity, setCurrentCity] = useState('STENUNGSUND');
  const [currentTemp, setCurrentTemp] = useState('');
  const [foundCity, setFoundCity] = useState('');

  useEffect(() => {
    async function getCurrentWeather() {
      const weatherData = await getWeather(currentCity);
      setCurrentTemp(Math.ceil(weatherData.main.temp));
      setSky(weatherData.weather[0].description);
      setHighTemp(Math.ceil(weatherData.main.temp_max));
      setLowTemp(Math.ceil(weatherData.main.temp_min));
    }

    getCurrentWeather();
  }, []);

  const { styles } = weatherStyles();

  const onSearchHandler = async () => {
    const weatherData = await getWeather(city);
    setTemp(Math.ceil(weatherData.main.temp));
    setFoundCity(weatherData.name);
  };

  const onSaveAsFavourite = async () => {
    const weatherData = {
      city,
      temp,
    };

    await addAsFavourite(weatherData);
  };

  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.background}
        source={require('../assets/images/background.jpg')}
      >
        <View style={styles.weatherContainer}>
          <View style={styles.currentWeatherInfo}>
            <Text style={[styles.mainTitle, styles.textColor]}>
              {currentCity}
            </Text>
            <Text style={[styles.smallTitle, styles.textColor]}>
              Aktuell temperatur
            </Text>
            <Text style={[styles.mainTitle, styles.textColor]}>
              {currentTemp}
            </Text>
            <Text style={[styles.smallTitle, styles.textColor]}>{sky}</Text>
            <View style={styles.highAndLow}>
              <Text style={[styles.smallTitle, styles.textColor]}>
                H: {highTemp}
              </Text>
              <Text> </Text>
              <Text style={[styles.smallTitle, styles.textColor]}>
                L: {lowTemp}
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
          {/* <Button title='Sök' onPress={onSearchHandler} /> */}
          <View style={styles.weatherInfoContainer}>
            <Text style={[styles.subTitle, styles.textColor]}>
              Temperatur - {foundCity}
            </Text>
            <Text style={[styles.mainTitle, styles.textColor]}>{temp}</Text>
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
