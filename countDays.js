// const container = document.querySelector(".firework-container");
// const fireworcontainer = document.querySelector('.firework-container');

const day = document.querySelector('#day');
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const h1 = document.querySelector('h1');

// const w = window.innerWidth;
// if (w <= 400) {
//   const feel = document.querySelector('.couple__title--feel');
//   feel.innerHTML = 'iu';
// }
// const firework = new Fireworks(fireworcontainer, {
//   speed: 4,
//   acceleration: 1.05,
//   friction: 1,
//   gravity: 4,
//   particles: 400,
//   explosion: 10,
// });
const countDays = () => {
  let datetime = new Date('May 26,2022 23:00:00').getTime();
  let now = new Date().getTime();
  let D = now - datetime;

  let days = Math.floor(D / (1000 * 60 * 60 * 24));
  let hh = Math.floor(D / (1000 * 60 * 60));
  let mm = Math.floor(D / (1000 * 60));
  let ss = Math.floor(D / 1000);

  hh %= 24;
  mm %= 60;
  ss %= 60;

  day.innerText = days;
  hr.innerText = hh;
  mn.innerText = mm;
  sc.innerText = ss;
  // if (D < 0) {
  //   firework.start();
  //   h1.innerText = 'happy new year';
  //   clearInterval(countdownInterval);
  // }
};
countDays();
const countdownInterval = setInterval(countDays, 1000);
