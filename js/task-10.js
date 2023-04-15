function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const temp = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const div = document.createElement('div');

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();

    temp.appendChild(div);
  }

  boxesContainer.appendChild(temp);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
