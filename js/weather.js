const API_KEY = "1903db5786e52137e8d5fa7cdd32b7a2";
// User의 위치를 받아오는 함수
function onGeoOk(position) {
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} / ${date.weather.icon} `;
    }); //실제 url에 방문하지 않고 url을 호출(개발자도구-네트워크 확인)
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// Site : https://openweathermap.org/
// API : Current Weather Data
