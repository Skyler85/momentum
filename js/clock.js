const clock = document.querySelector("#clock");
const today = document.querySelector("#today");

// intervals : 시간 간격 '매 2초'
// timeout : 첫 간격을 두고 한번만 실행 '5초후 1번 실행'

function getClock() {
  const date = new Date();
  const year = String(date.getFullYear()).padStart(4, "0");
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0"); // pas값이 string이기 때문에 시간도 string으로 변환해줌
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  today.innerText = `${year}-${month}-${day}`;
}

getClock();
setInterval(getClock, 1000); // 1000ms :: 1초마다
/*
function sayHello() {
    console.log("hello harper");
}
setTimeout(sayHello, 3000); // 3초후 1번실행
*/
