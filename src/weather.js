class Weather {
  constructor(location, currentCondition, currentDate, feel, description) {
    this.location = location;
    this.currentCondition = currentCondition;
    this.currentDate = currentDate;
    this.feel = feel;
    this.description = description;
  }

  getLocation() {
    return this.location;
  }

  getCurrentCondition() {
    return this.currentCondition;
  }

  getDate() {
    return this.currentDate;
  }

  getFeel() {
    return this.feel;
  }

  getDescription() {
    return this.description;
  }
}

export { Weather };
