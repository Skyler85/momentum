const quotes = [
  {
    quote:
      "They must often change who would be constant in happiness or wisdom.",
    author: "Confucius",
    //늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다. (공자)
  },
  {
    quote:
      "he greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    //인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다. (넬슨 만델라)
  },
  {
    quote: "Only I can change me life, no one can do it for me.",
    author: "Carol Burnett",
    //내 인생을 바꾸는 사람은 자신입니다. 아무도 대신해줄 수 없어요. (캐롤 버넷)
  },
  {
    quote:
      "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
    author: "Kamal Ravikant",
    //인생은 내면으로부터 나온다. 당신이 내면을 바꿀 때, 삶은 외부로 바뀐다. (카말 라비칸트)
  },
  {
    quote: "Despite the forecast, live like it’s spring.",
    author: "Lilly Pulitzer",
    //일기예보에도 불구하고, 봄처럼 살아라. (릴리 퓰리처)
  },
  {
    quote: "Great minds have purposes, others have wishes.",
    author: "Washington Irving",
    //위대한 이들은 목적을 갖고, 그 외의 사람들은 소원을 갖는다. (워싱턴 어빙)
  },
  {
    quote:
      "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    author: "Jim Rohn",
    //만약 네가 리스크를 무릅쓰지 않으려면, 어쩔 수 없이 평범함에 안주할 것이다. (짐 론)
  },
  {
    quote: "No great man ever complains of want of opportunity.",
    author: "Anonymous",
    //위대한 사람은 기회가 없다고 원망하지 않는다. (익명)
  },
  {
    quote: " Being happy never goes out of style.",
    author: " Lilly Pulitzer",
    //즐거움은 영원히 유행에 뒤떨어지지 않는다.
  },
  {
    quote: "Life is either a great adventure or nothing.",
    author: " Helen Keller",
    //인생은 위대한 모험이거나 아니면 아무것도 아니다.
  },
];
const myQuotes = document.getElementById("quotes");

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("quote span:last-child");

/*
Randomness 무작위성

1. Array 안에 있는 Element에 어떻게 접근하는가 
2. 0~n 까지의 숫자를 지정해주는 function이 필요함
3. Math module 사용
   .random(); // 0부터 1 사이의 랜덤한 숫자를 제공
   .round(); // 반올림
   .ceil(); // 올림
   .floor(); // 내림
*/
console.log(quotes[10 - 1]);
