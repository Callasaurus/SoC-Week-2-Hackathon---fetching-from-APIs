let h1 = document.querySelector("#dad-joke");

async function getJoke(){
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },
      });
    let data = await response.json();
    h1.textContent = data.joke 
}

let startButton = document.querySelector("#start-button")
startButton.addEventListener("click", autoJoke)
let intervalId = ""

async function autoJoke(event){
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: {accept: "application/json"},
      });
    let data = await response.json();
    h1.textContent = data.joke;
    startButton = event.target;
    intervalId = setInterval(autoJoke, 3000);
}


let stopButton = document.querySelector("#stop-button")
stopButton.addEventListener("click",stopCounter)

function stopCounter() {
  clearInterval(intervalId);
}

let qouteButton = document.querySelector("#new-joke-button")

qouteButton.addEventListener("click", getJoke)
 
 function logJoke() {
    let jokeHistory = document.querySelector("#joke-history");
    let logJoke = document.createElement("li"); 
    logJoke.textContent = h1.textContent;
    goodJokes.appendChild(logJoke);
}

let likeButton = document.querySelector(".thumbsup")
likeButton.addEventListener("click", logJoke)

let dislikeButton = document.querySelector(".thumbsdown")
dislikeButton.addEventListener("click", badlogJoke)

function badlogJoke() {
    let badJokeHistory = document.querySelector("#bad-joke-history");
    let logBadJoke = document.createElement("li"); 
    logBadJoke.textContent = h1.textContent;
    badJokes.appendChild(logBadJoke);
}

let title = document.querySelector('#page-title');
title.style.textDecoration = "underline";
title.style.color = "#008b8b";


let goodJokes = document.querySelector("#great-jokes")
let badJokes = document.querySelector("#bad-jokes")

let userName = document.querySelector("#user-input")
userName.addEventListener("change", getName)

function getName(event) {
  let userName = event.target.value;
  goodJokes.textContent = `${userName} thinks these jokes are great!`;
  badJokes.textContent = `${userName} thinks these jokes suck!`;
}

