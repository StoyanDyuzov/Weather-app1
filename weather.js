const apiKey = "c536f238268d3c21560062b235b42283";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".input_data");
const searchbtn = document.querySelector(".search-button");
const weatherimg = document.querySelector(".img-weather");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".town").innerHTML = data.name;
    document.querySelector(".degrees").innerHTML = Math.round(data.main.temp) + "&deg;c";
    document.querySelector(".humidity-data").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-data").innerHTML = data.wind.speed + "km/h"; 

    if(data.weather[0].main == "Clouds")
    {
        weatherimg.src = "images/clouds.png";
    }
}

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
});

checkWeather