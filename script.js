const button = document.getElementById('button');
const level = document.getElementById('level');
const mainGame = document.querySelector('.main-game');

// выбор уровня
let difficulty = document.querySelectorAll('.level__choose');
difficulty.forEach(level => {
  level.addEventListener('click', () => {
    difficulty.forEach(lvl => lvl.classList.remove('rhomb'));
    level.classList.add('rhomb');
  })
})

// убрать карты
function removeCards() {
  document.querySelector('.wrapper').style.display = 'block';
  mainGame.style.display = 'none';
  mainGame.innerHTML = '';
  mainGame.className = 'main-game';
}

// показать карты
function showCard(number) {
  for (let i=0; i<number; i++) {
    let card = document.createElement ('div');
    let cardInside = document.createElement ('div');
    let cardFront = document.createElement ('div');
    let cardBack = document.createElement ('div');

    card.className = 'throw-card';
    mainGame.appendChild(card);

    cardInside.className = 'card-inside';
    card.appendChild(cardInside);

    cardFront.className = 'card-front';
    cardInside.appendChild(cardFront);

    cardBack.className = 'card-back';
    cardInside.appendChild(cardBack);

    let rotate = () => {
      let number = Math.round(Math.random());
      cardInside.classList.toggle('rotate');
      if (number === 1) cardBack.classList.add('card-bug');
      let cards = document.querySelectorAll('.throw-card');
      cards.forEach(card => card.addEventListener('click', removeCards));
      }
      card.addEventListener('click', rotate);
  }
}

// простой, средний, сложный уровни
function chooseDifficulty(level) {
  switch(level) {
    case 'Простой':
    showCard(3);
    mainGame.classList.add('easy');
    break;
    case 'Средний':
    showCard(6);
    mainGame.classList.add('normal');
    break;
    case 'Сложный':
    showCard(10);
    mainGame.classList.add('hard');
    break;
  }
}

// старт игры
function startGame() {
  let level = document.querySelector('.rhomb').innerText;
  chooseDifficulty(level);
  document.querySelector('.wrapper').style.display = 'none';
  mainGame.style.display = 'flex';
}

button.addEventListener('click', startGame);