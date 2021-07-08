// Assignment Code
var characters = {
  alhpa: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
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

function generatePassword() {
  var characterLength = 0
  while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === false) {
      characterLength = parseInt(prompt("How many characters would you like your password to be? (8-128)"));
  }

  characters.alhpa = false
  characters.num = false
  characters.symbol = false

  while (!characters.alhpa && !characters.num && !characters.symbol) {
    characters.alhpa = confirm("Click OK to confirm upper and lower characters");
    characters.num = confirm("Click OK to confirm numeric characters");
    characters.symbol = confirm("Click OK to confirm special characters");
  }

  if (upper) {
      userInput.push(charString[0]);
  }

  if (lower) {
      userInput.push(charString[1])
  }

  if (number) {
      userInput.push(charString[2])
  }

  if (symbol) {
      userInput.push(charString[3])
  }

  var password = "";


  userInput = userInput.join("").split("");

  // You should start your for statement at position 0, not 1
  // and I guess it should be < than characterLength, not userInput.length
  for (var i = 0; i < characterLength; i++) {
      // Math.random is a function so you were missing the parenthesis Math.random()
      // also Math.random() should be times userInput.length
      // so they should be inside the same parenthesis
      var index = (Math.floor(Math.random() * userInput.length));
      password = password + userInput[index]
  }

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Alpha
// "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// numbers
// "0123456789"

// special characters
// " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

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
