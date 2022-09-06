import axios from 'axios';

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?appid=bd1437c53b15df8bd7e809ef8391d83d&units=metric&lang=se&q=`;
const FIREBASE_URL =
  'https://weatherforecastapp-c5af4-default-rtdb.firebaseio.com/favouriteWeatherCity.json';

export async function getWeather(city) {
  // let data = '';
  const url = WEATHER_URL + city;
  // const response = await fetch(WEATHER_URL + city);

  // if (response.status >= 200 && response.status < 300) {
  //   data = await response.json();
  //   return data;
  // }
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function addAsFavourite(weatherInfo) {
  // const response = await fetch(FIREBASE_URL, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(weatherInfo),
  // });

  const response = await axios.post(FIREBASE_URL, JSON.stringify(weatherInfo));
}

export async function upaateFavourite(weatherInfo) {
  const response = await fetch(FIREBASE_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(weatherInfo),
  });
}
export async function updateFavourite(weatherInfo) {
  const response = await fetch(FIREBASE_URL + '/det som skall tas bort(id)', {
    method: 'DELETE',
  });
}
