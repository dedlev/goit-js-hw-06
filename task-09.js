const body = document.querySelector('body');
const spanColorEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', onClick);

function onClick() {
  body.style.backgroundColor = changeColor;
  spanColorEl.textContent = changeColor;
}

const changeColor = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
