import { makeRandomNumber, makeWinningNumber } from "./number.js";
import { drawBall, winButtonBuilder } from "./ball.js";

var set = new Set();

function cleanInputUI($input) {
  $input.value = '';
  $input.focus();
}

function main() {
  var $form = document.querySelector("#폼"),
    $input = document.querySelector('#입력창'),
    $message = document.querySelector('#메세지'),
    $hitCount = document.querySelector('#맞춘횟수');

  $form.addEventListener('submit', function (event) {
    event.preventDefault();
    var value = parseInt($input.value);

    if (set.has(value))
      return
    else
      set.add(value);

    drawBall(value, $message);
    cleanInputUI($input);

    if (set.size > 6) {
      set = {};
      $message.innerHTML = '숫자를 7번 입력하였습니다.';
    } else {
      var hitCount = 0;
      for (var i = 0; i < winBalls.length; i++) {
        if (set.has(winBalls[i]))
          hitCount++;
      }
      if (set.has(bonusBall)) hitCount++;
      $hitCount.textContent = `맞춘횟수 : ${hitCount}`;
    }
  })


  var randomNum = makeRandomNumber(45);
  var winBalls = makeWinningNumber(randomNum);
  var bonusBall = randomNum[randomNum.length - 1];

  console.log(winBalls, bonusBall);

  document.querySelector('#당첨버튼').addEventListener('click', winButtonBuilder(winBalls, bonusBall));
}

main();