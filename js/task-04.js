const counterValueEl = document.querySelector('#value');

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

let counterValue = 0;
counterValueEl.textContent = counterValue;

decrementBtn.addEventListener('click', onTargetButtonClick);
incrementBtn.addEventListener('click', onTargetButtonClick);

function onTargetButtonClick(evt) {
  const button = evt.currentTarget;
  counterValue += Number(button.textContent);
  counterValueEl.textContent = counterValue;
}
