async function getJoke(){
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },
      });
    let data = await response.json();
    console.log(data)
}
getJoke();

//PLAN - Create a website similar to the dad jokes website and have it come up with random jokes
// When we click a button a new joke pops up 
//First Step - Look back at the kanye workshop
// Build the physical website (not yet clickable)
// Title, Image of a Dad, H1 element to print the joke,button to get joke
//ul element to list the previous jokes under.
//