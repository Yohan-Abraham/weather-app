async function renderUIData(weather, forcastedData) {
  document.querySelector('.currentLocation').textContent =
    `${weather.location}`;
  document.querySelector(`#currentDay`).textContent = `${weather.date}`;
  document.querySelector('#currentTemp').textContent = `${weather.temp}˚C`;
  document.querySelector('#currentFeel').textContent =
    `Feels like ${weather.feel}˚C`;
  document.querySelector('#currentDescription').textContent =
    `${weather.conditions}`;
  document.querySelector('#rain-prob').textContent =
    `${weather.rainProbability}%`;
  document.querySelector('#currentHumidity').textContent =
    `${weather.humidity}`;
  document.querySelector('#currentWindSpeed').textContent =
    `${weather.windSpeed}`;
  document.querySelector('#currentUv').textContent = `${weather.uv}`;
  document.querySelector('#currentVisibility').textContent =
    `${weather.visibility}`;
  document.querySelector('#currentWindDirection').textContent =
    `${weather.windDirection}`;
  document.querySelector('#rise-time').textContent = `${weather.sunRise}`;
  document.querySelector('#set-time').textContent = `${weather.sunSet}`;

  for (let i = 0; i < 7; i++) {
    document.querySelector(`#day${i}`).textContent = `${forcastedData[i].day}`;
    document.querySelector(`#condition${i}`).textContent =
      `${forcastedData[i].conditions}`;
    document.querySelector(`#day${i}-temp`).textContent =
      `${forcastedData[i].temp}`;
    document.querySelector(`#wind${i}`).textContent =
      `Wind Speed: ${forcastedData[i].wind}`;
    document.querySelector(`#humidity${i}`).textContent =
      `Humidity: ${forcastedData[i].humidity}`;
  }
}

function createNavBar() {
  return `<nav>
      <div id="appName">Weather App</div>
      <div class="currentLocation"></div>
      <div id="searchBox">
        <input
          type="text"
          id="getLocation"
          name="getLocation"
          placeholder="Enter Location"
        />
      </div>
      <div id="unit">
        <button class="unitBtn">˚C</button>
        <span>|</span>
        <button class="unitBtn">˚F</button>
      </div>
    </nav>`;
}

function currentWeather() {
  return `<div id="currentWeather">
        <div id="currentHeader">
          <p>Current Weather</p>
          <p id="currentDay"></p>
        </div>
        <div id="currentTemp"></div>
        <div id="speedUnit">
          <select name="speed" id="speed">
            <option value="miles">Miles</option>
            <option value="kilometers">Km</option>
          </select>
        </div>
        <div id="feelContainer">
          <span id="icon"></span>
          <span
            ><p id="currentFeel"></p>
            <p id="currentDescription"></p></span
          >
        </div>
      </div>`;
}

function additionalInformation() {
  return `<div id="additionalInfo">
        <div id="rain">
          <div id="rain-icon"></div>
          <div>Chance of rain</div>
          <div id="rain-prob"></div>
        </div>
        <div id="humidity">
          <div id="humidity-icon"></div>
          <div>Humidity</div>
          <div id="currentHumidity"></div>
        </div>
        <div id="wind">
          <div id="wind-icon"></div>
          <div>Wind Speed</div>
          <div id="currentWindSpeed"></div>
        </div>
        <div id="uv">
          <div id="uv-icon"></div>
          <div>UV Index</div>
          <div id="currentUv"></div>
        </div>
        <div id="visibility">
          <div id="visibility-icon"></div>
          <div>Visibility</div>
          <div id="currentVisibility"></div>
        </div>
        <div id="windDirection">
          <div id="compass-icon"></div>
          <div>Wind Direction</div>
          <div id="currentWindDirection"></div>
        </div>
      </div>`;
}

function sunInfo() {
  return `<div id="sunInfoContainer">
        <div id="currentDate"></div>
        <div id="sun-rise">Sun Rise</div>
        <div id="sun-set">Sun Set</div>
        <div id="rise-img"></div>
        <div id="set-img"></div>
        <div id="rise-time"></div>
        <div id="set-time"></div>
      </div>`;
}

function dayForcast(i) {
  return `<div class="forcast-container">
          <div class="left">
            <div class="day-icon" id="day${i}-icon"></div>
            <div class="day-data" id="day${i}-data">
              <div id="day${i}"></div>
              <div id="condition${i}"></div>
            </div>
          </div>
          <div class="divider">|</div>
          <div class="right">
            <div class="day-temp" id="day${i}-temp"></div>
            <div class="additionalContainer">
              <div class="day-wind" id="wind${i}">Wind:</div>
              <div class="day-humidity" id="humidity${i}">Humidity:</div>
            </div>
          </div>
        </div>`;
}

function sevenDayForcast() {
  let dayHtml = '';
  for (let i = 0; i < 7; i++) {
    dayHtml += dayForcast(i);
  }

  return `<div id="forcasted-weather">
  <div>7 Day Forcast</div>
  ${dayHtml}
  </div>`;
}

function weatherContainer() {
  return `<div id="weatherContainer">
  ${currentWeather()}
  ${additionalInformation()}
  ${sunInfo()}
  ${sevenDayForcast()}
  </div>`;
}

function initializeDom() {
  const body = document.querySelector('body');
  body.innerHTML = `${createNavBar()}
  ${weatherContainer()}`;
}

export { initializeDom, renderUIData };
