const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?appid=bd1437c53b15df8bd7e809ef8391d83d&units=metric&lang=se&q=`;

export async function getWeather(city) {
  let data = '';
  const url = WEATHER_URL + city;
  const response = await fetch(WEATHER_URL + city);

  if (response.status >= 200 && response.status < 300) {
    data = await response.json();
    return data;
  }
}
