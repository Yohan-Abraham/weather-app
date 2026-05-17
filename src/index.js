import {
  initializeDom,
  setTemp,
  setFeel,
  setDescription,
  setRainProb,
  setHumidity,
  setWindSpeed,
  setUv,
  setVisibility,
  setWindDirection,
  setRiseTime,
  setSetTime,
} from './dom';
import { processData } from './data';
import { Weather } from './weather';

initializeDom();

function getElements() {
  const set = {
    currentTemp: document.querySelector('#currentTemp'),
    currentFeel: document.querySelector('#currentFeel'),
    currentDescription: document.querySelector('#currentDescription'),
    rainProb: document.querySelector('#rain-prob'),
    humidity: document.querySelector('#currentHumidity'),
    windSpeed: document.querySelector('#currentWindSpeed'),
    uv: document.querySelector('#currentUv'),
    visibility: document.querySelector('#currentVisibility'),
    windDir: document.querySelector('#currentWindDirection'),
    sunRiseTime: document.querySelector('#rise-time'),
    sunSetTime: document.querySelector('#set-time'),
  };
  return set;
}

function setupEventListeners() {
  const getLocation = document.querySelector('#getLocation');

  getLocation.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
      const data = await processData(getLocation.value);
      getLocation.value = '';
      setTemp(getElements().currentTemp, data.getTemp());
      setFeel(getElements().currentFeel, data.getFeel());
      setDescription(
        getElements().currentDescription,
        data.getCurrentCondition(),
      );
      setRainProb(getElements().rainProb, data.getRainProb());
      setHumidity(getElements().humidity, data.getHumidity());
      setWindSpeed(getElements().windSpeed, data.getWindSpeed());
      setUv(getElements().uv, data.getUV());
      setVisibility(getElements().visibility, data.getVisibility());
      setWindDirection(getElements().windDir, data.getWindDirection());
      setRiseTime(getElements().sunRiseTime, data.getSunrise());
      setSetTime(getElements().sunSetTime, data.getSunset());
    }
  });
}
setupEventListeners();
