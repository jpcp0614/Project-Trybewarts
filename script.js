const btnEntrar = document.querySelector('#btn-entrar');
const inputEmail = document.querySelector('#input-email-header');
const inputPassword = document.querySelector('#input-password-header');
const inputAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');

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

const checkAgreement = (checkbox) => {
  if (checkbox.checked) {
    btnSubmit.disabled = false;
    btnSubmit.classList.add('btn-success');
  } else {
    btnSubmit.disabled = true;
    btnSubmit.classList.remove('btn-success');
  }
};

inputAgreement.addEventListener('change', () => checkAgreement(inputAgreement));

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Habilitou');
});
