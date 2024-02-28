const controlsEl = document.querySelector('#controls');
const createBtn = document.querySelector('button[data-create');
const destroyBtn = document.querySelector('button[data-destroy');
const boxesEl = document.querySelector('#boxes');

controlsEl.firstElementChild.addEventListener('input', onInput);
createBtn.addEventListener('click', onCreateClick);
destroyBtn.addEventListener('click', onDestroyClick);

let amount = 0;
let widthNumber = 30;
let heightNumber = 30;

function onInput(evt) {
  amount = evt.currentTarget.value;
}

function onCreateClick() {
  createBoxes(amount);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const creates = document.createElement('div');
    creates.style.width = `${widthNumber}px`;
    creates.style.height = `${heightNumber}px`;
    const changeColor = getRandomHexColor();

    creates.style.backgroundColor = changeColor;
    widthNumber += 10;
    heightNumber += 10;

    boxesEl.append(creates);
  }
}

function onDestroyClick() {
  boxesEl.textContent = '';
  widthNumber = 30;
  heightNumber = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
