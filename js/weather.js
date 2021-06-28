const API_KEY = "4b78b3ee55b71292169b753247ad08dc";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response)=> response.json()).then((data)=> {
        const weather = document.querySelector(".weather span");
        const icon = document.querySelector(".weather img");
        const city = document.querySelector(".city span");
        const weatherIcon = data.weather[0].icon;
        icon.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        city.innerText = data.name;
        weather.innerText = `${data.main.temp}°C`
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);