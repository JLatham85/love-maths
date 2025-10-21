// Event listener

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });    
    }
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {

    //Creates 2 random numbrs between 1 and 25
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;
}

function checkAnswer() {
    // Placeholder for answer checking logic
}

function calculateCorrectAnswer() {
    // Placeholder for calculating the correct answer
}

function incrementScore() {
    // Placeholder for incrementing the score
}

function incrementWrongAnswer() {
    // Placeholder for incrementing the wrong answer count
}

function displayAdditionQuestion() {
    // Placeholder for displaying addition question
}

function displaySubtractQuestion() {
    // Placeholder for displaying subtraction question
}  

function displayMultiplyQuestion() {
    // Placeholder for displaying multiplication question
}

function displayDivisionQuestion() {
    // Placeholder for displaying division question
}   
