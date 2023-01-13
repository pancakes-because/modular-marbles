// It's best to read the original instructions to understand and follow along. 
// https://github.com/nashville-software-school/client-side-mastery/blob/cohort-60/book-2-fun-functions/chapters/FUNCTIONS_MODULES.md

const createMarble = (sizeString) => {
    // Define an array containing strings for all possible marble colors
    const colors = ["red", "blue", "green", "purple"]

    // Get a random number in the range of 0 - 3
    const randomIndex = Math.floor(Math.random() * 4)

    // Use that number to get a random string from the array
    const randomColor = colors[randomIndex]

    // Return a string description of the marble created
    return `A ${sizeString}, ${randomColor} marble`
}

// In the terminal, run the node main.js command to see the marble you just created.

const marble = createMarble("small")
console.log(marble) //logs "A small, COLOR marble" 

/* 

    Now invoke the functions several more times, 
    with different sizes for the marbles,

*/

const bigMarble = createMarble("big")
console.log(bigMarble)

