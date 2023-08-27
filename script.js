const btnEntrar = document.querySelector('#btn-entrar');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');

const checkInput = (email, password) => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

btnEntrar.addEventListener('click', (e) => {
  e.preventDefault();
  checkInput(inputEmail, inputPassword);
});
