// Select all elements with the class "num"
let valueDisplays = document.querySelectorAll(".num");
// Set the total duration for the counting animation (in milliseconds)
let interval = 4000;

// Loop through each element with the class "num"
valueDisplays.forEach((valueDisplay) => {
    // Start the counter at 0
    let startValue = 0;
     // Get the target value from the "data-val" attribute of the element
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    // Calculate the time between each number update
   let duration = Math.floor(interval / endValue);
   // Create a function to update the number
   let counter =  setInterval(function (){
// Increment the start value by 1
    startValue += 1;
     // Update the element's text with the new value
    valueDisplay.textContent = startValue;
    // Stop the counter when the start value reaches the end value
    if(startValue == endValue){
        clearInterval(counter); //stop the setInterval
    }
   }, duration);  // Call the function every 'duration' milliseconds
});