import { initializeDom, renderUIData } from './dom';
import { processData } from './data';
import { Weather } from './weather';

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
      renderUIData(data);
    }
  });
}

function initializeApp() {
  initializeDom();
  setupEventListeners();
}

initializeApp();
