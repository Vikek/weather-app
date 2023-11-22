import getWeatherData from "./modules/getWeatherData";
import render from "./modules/render";

let searchBar = document.getElementById('search-bar');

searchBar.addEventListener('change', () => {
    getWeatherData(searchBar.value).then((data) => {
        console.log(data);
        render(data);
    });
});
