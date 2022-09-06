import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import { getWeather } from '../utilities/http';

const MainScreen = () => {
  const [temp, setTemp] = useState('');
  const [city, setCity] = useState('');
  const [currentCity, setCurrentCity] = useState('STENUNGSUND');
  const [currentTemp, setCurrentTemp] = useState('');

  useEffect(() => {
    async function getCurrentWeather() {
      const weatherData = await getWeather(currentCity);
      setCurrentTemp(weatherData.main.temp);
    }

    getCurrentWeather();
  }, []);

  const onSearchHandler = async () => {
    const weatherData = await getWeather(city);
    setTemp(weatherData.main.temp);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.weatherContainer}>
        <View>
          <Text>{currentCity}</Text>
          <Text>Aktuell temperatur</Text>
          <Text>{currentTemp}</Text>
        </View>
        <TextInput
          placeholder='Ange ort'
          onChangeText={(value) => setCity(value)}
          value={city}
        />
        <Button title='Sök' onPress={onSearchHandler} />
        <View>
          <Text>Aktuell temperatur</Text>
          <Text>{temp}</Text>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  weatherContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 40,
  },
});
