'use strict'

class Thermostat {
  constructor (temperature = 20, powerSavingMode = true) {
    this.MINIMUM_TEMPERATURE = 10
    this.ECO_MAXIMUM_TEMPERATURE = 25
    this.MAXIMUM_TEMPERATURE = 32
    this.temperature = temperature
    this.powerSavingMode = powerSavingMode
  }

  getCurrentTemperature () {
    return this.temperature
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isGreaterThanEcoMaximumTemperature(x) {
    return x > this.ECO_MAXIMUM_TEMPERATURE
  }

  isGreaterThanMaximumTemperature(x) {
    return x > this.MAXIMUM_TEMPERATURE
  }

  up (setting = 1) {
    let res = this.getCurrentTemperature + setting
    if (this.powerSavingMode === true) {
      if (isGreaterThanEcoMaximumTemperature(res)) {
        this.temperature = this.ECO_MAXIMUM_TEMPERATURE
      } else {
        this.temperature + setting
      }
    } else {
      if ((this.temperature += setting) > this.MAXIMUM_TEMPERATURE) {
        this.temperature = this.MAXIMUM_TEMPERATURE
      } else {
        this.temperature + setting
      }
    }
  }

  down (setting = 1) {

    if (this.isMinimumTemperature()) {
      return;
    } 
    for (let i = 0; i < setting; i++) {
      this.temperature -= setting;
  }

  ecomode (arg) {
    this.powerSavingMode = arg
  }

  reset () {
    this.temperature = 20
  }

  usage () {
    if (this.temperature < 18) {
      return 'low-usage'
    } else if (this.temperature <= 25) {
      return 'medium-usage'
    } else {
      return 'high-usage'
    }
  }
}
