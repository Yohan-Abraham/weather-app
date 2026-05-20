import { initializeDom, renderUIData } from './dom';
import { processData, getForcastedWeather } from './data';
import { Weather, forcastedWeather } from './weather';

function setupEventListeners() {
  const getLocation = document.querySelector('#getLocation');

  getLocation.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
      const data = await processData(getLocation.value);
      const forcastedData = await getForcastedWeather(getLocation.value);
      getLocation.value = '';
      renderUIData(data, forcastedData);
    }
  });
}

function initializeApp() {
  initializeDom();
  setupEventListeners();
}

initializeApp();
