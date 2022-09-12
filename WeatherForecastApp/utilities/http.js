import axios from 'axios';

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?appid=bd1437c53b15df8bd7e809ef8391d83d&units=metric&lang=se&`;
const FIREBASE_URL =
  'https://weatherforecastapp-c5af4-default-rtdb.firebaseio.com';

export async function getWeather(lat, lon) {
  const url = WEATHER_URL + 'lat=' + lat + '&lon=' + lon;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getWeatherByCity(city) {
  let response;
  try {
    const url = `${WEATHER_URL}q=${city}`;
    response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Ett fel har inträffat');
  }
}

export async function addAsFavourite(weatherInfo) {
  const response = await axios.post(
    FIREBASE_URL + '/favouriteWeatherCity.json',
    JSON.stringify(weatherInfo)
  );
}

export async function listFavourites() {
  const url = `${FIREBASE_URL}/favouriteWeatherCity.json`;
  const response = await axios.get(url);
  const favourites = [];

  for (const key in response.data) {
    const favourite = {
      id: key,
      city: response.data[key].city,
    };

    favourites.push(favourite);
  }

  return favourites;
}

export async function getFavourite(id) {
  const url = `${FIREBASE_URL}/favouriteWeatherCity/${id}.json`;
  const response = await axios.get(url);
  return response.data;
}

export async function deleteFavourite(id) {
  const url = `${FIREBASE_URL}/favouriteWeatherCity/${id}.json`;
  await axios.delete(url);
}
