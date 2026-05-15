class Weather {
  constructor(location, currentCondition, feel, description) {
    this.location = location;
    this.currentCondition = currentCondition;
    this.feel = feel;
    this.description = description;
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

  getDescription() {
    return this.description;
  }
}

export { Weather };
