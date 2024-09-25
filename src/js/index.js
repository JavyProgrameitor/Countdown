// Dynamically create the HTML structure of the countdown
const bodyElement = document.body;

bodyElement.style.backgroundImage = 'url(https://media.istockphoto.com/id/1449118185/es/foto/cron%C3%B3metro-vista-frontal.jpg?b=1&s=612x612&w=0&k=20&c=L3uLFGkLOspuLIm1H6UtP7YF7JhC28LwmnPzftiN3M4=)';
bodyElement.style.backgroundSize = 'cover';
bodyElement.style.backgroundPosition = 'center';
bodyElement.style.backgroundRepeat = 'no-repeat';

// Apply blend mode so the background color blends with the image
bodyElement.style.backgroundBlendMode = 'overlay';
bodyElement.style.transition = 'background-color 0.5s ease'; // Smooth background color transition

// Create and add the title
const title = document.createElement("h1");
title.textContent = "Countdown to a specific date...";
bodyElement.appendChild(title);

// Create a subtitle
const subtitle = document.createElement("h2");
subtitle.textContent = "Enter your chosen date";
subtitle.classList.add('subtitle');
bodyElement.appendChild(subtitle);

// Create the input field (date type)
const inputField = document.createElement('input');
inputField.setAttribute('type', 'date');
inputField.classList.add('input-text');
bodyElement.appendChild(inputField);

// Create a button to start the countdown
const button = document.createElement('button');
button.textContent = "Start Countdown";
button.classList.add('button');
bodyElement.appendChild(button);

// Create a container for the countdown
const countdownContainer = document.createElement("div");
countdownContainer.classList.add("countdown-container");
bodyElement.appendChild(countdownContainer);

// Block for "Months"
const monthsContainer = document.createElement("div");
const monthsCount = document.createElement("p");
monthsCount.id = "months";
monthsCount.textContent = "0"; // Initially 0

const monthsLabel = document.createElement("span");
monthsLabel.textContent = "Months";

monthsContainer.appendChild(monthsCount);
monthsContainer.appendChild(monthsLabel);

countdownContainer.appendChild(monthsContainer);

// Block for "Days"
const daysContainer = document.createElement("div");

const daysCount = document.createElement("p");
daysCount.id = "days";
daysCount.textContent = "0"; // Initially 0

const daysLabel = document.createElement("span");
daysLabel.textContent = "Days";

daysContainer.appendChild(daysCount);
daysContainer.appendChild(daysLabel);

countdownContainer.appendChild(daysContainer);

// Block for "Hours"
const hoursContainer = document.createElement("div");

const hoursCount = document.createElement("p");
hoursCount.id = "hours";
hoursCount.textContent = "0"; // Initially 0

const hoursLabel = document.createElement("span");
hoursLabel.textContent = "Hours";

hoursContainer.appendChild(hoursCount);
hoursContainer.appendChild(hoursLabel);

countdownContainer.appendChild(hoursContainer);

// Block for "Minutes"
const minutesContainer = document.createElement("div");

const minutesCount = document.createElement("p");
minutesCount.id = "minutes";
minutesCount.textContent = "0"; // Initially 0

const minutesLabel = document.createElement("span");
minutesLabel.textContent = "Minutes";

minutesContainer.appendChild(minutesCount);
minutesContainer.appendChild(minutesLabel);

countdownContainer.appendChild(minutesContainer);

// Block for "Seconds"
const secondsContainer = document.createElement("div");

const secondsCount = document.createElement("p");
secondsCount.id = "seconds";
secondsCount.textContent = "0"; // Initially 0

const secondsLabel = document.createElement("span");
secondsLabel.textContent = "Seconds";

secondsContainer.appendChild(secondsCount);
secondsContainer.appendChild(secondsLabel);

countdownContainer.appendChild(secondsContainer);

// Get countdown elements
const monthsElement = document.getElementById("months");
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Countdown logic
let goalDate; // Defined by the user
let currentDate, month, days, hours, mins, seconds, totalSeconds;
let timer;

// Function to start the countdown
function startCountdown() {
  const inputDate = inputField.value; // Get the date input value

  goalDate = new Date(inputDate); // Set the goal date chosen by the user

  clearInterval(timer); // Restart the countdown if it's already running
  timer = setInterval(countdown, 1000);
  countdown(); // Execute once immediately
}

button.addEventListener("click", startCountdown); // Event to start the countdown on button click

function countdown() {
  currentDate = new Date(); // Get the current date
  totalSeconds = (goalDate - currentDate) / 1000;

  // Condition to check if the countdown has finished
  if (Math.floor(totalSeconds) <= 0) {
    clearInterval(timer);
    monthsElement.innerHTML = 0;
    daysElement.innerHTML = 0;
    hoursElement.innerHTML = 0;
    minsElement.innerHTML = 0;
    secondsElement.innerHTML = 0;
    return;
  }

  // Calculations to convert seconds into months, days, hours, minutes, seconds
  month = Math.floor(totalSeconds / 2592000); // Approx 30 days
  days = Math.floor(totalSeconds / 3600 / 24) % 30;
  hours = Math.floor(totalSeconds / 3600) % 24;
  mins = Math.floor(totalSeconds / 60) % 60;
  seconds = Math.floor(totalSeconds) % 60;

  monthsElement.innerHTML = month;
  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minsElement.innerHTML = mins;
  secondsElement.innerHTML = seconds;

  const totalDays = Math.floor(totalSeconds / 3600 / 24); // Total number of days

  // Change the background color based on the time remaining
  if (totalDays > 14) {
    // More than two weeks
    bodyElement.style.backgroundColor = "rgba(0, 128, 0, 0.8)"; // Green with opacity
  } else if (totalDays <= 14 && totalDays > 7) {
    // Less than two weeks, but more than one week
    bodyElement.style.backgroundColor = "rgba(255, 90, 0, 0.8)"; // Orange with opacity
  } else if (totalDays <= 7) {
    // Less than a week
    bodyElement.style.backgroundColor = "rgba(139, 0, 0, 0.8)"; // Red with opacity
  } else {
    bodyElement.style.backgroundColor = "rgba(0, 128, 0, 0.8)"; // Green with opacity (fallback)
  }
}
