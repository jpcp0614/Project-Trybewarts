const btnEntrar = document.querySelector('#btn-entrar');
const inputEmail = document.querySelector('#input-email-header');
const inputPassword = document.querySelector('#input-password-header');
const inputAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const inputTextarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

// Verificar os inputs do header ao clicar no botão
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
// ----------------------------------------------

// Verificar se o check está marcado, para habilitar o botão do formulário
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
// ----------------------------------------------

// Contar quantos caracteres já foram digitados no textarea
const maxLength = '500';

const countCharacters = (textarea) => {
  const remainingCharacters = maxLength - textarea.value.length;

  if (remainingCharacters >= 0) {
    counter.textContent = remainingCharacters;
    counter.style.color = 'black';
  } else {
    counter.textContent = '0';
    counter.style.color = 'red';
  }
};

inputTextarea.addEventListener('input', () => countCharacters(inputTextarea));
