const input = document.getElementById('validation-input');
const inputLength = input.getAttribute('data-length');

function inputClassToggle(a, b) {
  input.classList.add(a);
  input.classList.remove(b);
}

input.addEventListener('blur', () => {
  const inputValue = input.value;

  if (inputValue.length === Number(inputLength)) {
    inputClassToggle('valid', 'invalid');
  } else {
    inputClassToggle('invalid', 'valid');
  }
});
