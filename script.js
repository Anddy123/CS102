// Set the initial time to 10 seconds
let currentTime = 10;
let countdownStarted = false;
const startBtn = document.getElementById("launch-button");
const stopBtn = document.getElementById("stop-button");
const countdownEL = document.getElementById("countdown");
const warningElement = document.getElementById("warning");
const form = document.getElementById("launch-form");
const table = document.getElementById("table");
const nameEl = document.getElementById("name");
let fName = '';
let lName = '';
let badgeNumber = 0;

window.addEventListener('load', function() { // Waits for the page to load then starts the audio
    const audio = new Audio('bg.mp3');
    audio.volume = 0.3;
    audio.loop = true;
    audio.play();
  });
// Wait for the DOM to finish loading before running the countdown
document.addEventListener("DOMContentLoaded", function(event) {

    // Initialize countdown to 10 seconds
    let currTime = 10;

    // Hide the countdown and stop button initially
    countdownEL.style.display = 'none';
    stopBtn.disabled = 'true';

    // Hide the table initially
    table.style.display = 'none';

    // Countdown function that updates the timer every second
    function countdown() {

        // Decrease the current time by one second
        currTime--;

        // Update the name element with the user's name
        nameEl.innerHTML = "Name: " + fname+ " " + lName;

        // Enable the stop button and show the countdown and table
        stopBtn.disabled = 'false';
        countdownEL.style.display = 'block';
        table.style.display = 'block';

        // Hide the form and disable the start button
        form.style.display = 'none';
        startBtn.disabled = 'true';

        // Update the countdown element with the current time
        countdownEL.innerHTML = currTime + ' seconds';

        // Check if countdown has reached zero
        if (currTime === 0) {
            countdownEL.innerHTML = "Blastoff!";
            warningElement.style.display = "none"; // hide the warning element
            return;
        }

        // Display warning message if less than 5 seconds left
        if (currTime < 5) {
            let warning = "Warning: Less than 1/2 way to launch, time left = " + currTime + " seconds";
            warningElement.innerHTML = warning;
            countdownEL.style.display = 'none';
        }

        // Check if countdown has reached zero again, in case the warning message updated the countdown to zero
        if (currTime === 0) {
            countdownEL.innerHTML = "Blastoff!";
            warningElement.style.display = "none"; // hide the warning element
            return;
        }

        // Set a timer to call the countdown function again in one second
        countdownInterval = setTimeout(countdown, 1000);
    }

    // Stop the countdown and reset the page when the stop button is clicked
    function stopCountdown() {
        clearInterval(countdownInterval);
        alert("Countdown has been stopped!");
        countdown.innerHTML = "";
        countdownStarted = false;
    }

    // Add a click event listener to the stop button
    stopBtn.addEventListener("click",stopCountdown);

    // Handle form submit event
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // prevent form from submitting

        // Get user input values
        fname = document.getElementById("firstName").value.trim();
        lName = document.getElementById("lastName").value.trim();
        badgeNumber = parseInt(document.getElementById("badgeNumber").value.trim());

        // Validate user input values
        if (firstName.length > 20 || lastName.length > 20) {
            alert("First and Last name must be 20 characters or less.");
            return;
        }

        if (isNaN(badgeNumber) || badgeNumber <= 1 || badgeNumber > 999) {
            alert("Badge number must be at least 3-digit number.");
            return;
        }

        // Start the countdown if it hasn't already started
        if (!countdownStarted){
            countdown();
        }
    })
})