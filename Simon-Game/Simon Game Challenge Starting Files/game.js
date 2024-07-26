// console.log($("h1").text());
// variable
const buttonsColor = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];
let level = 0;
let started = false;
// function
const nextSequence = () => {
  userClickPattern = [];
  level++;
  $("h1").text("Level " + level);
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonsColor[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  // console.log(gamePattern);
};
const playSound = (color) => {
  const audio = new Audio(`sounds/${color}.mp3`);
  audio.play();
};
const animatePress = (currentColor) => {
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(() => {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
};
const checkAnswer = (currentLevel) => {
  if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
    if (userClickPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    $("h1").text("Game Over, Press Any Key to Restart");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
};
const startOver = () => {
  level = 0;
  gamePattern = [];
  started = false;
};

// event
$(".btn").click((event) => {
  const userChosenColor = event.target.id;
  playSound(userChosenColor);
  userClickPattern.push(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickPattern.length - 1);
  // console.log(userClickPattern);
});
$(document).keydown(() => {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
