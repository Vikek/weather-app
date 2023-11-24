import getWeatherData from "./modules/getWeatherData";
import render from "./modules/render";

import "./styles/global.css";
import "./styles/header.css";
import "./styles/content.css";

let searchBar = document.getElementById('search-bar');

getWeatherData('auto:ip').then((data) => {
    console.log(data);
    render(data);
});

searchBar.addEventListener('change', () => {
    getWeatherData(searchBar.value).then((data) => {
        console.log(data);
        render(data);
    });
});
searchBar.addEventListener('click', () => {
    searchBar.value = '';
});
