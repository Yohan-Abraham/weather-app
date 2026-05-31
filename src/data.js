import './style.css';
import { Weather, forcastedWeather } from './weather';

//returns raw data of location
async function getData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=A72ZE4RZ682RFQY6HMMP76233&contentType=json`,
    );
    const data = await response.json();
    return data;
  } catch {
    console.log('error');
  }
}

async function getForcastedWeather(location) {
  const sevenDayForcast = [];
  const data = await getData(location);
  for (let i = 1; i <= 7; i++) {
    const weather = new forcastedWeather(
      data.days[i].datetime,
      data.days[i].conditions,
      data.days[i].temp,
      data.days[i].windspeed,
      data.days[i].humidity,
    );
    sevenDayForcast.push(weather);
  }
  return sevenDayForcast;
}

//processes data for desired location and returns important data
async function processData(location) {
  //get raw data of location
  const data = await getData(location);
  const weather = new Weather(
    data.address,
    data.days[0].datetime,
    data.currentConditions.temp,
    data.currentConditions.feelslike,
    data.currentConditions.icon,
    data.currentConditions.precipprob,
    data.currentConditions.humidity,
    data.currentConditions.windspeed,
    data.currentConditions.uvindex,
    data.currentConditions.visibility,
    data.currentConditions.winddir,
    data.currentConditions.sunrise,
    data.currentConditions.sunset,
  );
  console.log(data);
  return weather;
}

export { processData, getForcastedWeather };
