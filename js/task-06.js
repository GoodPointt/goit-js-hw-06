const input = document.getElementById('validation-input');
const inputLength = input.getAttribute('data-length');

input.addEventListener('blur', () => {
  const inputValue = input.value;

  if (inputValue.length === Number(inputLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
