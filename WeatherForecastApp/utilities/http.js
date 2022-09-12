import axios from 'axios';

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?appid=bd1437c53b15df8bd7e809ef8391d83d&units=metric&lang=se&`;
const FIREBASE_URL =
  'https://weatherforecastapp-c5af4-default-rtdb.firebaseio.com/favouriteWeatherCity.json';

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
  const response = await axios.post(FIREBASE_URL, JSON.stringify(weatherInfo));
}

// export async function upaateFavourite(weatherInfo) {
//   const response = await fetch(FIREBASE_URL, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(weatherInfo),
//   });
// }
// export async function updateFavourite(weatherInfo) {
//   const response = await fetch(FIREBASE_URL + '/det som skall tas bort(id)', {
//     method: 'DELETE',
//   });
// }
