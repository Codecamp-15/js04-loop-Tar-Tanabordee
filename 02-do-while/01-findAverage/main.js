let sum = 0;
let count = 0;

while (true) {
  let input = prompt("Please enter a number:");
  
  if (input === null || input === "") {
    break; // Exit the loop if user cancels or inputs an empty string
  }
  
  let number = parseInt(input);
  
  if (!isNaN(number)) {
    sum += number;
    count++;
  } else {
    break; // Exit the loop if input is not a number
  }
}

if (count > 0) {
  let average = sum / count;
  console.log("Sum:", sum);
  console.log("Average:", average);
} else {
  console.log("No valid numbers entered.");
}
