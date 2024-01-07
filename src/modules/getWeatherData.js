export default async function getWeatherData(location) {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=e6b956b6bc604d8a842142951231511&days=3&q=' + location , {mode: 'cors'});
    const data = await response.json();
    return data;
}