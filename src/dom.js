let savedWeather = null;
let savedForecast = null;
let tempUnit = 'C';
let speedUnit = 'kmh';

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function kmhToMph(kmh) {
  return kmh / 1.609;
}

function formatTemp(temp) {
  const value = tempUnit === 'F' ? celsiusToFahrenheit(temp) : temp;
  return `${Math.round(value)}˚${tempUnit}`;
}

function formatSpeed(speed) {
  const value = speedUnit === 'mph' ? kmhToMph(speed) : speed;
  const unit = speedUnit === 'mph' ? 'mph' : 'km/h';
  return `${Math.round(value)} ${unit}`;
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

function formatWindDirection(degrees) {
  const directions = [
    'North',
    'North-East',
    'East',
    'South-East',
    'South',
    'South-West',
    'West',
    'North-West',
  ];

  const index = Math.round(degrees / 45) % 8;

  return `${degrees}° ${directions[index]}`;
}

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':');
  const date = new Date();
  date.setHours(hours, minutes);

  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });
}

async function renderUIData(weather, forcastedData) {
  savedWeather = weather;
  savedForecast = forcastedData;
  import('../images/location.png').then((locationImg) => {
    document.querySelector('#location-img').style.backgroundImage =
      `url(${locationImg.default})`;
  });
  document.querySelector('.currentLocation').textContent =
    `${weather.location}`;
  document.querySelector(`#currentDay`).textContent =
    `${formatDate(weather.date)}`;
  document.querySelector('#currentTemp').textContent = formatTemp(weather.temp);
  document.querySelector('#currentFeel').textContent =
    `Feels like ${formatTemp(weather.feel)}`;
  document.querySelector('#currentWindSpeed').textContent = formatSpeed(
    weather.windSpeed,
  );
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
    `${weather.humidity}%`;
  import('../images/wind.png').then((wind) => {
    document.querySelector('#wind-icon').style.backgroundImage =
      `url(${wind.default})`;
  });
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
    `${weather.visibility} km`;
  import('../images/direction.png').then((direction) => {
    document.querySelector('#compass-icon').style.backgroundImage =
      `url(${direction.default})`;
  });
  document.querySelector('#currentWindDirection').textContent =
    `${formatWindDirection(weather.windDirection)}`;
  document.querySelector('#rise-time').textContent =
    `${formatTime(weather.sunRise)}`;
  import('../images/sunrise.png').then((sunrise) => {
    document.querySelector('#rise-img').style.backgroundImage =
      `url(${sunrise.default})`;
  });
  document.querySelector('#set-time').textContent =
    `${formatTime(weather.sunSet)}`;
  import('../images/sunset.png').then((sunset) => {
    document.querySelector('#set-img').style.backgroundImage =
      `url(${sunset.default})`;
  });

  for (let i = 0; i < 7; i++) {
    document.querySelector(`#day${i}`).textContent = formatDate(
      forcastedData[i].day,
    );
    document.querySelector(`#condition${i}`).textContent =
      `${forcastedData[i].conditions}`;
    document.querySelector(`#day${i}-temp`).textContent = formatTemp(
      forcastedData[i].temp,
    );
    document.querySelector(`#wind${i}`).textContent =
      `Wind Speed: ${formatSpeed(forcastedData[i].wind)}`;
    document.querySelector(`#humidity${i}`).textContent =
      `Humidity: ${forcastedData[i].humidity}%`;
  }

  for (let i = 0; i < 7; i++) {
    if (
      document.querySelector(`#condition${i}`).textContent.toLowerCase() ==
      `partially cloudy`
    ) {
      import('../images/cloudy.png').then((cloudy) => {
        document.querySelector(`#day${i}-icon`).style.backgroundImage =
          `url(${cloudy.default})`;
      });
    }

    if (
      document.querySelector(`#condition${i}`).textContent.toLowerCase() ==
      `rain`
    ) {
      import('../images/rain.png').then((rain) => {
        document.querySelector(`#day${i}-icon`).style.backgroundImage =
          `url(${rain.default})`;
      });
    }

    if (
      document.querySelector(`#condition${i}`).textContent.toLowerCase() ==
      `rain, partially cloudy`
    ) {
      import('../images/rain.png').then((rain) => {
        document.querySelector(`#day${i}-icon`).style.backgroundImage =
          `url(${rain.default})`;
      });
    }

    if (
      document.querySelector(`#condition${i}`).textContent.toLowerCase() ==
      `clear`
    ) {
      import('../images/uv.png').then((sun) => {
        document.querySelector(`#day${i}-icon`).style.backgroundImage =
          `url(${sun.default})`;
      });
    }
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
      <button class="unitBtn temp-unit active" data-unit="C">˚C</button>
|
<button class="unitBtn temp-unit" data-unit="F">˚F</button>
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
        <option value="mph">Miles</option>
        <option value="kmh" selected>Km</option>
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

function setupUnitButtons() {
  document.querySelectorAll('.temp-unit').forEach((button) => {
    button.addEventListener('click', () => {
      tempUnit = button.dataset.unit;

      if (savedWeather && savedForecast) {
        renderUIData(savedWeather, savedForecast);
      }
    });
  });

  document.querySelector('#speed').addEventListener('change', (e) => {
    speedUnit = e.target.value;

    if (savedWeather && savedForecast) {
      renderUIData(savedWeather, savedForecast);
    }
  });
}

function initializeDom() {
  const body = document.querySelector('body');
  body.innerHTML = `${createNavBar()}
  ${weatherContainer()}`;
  setupUnitButtons();
}

export { initializeDom, renderUIData };
