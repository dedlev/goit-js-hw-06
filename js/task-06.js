const input = document.querySelector('#validation-input');

input.addEventListener('input', onInput);

function onInput(evt) {
  input.classList.add('invalid');
  if (evt.currentTarget.value.length == input.dataset.length) {
    input.classList.replace('invalid', 'valid');
  } else {
    input.classList.remove('valid');
  }
}
