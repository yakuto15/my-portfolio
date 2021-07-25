//要素取得
const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");
//今年の値取得
const ThisYear = new Date().getFullYear();

//来年の1月5日の00:00:00を取得
const Birthday = new Date("2022/01/05 00:00:00");

console.log(Birthday);
const Countdown = function () {
  //現在の時間を取得する
  const ThisYear = new Date();
  //現在の時間と新年の時間差を計算する
  const Diff = Birthday - ThisYear;

  const day = Math.floor(Diff / 1000 / 60 / 60 / 24);
  const hour = Math.floor(Diff / 100 / 60 / 60) % 24;
  const minute = Math.floor(Diff / 1000 / 60) % 60;
  const second = Math.floor(Diff / 1000) % 60;

  Days.innerHTML = day;
  Hours.innerHTML = hour;
  Minutes.innerHTML = minute;
  Seconds.innerHTML = second;
};

//関数を実行
Countdown();
setInterval(Countdown, 1000);

//スライドショー
let picture = [
  "images/snowboard.jpg",
  "images/baseball.jpg",
  "images/hoseibaseball.jpg",
  "images/baseball2.jpg",
];

let num = -1;

const Slideshow = function () {
  if (num == 3) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypic").src = picture[num];
};
setInterval(Slideshow, 4000);

// let Mypic = document.getElementById("mypic");
// const goForward = document.getElementById("right");
// const goBack = document.getElementById("left");
// let num = 0;

// function changeImg(num) {
//   $("mypic").attr("src", picture[num]);
// }

// goBack.onclick = function () {
//   if (num == 0) {
//     num = 4;
//   } else {
//     num--;
//   }
//   changeImg(num);
// };

// goForward.onclick = function () {
//   if (num == 4) {
//     num = 0;
//   } else {
//     num++;
//   }
//   changeImg(num);
// };
