const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    return window.alert('Всі поля повинні бути заповнені');
  }

  const user = {
    email: email.value,
    password: password.value,
  };

  console.log(user);

  evt.currentTarget.reset();
}
