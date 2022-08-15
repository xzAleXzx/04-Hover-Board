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

  // 1 способ - Замыкание
  // square.addEventListener('mouseover', () => setColor(square));
  // square.addEventListener('mouseleave', () => removeColor(square));

  // 2 способ - через event
  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);

  board.append(square);
}

// 1 способ
// function setColor(element) {
//   const color = getRandomColor();
//   element.style.backgroundColor = color;
//   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}, 0 0 50px 10px rgb(0, 250, 154)`;
// }

const audio = new Audio('sound.mp3');

function setColor(event) {
  const element = event.target;

  audio.currentTime = 0;
  audio.play();

  const color = getRandomColor();

  // element.style.transform = 'scale(1.5)';
  element.style.borderRadius = '50%';
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}, 0 0 50px 10px ${color}`;
}

// 1 способ
// function removeColor(element) {
//   element.style.backgroundColor = '#1d1d1d';
//   element.style.boxShadow = `0 0 2px #000`;
//   element.style.outline = 'none';
// }

function removeColor(event) {
  const element = event.target;

  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `none`;
  element.style.transform = 'scale(1)';
  element.style.borderRadius = '0';
}

// function getRandomColor() {
//   const index = Math.floor(Math.random() * colors.length)
//   return colors[index];
// }
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
