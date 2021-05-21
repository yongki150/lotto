export { drawBall, showWinBall, winButtonBuilder };

var isClicked = true;

function drawBall(content, $result) {
  var $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = content;

  var bg;
  switch (true) {
    case (content <= 10):
      bg = 'tomato'
      break
    case (content <= 20):
      bg = 'orange'
      break
    case (content <= 30):
      bg = 'yellow'
      break
    case (content <= 40):
      bg = 'blue'
      break
    default:
      bg = 'limegreen'
  }
  $ball.style.backgroundColor = bg;
  $result.appendChild($ball);
}

function showWinBall(winBalls, bonusBall) {
  const $result = document.querySelector('#결과메세지');

  for (let i = 0; i < winBalls.length; i++) {
    setTimeout(_ => {
      drawBall(winBalls[i], $result);
    }, (i + 1) * 500);
  }

  setTimeout(_ => {
    const $bonus = document.querySelector('#보너스메세지');
    drawBall(bonusBall, $bonus);
  }, 4000);
}

function winButtonBuilder(winBalls, bonusBall) {
  return function () {
    if (isClicked) {
      showWinBall(winBalls, bonusBall);
      isClicked = !isClicked;
    }
    else
      console.log('중복됨!');
  }
}
