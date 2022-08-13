const board = document.querySelector('#board');
const colors = [
  '#E41AF0',
  '#F0C026',
  '#e42c2c',
  '#7BF026',
  '#0224F0',
  '#d2b1ff',
  '#F05B26',
  '#690EF0',
  '#F0E926',
  '#02F0BE',
];
const SQUARES_NUMBER = 990;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}
