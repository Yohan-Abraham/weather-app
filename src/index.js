import { initializeDom, changeBackground } from './dom';
import { processData } from './data';
import { Weather } from './weather';

initializeDom();

function setupEventListeners() {
  const getLocation = document.querySelector('#getLocation');

  getLocation.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
      const data = await processData(getLocation.value);
      getLocation.value = '';
      changeBackground(data.getCurrentCondition());
      console.log(data);
    }
  });
}
setupEventListeners();
