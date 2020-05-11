const input = prompt("What is your name?");

if (input.length < 4) {
    alert("Your name is less than 4 characters");
} else if (input.length === 4) {
    alert("Your name is exactly 4 characters")
} else {
    alert("Your name is more than 4 characters")
}
