const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
// Значення інтервалу за змовчуванням
let intervalId = null;

refs.btnStart.addEventListener('click', onBtnStart);
refs.btnStop.addEventListener('click', onBtnonStop);

//  При натисканні запускає інтревальне перемикання ф-я colorSwitcher з кроком в 1 сек., деактивує кнопку stop/
function onBtnStart () {
   intervalId = setInterval(colorSwitcher, 1000);
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
};

// При натисканні стоп зупиняє зупиняє ф-ю старт, очищує інтервал, при натисканні на стоп деактивує кнопку та активує старт.
function onBtnonStop () {
 clearInterval(intervalId);
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
}
// Функція що приймає колір з інлайн-стилів та рандомно підставляє
function colorSwitcher () {
const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
};

// Функція з ТЗ
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
