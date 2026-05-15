import rain from './images/rain.jpg';
import overcast from './images/overcast.jpg';
import sunny from './images/sunny.jpg';

function createNavBar() {
  //create nav container
  const body = document.querySelector('body');
  const navContainer = document.createElement('nav');
  body.appendChild(navContainer);

  //app name
  const appName = document.createElement('div');
  appName.id = 'appName';
  appName.textContent = 'Weather App';
  navContainer.appendChild(appName);

  //search bar
  const searchBoxContainer = document.createElement('div');
  searchBoxContainer.id = 'searchBox';
  const searchBar = document.createElement('input');
  searchBar.type = 'text';
  searchBar.id = 'getLocation';
  searchBar.name = 'getLocation';
  searchBar.placeholder = 'Enter Location';
  searchBoxContainer.appendChild(searchBar);
  navContainer.appendChild(searchBoxContainer);

  //temperature unit options
  const tempContainer = document.createElement('div');
  tempContainer.id = 'unit';

  //celcuis
  const CelciusBtn = document.createElement('button');
  CelciusBtn.classList = 'unitBtn';
  CelciusBtn.textContent = 'C';
  tempContainer.appendChild(CelciusBtn);

  const divider = document.createElement('span');
  divider.textContent = '|';
  tempContainer.appendChild(divider);

  //fahrenheit
  const fahrenheitBtn = document.createElement('button');
  fahrenheitBtn.classList = 'unitBtn';
  fahrenheitBtn.textContent = 'F';
  tempContainer.appendChild(fahrenheitBtn);

  navContainer.appendChild(tempContainer);
}

function weatherContainer() {
  const body = document.querySelector('body');
  const weatherContainer = document.createElement('div');
  weatherContainer.id = 'weatherContainer';
  body.appendChild(weatherContainer);

  //diaplays current feel and weather condition
  const currentData = document.createElement('div');
  currentData.id = 'currentData';
  weatherContainer.appendChild(currentData);
  const weatherIcon = document.createElement('div');
  weatherIcon.id = 'icon';
  currentData.appendChild(weatherIcon);
  const currentDate = document.createElement('div');
  currentDate.id = 'currentDate';
  currentData.appendChild(currentDate);
  const currentTemp = document.createElement('div');
  currentTemp.id = 'currentTemp';
  currentData.appendChild(currentTemp);
  const currentFeel = document.createElement('div');
  currentFeel.id = 'currentFeel';
  currentData.appendChild(currentFeel);
  const weatherDescription = document.createElement('div');
  weatherDescription.id = 'weatherDescription';
  currentData.appendChild(weatherDescription);
  const sunState = document.createElement('div');
  sunState.id = 'sunState';
  currentData.appendChild(sunState);

  //contains additional data about weather
  const moreDetails = document.createElement('div');
  moreDetails.id = 'moreDetails';
  weatherContainer.appendChild(moreDetails);
}

function setDate() {}

function setDescription(weather) {
  const description = document.querySelector('#weatherDescription');
  description.textContent = `${weather}`;
}

function setIcon() {
  const icon = document.querySelector('#icon');
  icon.style.backgroundImage = `url(${sunny})`;
}

//changed app background based on wheather condition
function setBackground(currentCondition) {
  const body = document.querySelector('body');
  if (
    currentCondition.toLowerCase() == 'partially cloudy' ||
    currentCondition.toLowerCase() == 'overcast'
  ) {
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(${overcast})`;
  }
}

function initializeDom() {
  createNavBar();
  weatherContainer();
}

export { initializeDom, setBackground, setIcon, setDescription };
