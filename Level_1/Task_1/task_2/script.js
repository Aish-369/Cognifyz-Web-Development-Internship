
/* =========================================
   COGNIFYZ TECHNOLOGIES
   LEVEL 1 - TASK 2
   JAVASCRIPT FUNCTIONALITY
========================================= */


/* =========================================
   TASK 1: COLOR CHANGING BUTTON
========================================= */

// Select the button and color label from HTML.
const colorButton = document.getElementById("colorButton");
const colorCode = document.getElementById("colorCode");

// Store different colors in an array.
const colors = [
    "#2563EB", // Blue
    "#16A34A", // Green
    "#EA580C", // Orange
    "#9333EA", // Purple
    "#DB2777", // Pink
    "#0891B2"  // Cyan
];

// Track the current color position.
let colorIndex = 0;

// Run this function when the button is clicked.
colorButton.addEventListener("click", function () {

    // Move to the next color.
    colorIndex = (colorIndex + 1) % colors.length;

    // Get the selected color.
    const newColor = colors[colorIndex];

    // Change the button background color.
    colorButton.style.backgroundColor = newColor;

    // Display the new color code.
    colorCode.textContent = newColor;

});


/* =========================================
   TASK 2: TIME-BASED GREETING
========================================= */

// Select HTML elements.
const greetingButton = document.getElementById("greetingButton");
const greetingText = document.getElementById("greetingText");
const currentTime = document.getElementById("currentTime");

// Display the current local time.
function updateClock() {

    // Create a Date object.
    const now = new Date();

    // Convert the time into a readable format.
    const time = now.toLocaleTimeString();

    // Display time on the webpage.
    currentTime.textContent = time;
}

// Update the clock immediately.
updateClock();

// Update the clock every second.
setInterval(updateClock, 1000);

// Display a greeting when the button is clicked.
greetingButton.addEventListener("click", function () {

    // Get the current hour (0 to 23).
    const hour = new Date().getHours();

    let greeting;

    // Check the current time.
    if (hour >= 5 && hour < 12) {

        greeting = "Good Morning!";

    } else if (hour >= 12 && hour < 17) {

        greeting = "Good Afternoon!";

    } else if (hour >= 17 && hour < 21) {

        greeting = "Good Evening!";

    } else {

        greeting = "Good Night!";

    }

    // Display the greeting on the webpage.
    greetingText.textContent = greeting;

    // Show the required JavaScript alert box.
    alert(greeting + " Welcome to Cognifyz Technologies!");

});


/* =========================================
   TASK 3: ADDITION CALCULATOR
========================================= */

// Select calculator elements.
const calculatorForm = document.getElementById("calculatorForm");
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const result = document.getElementById("result");

// Run when the calculator form is submitted.
calculatorForm.addEventListener("submit", function (event) {

    // Prevent the webpage from refreshing.
    event.preventDefault();

    // Convert input values from strings to numbers.
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);

    // Validate the input values.
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {

        result.textContent = "Invalid input";
        return;

    }

    // Add the two numbers.
    const sum = num1 + num2;

    // Display the calculated result.
    result.textContent = sum;

});
