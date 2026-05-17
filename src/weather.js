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
}

export { Weather };
