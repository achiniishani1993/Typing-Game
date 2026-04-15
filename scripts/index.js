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

function updateScore(){
 score++

 scoreEl.innerHTML = score;
}

// Add an event listener to the ”text” element

text.addEventListener("input", function (e){
  const inputText = this.value;

  if (inputText === randomWord) {
    updateScore();
    addWordToDOM();
    time += 5;
    this.value = "";
  }
});

addWordToDOM();