document.addEventListener("DOMContentLoaded", function() {
  let score = 0;
  let timeLeft = 30;
  const gameboard = document.getElementById("gameboard");
  const scoreDisplay = document.getElementById("score");
  const timeDisplay = document.getElementById("time");

  function randomHole() {
    const holes = document.querySelectorAll(".hole");
    const randomIndex = Math.floor(Math.random() * holes.length);
    return holes[randomIndex];
  }

  function showMole() {
    const hole = randomHole();
    hole.classList.add("has-mole");
    setTimeout(function() {
      hole.classList.remove("has-mole");
      if (timeLeft > 0) {
        showMole();
      }
    }, Math.random() * 2000 + 500); // 地鼠出現的隨機時間
  }

  function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = "分數：" + score;
    timeDisplay.textContent = "時間剩餘：" + timeLeft + " 秒";
    showMole();
    const countdown = setInterval(function() {
      timeLeft--;
      timeDisplay.textContent = "時間剩餘：" + timeLeft + " 秒";
      if (timeLeft <= 0) {
        clearInterval(countdown);
        alert("時間結束！你的分數是：" + score);
      }
    }, 1000);
  }

  gameboard.addEventListener("click", function(event) {
    if (event.target.classList.contains("has-mole")) {
      score++;
      scoreDisplay.textContent = "分數：" + score;
      event.target.classList.remove("has-mole");
    }
  });

  startGame();
});