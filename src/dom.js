async function renderUIData(weather, forcastedData) {
  import('../images/location.png').then((locationImg) => {
    document.querySelector('#location-img').style.backgroundImage =
      `url(${locationImg.default})`;
  });
  document.querySelector('.currentLocation').textContent =
    `${weather.location}`;
  document.querySelector(`#currentDay`).textContent = `${weather.date}`;
  document.querySelector('#currentTemp').textContent = `${weather.temp}˚C`;
  document.querySelector('#currentFeel').textContent =
    `Feels like ${weather.feel}˚C`;
  document.querySelector('#currentDescription').textContent =
    `${weather.conditions}`;
  import('../images/rain.png').then((rain) => {
    document.querySelector('#rain-icon').style.backgroundImage =
      `url(${rain.default})`;
  });
  document.querySelector('#rain-prob').textContent =
    `${weather.rainProbability}%`;
  import('../images/water.png').then((humidity) => {
    document.querySelector('#humidity-icon').style.backgroundImage =
      `url(${humidity.default})`;
  });
  document.querySelector('#currentHumidity').textContent =
    `${weather.humidity}`;
  import('../images/wind.png').then((wind) => {
    document.querySelector('#wind-icon').style.backgroundImage =
      `url(${wind.default})`;
  });
  document.querySelector('#currentWindSpeed').textContent =
    `${weather.windSpeed}`;
  import('../images/uv.png').then((uv) => {
    document.querySelector('#uv-icon').style.backgroundImage =
      `url(${uv.default})`;
  });
  document.querySelector('#currentUv').textContent = `${weather.uv}`;
  import('../images/visibility.png').then((visibility) => {
    document.querySelector('#visibility-icon').style.backgroundImage =
      `url(${visibility.default})`;
  });
  document.querySelector('#currentVisibility').textContent =
    `${weather.visibility}`;
  import('../images/direction.png').then((direction) => {
    document.querySelector('#compass-icon').style.backgroundImage =
      `url(${direction.default})`;
  });
  document.querySelector('#currentWindDirection').textContent =
    `${weather.windDirection}`;
  document.querySelector('#rise-time').textContent = `${weather.sunRise}`;
  import('../images/sunrise.png').then((sunrise) => {
    document.querySelector('#rise-img').style.backgroundImage =
      `url(${sunrise.default})`;
  });
  document.querySelector('#set-time').textContent = `${weather.sunSet}`;
  import('../images/sunset.png').then((sunset) => {
    document.querySelector('#set-img').style.backgroundImage =
      `url(${sunset.default})`;
  });

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
      <div id="location-img"></div>
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
