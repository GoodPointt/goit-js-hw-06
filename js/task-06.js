const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', () => {
  const expectedLength = inputRef.getAttribute('data-length');
  const actualLength = inputRef.value.length;

  if (actualLength >= expectedLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
});
