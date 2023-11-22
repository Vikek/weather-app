export default function render(data) {
    //// Current weather render ////
    const currentWeatherContainer = document.getElementById('current-weather');

    const locationName = document.createElement('div');
    locationName.textContent = data.location.name;
    locationName.id = 'location-name';

    const condition = document.createElement('div');
    condition.textContent = data.current.condition.text;
    condition.id = 'current-condition';

    const tempCelsius = document.createElement('div');
    tempCelsius.textContent = data.current.temp_c + ' °C';
    tempCelsius.id = 'temp-celsius';

    currentWeatherContainer.appendChild(locationName);
    currentWeatherContainer.appendChild(condition);
    currentWeatherContainer.appendChild(tempCelsius);
    
    //// Forecast weather render ////
    const forecastWeatherContainer = document.getElementById('forecast-weather');

    const nextDaysWeather = document.createElement('div');

    const nextDaysWeatherTempCelsius = document.createElement('div');
    nextDaysWeatherTempCelsius.textContent = data.forecast.forecastday[1].day.avgtemp_c + ' °C';

    const nextDaysWeatherCondition = document.createElement('div');
    nextDaysWeatherCondition.textContent = data.forecast.forecastday[1].day.condition.text;

    nextDaysWeather.appendChild(nextDaysWeatherCondition);
    nextDaysWeather.appendChild(nextDaysWeatherTempCelsius);

    forecastWeatherContainer.appendChild(nextDaysWeather);
}