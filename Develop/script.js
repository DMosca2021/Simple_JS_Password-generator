// Assignment Code
var characters = {
  upper: "abcdefghijklmnopqrstuvwxyz",
  lower: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  num: "0123456789",
  symbol: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
};
var userInput = [];
var password = "";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function that creates the password based on user inputs

function generatePassword() {
  var userInput = parseInt(prompt("Choose the length of your password between 8 & 128"));
  
  if (userInput < 8) {
    alert("Must be greater than 8 characters!")
    generatePassword()
  } else if (userInput > 128) {
    alert("Must be less than 128 characters!")
    generatePassword()
  } else if (!userInput) {
    return;
  }

  var upperChoice = confirm("Include upper case letters?");
  var lowerChoice = confirm("Include lower case letters?");
  var numberChoice = confirm("Include numbers?");
  var symbolCoice = confirm("Include special characters?");
 
  if (charactersAlphaPrompt == true) {
    userInput.push(characters.alpha[Math.floor((Math.random() * 52) + 1)])
  } else {
    alert("Will not include upper or lower case letters!")
  }

  if (charactersNumPrompt) {
      userInput.push(characters.num[Math.floor((Math.random() * 10) + 1)])
  } else {
    alert("Will not include numbers!")
  }

  if (charactersSymbolPrompt) {
      userInput.push(characters.symbol[Math.floor((Math.random() * 30) + 1)])
  } else {
    alert("Will not include symbols!")
  }

  


  userInput = userInput.join("").split("");

  for (var i = 0; i < characterLength; i++) {
      var index = (Math.floor(Math.random() * userInput.length));
      password = password + userInput[index]
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


  // characters.alhpa = false
  // characters.num = false
  // characters.symbol = false

  // while (!characters.alhpa && !characters.num && !characters.symbol) {
  //   
  // }