// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

// const difficultyArray = ["easy", "medium", "hard"];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

// Random Item From an Array

function addWordToDOM() {
  const randomIndex = Math.floor(Math.random() * words.length);
  randomWord = words[randomIndex];

  word.textContent = randomWord;
}

// increment score by +1

function updateScore() {
  score++;

  scoreEl.innerHTML = score;
}

// Add an event listener to the ”text” element

text.addEventListener("input", function (e) {
  const inputText = this.value;

  if (inputText === randomWord) {
    updateScore();
    addWordToDOM();
    time += 5;
    this.value = "";
  }
});

// Part 2 - time set up

const timeInterval = setInterval(updateTime, 1000);

function updateTime() {
  if (time <= 0) {
    time = 0;
    timeEl.innerHTML = time;
    clearInterval(timeInterval);
    gameOver();
    return;
  }

  time--;
  timeEl.innerHTML = time;
}

function gameOver() {
    endgameEl.innerHTML = `<p>Game Over, Start Again..!</p> <br> <button class="restart-btn" onclick="location.reload()">Restart</button>`;
    endgameEl.style.display = "flex"; 
}

// Part 3

settingsBtn.addEventListener("click", function () {
  settings.style.display = "none";
});



settingsForm.addEventListener("change", function () {
  let diff = difficultySelect.value;
  //console.log( difficultySelect.value)
  if (diff === "easy") {
    time = 15;
  } else if (diff === "medium") {
    time = 10;
  } else {
    time = 7;
  }
  timeEl.innerHTML = time;
});

// Second try of doing Part 3 - Add an event listener for the settings form

/* 
settingsForm.addEventListener("click", function(){
  let diff = difficultySelect.value;
  //console.log(diff);
  const difficultyiIndex = difficultyArray.indexOf(diff);
  //console.log("difficu index " + difficultyiIndex);
if (difficultyiIndex == 0) {
  time=15;
} else if(difficultyiIndex == 1) {
  time = 10;
} else if(difficultyiIndex == 2) {
 time = 7;
} else {

}
})
 */

addWordToDOM();
