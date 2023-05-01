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
window.addEventListener('load', function() {
    const audio = new Audio('bg.mp3');
    audio.volume = 0.3;
    audio.loop = true;
    audio.play();
  });
/// Wait for the DOM to finish loading before running the countdown
document.addEventListener("DOMContentLoaded", function(event) {
    // Initialize countdown to 10 seconds
    let currTime = 10;
    countdownEL.style.display = 'none';
   stopBtn.disabled = 'true';
   table.style.display = 'none';
   
    
    // Countdown function that updates the timer every second
    
    function countdown() {
        currTime--;
        nameEl.innerHTML = "Name: " + fname+ " " + lName;
       stopBtn.disabled = 'false';
       countdownEL.style.display = 'block';
       table.style.display = 'block';
       form.style.display = 'none';
        startBtn.disabled = 'true';
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
  
      countdownInterval = setTimeout(countdown, 1000);
    }
    function stopCountdown() {
        clearInterval(countdownInterval);
        alert("Countdown has been stopped!");
       countdown.innerHTML = "";
       countdownStarted = false;
      }
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
      if (!countdownStarted){
      countdown();
      }
    })
})

