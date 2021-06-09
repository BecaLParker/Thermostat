# [MakersAcademy JavaScript Thermostat](https://github.com/makersacademy/course/blob/master/thermostat_es6/thermostat_logic.md )
:cold_face: :hot_face:


## Testing
Test-driven with jasmine. 
Clone my repo to your local, cd into the cloned directory, open SpecRunner.html

## UI (HTML/CSS)
open index.html
(basic CSS for displaying colours correlating to energy usage)


## Linter
Linted with [ESLint](https://eslint.org/) 

## External API
[OpenWeather](https://openweathermap.org/)

## Functionality
Specification:

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default but it can also be turned off
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, <= 25 is `medium-usage`, anything else is `high-usage`.
* low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.
* By default, weather for Cambridge, UK is displayed.
* You can enter a different UK city to update the weather display.

## Next steps
[Styling](https://github.com/makersacademy/course/blob/master/thermostat_es6/styling.md)

## Credits
Pair-programmed the business logic with [Dewald Viljoen](https://github.com/Dev-ops-true#dewald-viljoen-dev). 
Refactored using [walkthrough](https://github.com/makersacademy/course/blob/master/thermostat_es6/walkthroughs/thermostat_logic.md)
