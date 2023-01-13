// It's best to read the original instructions to understand and follow along. 
// https://github.com/nashville-software-school/client-side-mastery/blob/cohort-60/book-2-fun-functions/chapters/FUNCTIONS_MODULES.md

/*
    Define a function to create a marble. The size of the
    marble will be passed as a string argument
*/

const weaveBag = (materialString) => {
    // Define an array containing strings for all possible marble colors
    const colors = ["red", "blue", "green", "purple"]

    // Get a random number in the range of 15 - 30
    const randomAmount = Math.floor(Math.random() * 16) + 15

    // Return a string description of the bag
    return `A ${materialString} marble bag that can hold ${randomAmount} marbles`
}

// In your terminal, run the node main.js command to see the bag you just created.

const bag = weaveBag("silk")
console.log(bag) // logs "A silk marble bag that can hold NUMBER marbles"

/* 

    Now invoke the functions several more times, 
    and different materials for the bags.

*/


const cottonBag = weaveBag("cotton")
console.log(cottonBag)