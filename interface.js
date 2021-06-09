document.addEventListener("DOMContentLoaded", () => {
  const displayWeather = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=722da2eaa18da16838a06a3f8d9dbe21&units=metric`;
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector("#current-weather").innerText = Math.floor(
        data.main.temp
      );
      document.querySelector("#display-current-city").innerText = city
    });
  }
  displayWeather('Cambridge');

  document.querySelector("#select-city").addEventListener("submit", (event) => {
    event.preventDefault();
    const city = document.querySelector("#current-city").value;

    displayWeather(city);
  });

  const updateTemperature = () => {
    document.querySelector("#temperature").innerText = `${thermostat.temperature} °C`;
    document.querySelector("#temperature").className = thermostat.energyUsage();
  };
  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector("#temperature-up").addEventListener("click", () => {
    thermostat.up();
    updateTemperature();
  });

  document.querySelector("#temperature-down").addEventListener("click", () => {
    thermostat.down();
    updateTemperature();
  });

  document.querySelector("#temperature-reset").addEventListener("click", () => {
    thermostat.resetTemperature();
    updateTemperature();
  });

  document.querySelector("#power-saving-on").addEventListener("click", () => {
    thermostat.switchPowerSavingModeOn();
    document.querySelector("#power-saving-status").innerText = "ON";
    updateTemperature();
  });

  document.querySelector("#power-saving-off").addEventListener("click", () => {
    thermostat.switchPowerSavingModeOff();
    document.querySelector("#power-saving-status").innerText = "OFF";
    updateTemperature();
  });
});
