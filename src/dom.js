import { processData } from './weather';

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

function setupEventListeners() {
  const getLocation = document.querySelector('#getLocation');

  getLocation.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      processData(getLocation.value);
      getLocation.value = '';
    }
  });
}

function initializeDom() {
  createNavBar();
  setupEventListeners();
}

export { initializeDom };
