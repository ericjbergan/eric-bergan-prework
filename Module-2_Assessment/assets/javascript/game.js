const wordArray = ["SHADE", "CURVE", "STORE", "PARK", "CLEAR", "MOVE", "AMBIENT", "BRAZEN", "REMOTE", "DUSTY"];
const imageArray = ["assets/images/0.jpg", "assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg", "assets/images/5.jpg", "assets/images/6.jpg", "assets/images/7.jpg", "assets/images/8.jpg", "assets/images/9.jpg", "assets/images/10.jpg"];
const checkAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let usedLettersArray = [];
let startingGridArray = [];
let currentOutputGrid = "";
let correctGuessCount = 0;
let hangmanImage = 3;
let wrongGuessesCount = 3; /* this starting point determines how many incorrect guesses the player gets */
let result = "";
let gameOver = false;

$(document).ready(function () {

    // Choose random word from array.
    let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

    // Create array from random word.
    let lettersArray = randomWord.split("");

    const printArray = array => {
        let returnString = "";
        for (let i = 0; i < array.length; i++) {
            returnString += array[i].trim() + " ";
        }
        return returnString;
    }
    console.log("random word is " + lettersArray);

    $("#playAgain").hide();


    // Create the word grid the user sees.
    for (let i = 0; i < lettersArray.length; i++) {
        startingGridArray[i] = " _";
        currentOutputGrid += startingGridArray[i];
    }

    console.log(startingGridArray);
    $("#current").text(currentOutputGrid).addClass("box-text");
    $("#used").text(usedLettersArray).addClass("box-text");

    // // Main game event.

    document.onkeyup = function (event) {
        let userGuess = event.key.toUpperCase();
        if (!checkAlpha.includes(userGuess) || gameOver) {
            return;
        }

        wrongGuessesCount = 0;

        console.log("array length:" + usedLettersArray.length);

        // Makes sure letter hasn't already been used.
        for (let i = 0; i < usedLettersArray.length; i++) {
            userGuess = userGuess.trim();
            usedLettersArray[i] = usedLettersArray[i].trim();
            if (userGuess === usedLettersArray[i]) {
                return;
            }
        }


        usedLettersArray.push(" " + userGuess);
        console.log(usedLettersArray);

        let output = $('output');

        // Sees if guessed letter is in word and determines if word is complete.
        for (let i = 0; i < lettersArray.length; i++) {
            if (userGuess === lettersArray[i]) {
                startingGridArray[i] = userGuess;
                correctGuessCount++;
            } else {
                wrongGuessesCount++;
            }
        }

        if (wrongGuessesCount === lettersArray.length) {
            hangmanImage++;
        }

        $("#graphic").attr("src", imageArray[hangmanImage]);
        currentOutputGrid = "";
        for (let i = 0; i < lettersArray.length; i++) {
            currentOutputGrid += startingGridArray[i];
        }

        $("#current").text(currentOutputGrid).addClass("box-text");
        $("#used").text(printArray(usedLettersArray)).addClass("box-text");


        if (hangmanImage === 10) {
            gameOver = true;
            $("#result").text("Guess the pressure got to you.");
            $("#playAgain").show();

            // How do I stop the event?
        }

        if (correctGuessCount === lettersArray.length) {
            gameOver = true;
            $("#result").text("Nicely done!");
            $("#playAgain").show();

            // How do I stop the event?
        }
    }
});
