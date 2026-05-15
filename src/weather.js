class Weather {
  constructor(
    location,
    date,
    temp,
    feel,
    conditions,
    rainProbability,
    humidity,
    windSpeed,
    uv,
    visibility,
    windDirection,
    sunRise,
    sunSet,
  ) {
    this.location = location;
    this.date = date;
    this.temp = temp;
    this.feel = feel;
    this.conditions = conditions;
    this.rainProbability = rainProbability;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.uv = uv;
    this.visibility = visibility;
    this.windDirection = windDirection;
    this.sunRise = sunRise;
    this.sunSet = sunSet;
  }

  getLocation() {
    return this.location;
  }

  getDate() {
    return this.currentDate;
  }

  getTemp() {
    return this.temp;
  }

  getFeel() {
    return this.feel;
  }

  getCurrentCondition() {
    return this.currentCondition;
  }

  getRainProb() {
    return this.rainProbability;
  }

  getHumidity() {
    return this.humidity;
  }

  getWindSpeed() {
    return this.windSpeed;
  }

  getUV() {
    return this.uvIndex;
  }

  getVisibility() {
    return this.visibility;
  }

  getWindDirection() {
    return this.windDirection;
  }

  getSunrise() {
    return this.sunRise;
  }

  getSunset() {
    return this.sunSet;
  }
}

export { Weather };
