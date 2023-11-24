export default function render(data) {
    //// Current weather render ////
    const currentWeatherContainer = document.getElementById('current-weather');
    currentWeatherContainer.replaceChildren();

    const locationName = document.createElement('div');
    locationName.textContent = `${data.location.name}, ${data.location.country}`;
    locationName.id = 'location-name';

    const currentDate = document.createElement('div');
    currentDate.textContent = data.current.last_updated;
    currentDate.id = 'current-date';

    const condition = document.createElement('div');
    condition.textContent = data.current.condition.text;
    condition.id = 'current-condition';

    const tempCelsius = document.createElement('div');
    tempCelsius.textContent = data.current.temp_c + ' °C';
    tempCelsius.id = 'current-temp-celsius';

    const conditionIcon = document.createElement('img');
    conditionIcon.src = `https:${data.current.condition.icon}`;
    conditionIcon.id = 'current-condition-icon';

    currentWeatherContainer.appendChild(locationName);
    currentWeatherContainer.appendChild(currentDate);
    currentWeatherContainer.appendChild(condition);
    currentWeatherContainer.appendChild(tempCelsius);
    currentWeatherContainer.appendChild(conditionIcon);
    
    //// Forecast weather render ////
    const forecastWeatherContainer = document.getElementById('forecast-weather');
    forecastWeatherContainer.replaceChildren();

    const nextDaysWeather = document.createElement('div');

    const nextDaysWeatherTempCelsius = document.createElement('div');
    nextDaysWeatherTempCelsius.textContent = data.forecast.forecastday[1].day.avgtemp_c + ' °C';

    const nextDaysWeatherCondition = document.createElement('div');
    nextDaysWeatherCondition.textContent = data.forecast.forecastday[1].day.condition.text;

    nextDaysWeather.appendChild(nextDaysWeatherCondition);
    nextDaysWeather.appendChild(nextDaysWeatherTempCelsius);

    forecastWeatherContainer.appendChild(nextDaysWeather);
}