let h1 = document.querySelector("#dad-joke");

async function getJoke(){
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },
      });
    let data = await response.json();
    h1.textContent = data.joke 
}
getJoke();

let qouteButton = document.querySelector("#new-quote-button")

qouteButton.addEventListener("click", getJoke)
qouteButton.addEventListener("click", logJoke)
 
 function logJoke() {
    let jokeHistory = document.querySelector("#joke-history");
    let logJoke = document.createElement("li"); 
    logJoke.textContent = h1.textContent;
    jokeHistory.appendChild(logJoke);
}

// PLAN - Create a website similar to the dad jokes website and have it come up with random jokes
// When we click a button a new joke pops up 
// First Step - Look back at the kanye workshop
// Build the physical website (not yet clickable)
// Title, Image of a Dad, H1 element to print the joke,button to get joke
// ul element to list the previous jokes under

// Find image of machine / van & manipulate it with CSS animations
// When we click the button it will shake 
// Shoot out the dad joke 