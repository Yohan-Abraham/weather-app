class Weather {
  constructor(location, currentCondition, feel) {
    this.location = location;
    this.currentCondition = currentCondition;
    this.feel = feel;
  }

  getLocation() {
    return this.location;
  }

  getCurrentCondition() {
    return this.currentCondition;
  }

  getFeel() {
    return this.feel;
  }
}

export { Weather };
