import rain from './images/rain.jpg';
import overcast from './images/overcast.jpg';
import sunny from './images/sunny.jpg';

function createNavBar() {
  return `<nav>
      <div id="appName">Weather App</div>
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

function initializeDom() {
  // const body = document.querySelector('body');
  // body.innerHTML = `${createNavBar()}`;
}

export { initializeDom };
