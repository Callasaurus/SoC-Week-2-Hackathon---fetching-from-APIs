let h1 = document.querySelector("#dad-joke");

async function getJoke(){
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },
      });
    let data = await response.json();
    h1.textContent = data.joke 
}
getJoke();

let qouteButton = document.querySelector("#new-joke-button")

qouteButton.addEventListener("click", getJoke)
 
 function logJoke() {
    let jokeHistory = document.querySelector("#joke-history");
    let logJoke = document.createElement("li"); 
    logJoke.textContent = h1.textContent;
    jokeHistory.appendChild(logJoke);
}

let likeButton = document.querySelector(".thumbsup")
likeButton.addEventListener("click", logJoke)

let dislikeButton = document.querySelector(".thumbsdown")
dislikeButton.addEventListener("click", badlogJoke)

function badlogJoke() {
    let badJokeHistory = document.querySelector("#bad-joke-history");
    let logBadJoke = document.createElement("li"); 
    logBadJoke.textContent = h1.textContent;
    badJokeHistory.appendChild(logBadJoke);
}



// PLAN - Create a website similar to the dad jokes website and have it come up with random jokes ✅
// When we click a button a new joke pops up ✅
// First Step - Look back at the kanye workshop ✅
// Build the physical website (not yet clickable) ✅
// Title, Image of a Dad, H1 element to print the joke,button to get joke ✅
// ul element to list the previous jokes under ✅

//Next plan - only have the previous jokes save if the user likes them
// prompt the user and ask if they like the joke - if yes, have function logJoke activated
//else do not print joke. 

