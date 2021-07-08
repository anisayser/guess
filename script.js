'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayTextContents = (element, value) => {
  return (document.querySelector(element).textContent = value);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number...';
    displayTextContents('.message', '⛔ No Number...');
  } else if (guess === secretNumber) {
    // document.querySelector('.number').textContent = secretNumber;
    displayTextContents('.number', secretNumber);
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayTextContents('.message', '🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      // document.querySelector('.highscore').textContent = highscore;
      displayTextContents('.highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 To High' : '📉 To Low';
      displayTextContents(
        '.message',
        guess > secretNumber ? '📈 To High' : '📉 To Low'
      );
      score--;
      // document.querySelector('.score').textContent = score;
      displayTextContents('.score', score);
    } else {
      // document.querySelector('.message').textContent = '😢 You lose the game';
      displayTextContents('.message', '😢 You lose the game');
      document.querySelector('.score').textContent = 0;
      displayTextContents('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // document.querySelector('.score').textContent = score;
  displayTextContents('.score', score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayTextContents('.message', 'Start guessing...');
  Number((document.querySelector('.guess').value = ''));
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.number').textContent = '?';
  displayTextContents('.number', '?');
  document.querySelector('.number').style.width = '15rem';
});
