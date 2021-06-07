document.addEventListener("DOMContentLoaded", () => {
  const thermostat = new Thermostat();
  document.querySelector('#temperature').innerText = thermostat.temperature

  document.querySelector('#temperature-up').addEventListener('click', () => {
    thermostat.up();
    document.querySelector('#temperature').innerText = thermostat.temperature
  })

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down();
    document.querySelector('#temperature').innerText = thermostat.temperature
  })
})