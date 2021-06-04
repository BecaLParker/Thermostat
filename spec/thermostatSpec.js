'use strict'

describe('Thermostat', () => {
  let thermostat
  beforeEach(function () {
    thermostat = new Thermostat()
  })

  it('creates a thermostat with 20 degrees', () => {
    expect(thermostat.isPowerSavingModeOn()).toBe(true)
  })

  it('power saving mode is on by default', () => {
    expect(thermostat.powerSavingMode).toEqual(true)
  })

  it('can turn off power saving mode', () => {
    thermostat.switchPowerSavingModeOff()

    expect(thermostat.isPowerSavingModeOn()).toBe(false)
  })

  it('can turn on power saving mode', () => {
    thermostat.switchPowerSavingModeOff()
    thermostat.switchPowerSavingModeOn()

    expect(thermostat.isPowerSavingModeOn()).toBe(true)
  })

  it('can reset the temperature to 20', () => {
    thermostat.up()
    thermostat.resetTemperature()

    expect(thermostat.getCurrentTemperature()).toEqual(20)
  })

  it('can increase the temperature + 1', () => {
    thermostat.up()

    expect(thermostat.getCurrentTemperature()).toEqual(21)
  })

  it('can decrease the temperature - 1)', () => {
    thermostat.down()

    expect(thermostat.getCurrentTemperature()).toEqual(19)
  })

  it('has a minimum temperature of 10 degrees', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.down()
    }

    expect(thermostat.getCurrentTemperature()).toEqual(10)
  })

  describe('when PSM is ON', () => {
    it('has a max of temperature 25', () => {
      for (let i = 0; i < 6; i++) {
        thermostat.up()
      }

      expect(thermostat.getCurrentTemperature()).toEqual(25)
    })
  })

  describe('when PSM is OFF', () => {
    it('has a max of temperature 32', () => {
      thermostat.switchPowerSavingModeOff()
      for (let i = 0; i < 13; i++) {
        thermostat.up()
      }

      expect(thermostat.getCurrentTemperature()).toEqual(32)
    })
  })

  describe('displaying energy usage', () => {
    describe('when temp is below 18', () => {
      it('is considered LOW-USAGE', () => {
        thermostat.temperature = 17
        console.log(thermostat.getCurrentTemperature())

        expect(thermostat.energyUsage()).toEqual('low-usage')
      })
    })

    describe('when temp is between 18 and 25', () => {
      it('is considered MEDIUM', () => {
        expect(thermostat.energyUsage()).toEqual('medium-usage')
      })
    })

    describe('when temp is anything else', () => {
      it('is considered HIGH usage', () => {
        thermostat.temperature = 28

        expect(thermostat.energyUsage()).toEqual('high-usage')
      })
    })
  })
})
