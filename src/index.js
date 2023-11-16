import getWeatherData from "./modules/getWeatherData";

let searchBar = document.getElementById('search-bar');

searchBar.addEventListener('change', () => {
    getWeatherData(searchBar.value).then((data) => {
        console.log(data);
    });
});
