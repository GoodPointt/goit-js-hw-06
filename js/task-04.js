const counterValue = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let value = 0;

function decrement() {
  value -= 1;
  counterValue.textContent = value;
}

function increment() {
  value += 1;
  counterValue.textContent = value;
}

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
