import { format } from "date-fns";

export default function render(data) {
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

    const tempConditionIconContainer = document.createElement('div');

    tempConditionIconContainer.classList.add('row');
    const tempCelsius = document.createElement('div');
    tempCelsius.textContent = data.current.temp_c + ' °C';
    tempCelsius.id = 'current-temp-celsius';

    const conditionIcon = document.createElement('img');
    conditionIcon.src = `https:${data.current.condition.icon}`;
    conditionIcon.id = 'current-condition-icon';

    tempConditionIconContainer.appendChild(conditionIcon);
    tempConditionIconContainer.appendChild(tempCelsius);

    currentWeatherContainer.appendChild(locationName);
    currentWeatherContainer.appendChild(currentDate);
    currentWeatherContainer.appendChild(condition);
    currentWeatherContainer.appendChild(tempConditionIconContainer);
    
    forecastWeatherRender(data);
}

function forecastWeatherRender(data) {
    const forecastWeatherContainer = document.getElementById('forecast-weather');
    forecastWeatherContainer.replaceChildren();


    for (let i = 1; i < data.forecast.forecastday.length; i++) {
        const forecastWeather = document.createElement('div');
        forecastWeather.classList.add('forecast-day');

        const day = document.createElement('div');
        const date = new Date(data.forecast.forecastday[i].date);
        day.textContent = format(date, 'EEEE');
        day.classList.add('forecast-date');
        forecastWeather.appendChild(day);

        const weatherCondition = document.createElement('div');
        weatherCondition.textContent = data.forecast.forecastday[i].day.condition.text;
        weatherCondition.classList.add('forecast-condition');

        const tempConditionIconContainer = document.createElement('div');
        tempConditionIconContainer.classList.add('forecast-row');

        const tempCelsius = document.createElement('div');
        tempCelsius.textContent = data.forecast.forecastday[i].day.avgtemp_c + ' °C';
        tempCelsius.classList.add('forecast-temp');

        const conditionIcon = document.createElement('img');
        conditionIcon.src = `https:${data.forecast.forecastday[i].day.condition.icon}`;
        conditionIcon.id = 'current-condition-icon';

        tempConditionIconContainer.appendChild(conditionIcon);
        tempConditionIconContainer.appendChild(tempCelsius);

        forecastWeather.appendChild(weatherCondition);
        forecastWeather.appendChild(tempConditionIconContainer);

        forecastWeatherContainer.appendChild(forecastWeather);
    }
}