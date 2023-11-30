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
        if (data.error) {
            alert('invalid location');
            return console.error('invalid location');
        }
        console.log(data);
        render(data);
    });
});
searchBar.addEventListener('click', () => {
    searchBar.value = '';
});
