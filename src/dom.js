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

function wheatherContainer() {
  const body = document.querySelector('body');
  const wheatherContainer = document.createElement('div');
  wheatherContainer.id = 'wheatherContainer';
  body.appendChild(wheatherContainer);

  const currentData = document.createElement('div');
  currentData.id = 'currentData';
  wheatherContainer.appendChild(currentData);

  const moreDetails = document.createElement('div');
  moreDetails.id = 'moreDetails';
  wheatherContainer.appendChild(moreDetails);
}

//changed app background based on wheather condition
function changeBackground(currentCondition) {
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
  wheatherContainer();
}

export { initializeDom, changeBackground };
