function renderUIData(weather) {
  document.querySelector('#currentTemp').textContent = `${weather.temp}˚C`;
  document.querySelector('#currentFeel').textContent =
    `Feels like ${weather.feel}˚C`;
  document.querySelector('#currentDescription').textContent =
    `${weather.conditions}`;
  document.querySelector('#rain-prob').textContent =
    `${weather.rainProbability}`;
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
          <p id="currentDay">Friday</p>
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

function weatherContainer() {
  return `<div id="weatherContainer">
  ${currentWeather()}
  ${additionalInformation()}
  ${sunInfo()}
  </div>`;
}

function initializeDom() {
  const body = document.querySelector('body');
  body.innerHTML = `${createNavBar()}
  ${weatherContainer()}`;
}

export { initializeDom, renderUIData };
