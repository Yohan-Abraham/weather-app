function setTemp(element, temp) {
  element.textContent = `${temp}˚C`;
}

function setFeel(element, feel) {
  element.textContent = `Feels like ${feel}˚C`;
}

function setDescription(element, description) {
  element.textContent = `${description}`;
}

function setRainProb(element, prob) {
  element.textContent = `${prob}%`;
}

function setHumidity(element, humidity) {
  element.textContent = `${humidity}`;
}

function setWindSpeed(element, speed) {
  element.textContent = `${speed}`;
}

function setUv(element, uv) {
  element.textContent = `${uv}`;
}

function setVisibility(element, visibility) {
  element.textContent = `${visibility}`;
}

function setWindDirection(element, direction) {
  element.textContent = `${direction}`;
}

function setRiseTime(element, time) {
  element.textContent = `${time}`;
}

function setSetTime(element, time) {
  element.textContent = `${time}`;
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
            ><p id="currentFeel">Feels like</p>
            <p id="currentDescription">Coludy</p></span
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
        <div id="currentDate">May 16, 2026</div>
        <div id="sun-rise">Sun Rise</div>
        <div id="sun-set">Sun Set</div>
        <div id="rise-img"></div>
        <div id="set-img"></div>
        <div id="rise-time">7am</div>
        <div id="set-time">8pm</div>
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

export {
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
};
