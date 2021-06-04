'use strict'

class Thermostat {
  constructor (temperature = 20, powerSavingMode = true) {
    this.temperature = temperature
    this.powerSavingMode = powerSavingMode
  }

  getCurrentTemperature () {
    return this.temperature
  }

  up (setting = 1) {
    if (this.powerSavingMode === true) {
      if ((this.temperature += setting) > 25) {
        this.temperature = 25
      } else {
        this.temperature + setting
      }
    } else {
      if ((this.temperature += setting) > 32) {
        this.temperature = 32
      } else {
        this.temperature + setting
      }
    }
  }

  down (setting = 1) {
    let currentTemp = this.temperature

    if ((currentTemp -= setting) < 10) {
      this.temperature = 10
    } else {
      this.temperature -= setting
    }
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
