const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; // 대문자로 쓰는 이유는 관습 ::중요하지 않은 단순 string은 대문자로 표기
const USERNAME_KEY = "username";

function onLoginBtnClick(event) {
  event.preventDefault(); // submit 실행을 멈추어주는 명령
  loginForm.classList.add(HIDDEN_CLASSNAME); //ㅣloginForm을 숨기는 속성 지정
  const username = loginInput.value; // loginInput 값을 해당 변수에 지정
  localStorage.setItem(USERNAME_KEY, username); // localStorage에 username 값을 'username'에 지정
  paintGreetings(username);
}

// username : input에서 받아오는 정보
// saveUsername : localStorage에서 받아오는 정보

const saveUsername = localStorage.getItem(USERNAME_KEY); // localStorage의 'username'값을 불러 와 해당 변수에 지정
function paintGreetings(username) {
  greeting.innerText = `hello ${username}`; // "hello " + username;과 같음
  greeting.classList.remove(HIDDEN_CLASSNAME); // #greeting에 지정된 hidden 클래스를 삭제
}

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginBtnClick); // submit 클릭시 해당 펑션 실행
} else {
  paintGreetings(saveUsername);
}
