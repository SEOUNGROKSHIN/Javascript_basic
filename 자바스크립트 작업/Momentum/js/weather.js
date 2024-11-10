const API_KEY = "b2492ed9346c18adf62098eee2f60c44"

function onGeoSuccess(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    // API 호출
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weater span:first-child");
        const city = document.querySelector("#weater span:last-child");
        city.innerHTML = `도시 : ${data.name}`;
        weather.innerHTML = `날씨 : ${data.weather[0].main} /  온도 : ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Cant work")
}
// 1. 성공함수 , 2 실패함수
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
