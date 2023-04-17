const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  if (nameInput.value.trim()) {
    nameOutput.textContent = nameInput.value;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});

console.log(nameInput.value);
console.log(nameOutput.textContet);
