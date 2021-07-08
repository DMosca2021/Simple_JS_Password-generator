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
  while (characterLength < 8 || characterLength > 128) {
      characterLength = parseInt(prompt("How many characters would you like your password to be? (8-128)"));
  }
  
  function generatePrompt() {
    if (characters.alhpa) {
      userInput.push(characters.alhpa[Math.floor((Math.random() * 52) + 1)]);
  }

  if (characters.num) {
      userInput.push(characters.num[Math.floor((Math.random() * 10) + 1)])
  }

  if (characters.symbol) {
      userInput.push(characters.symbol[Math.floor((Math.random() * 30) + 1)])
  }

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


  // characters.alhpa = false
  // characters.num = false
  // characters.symbol = false

  // while (!characters.alhpa && !characters.num && !characters.symbol) {
  //   characters.alhpa = confirm("Click OK to confirm upper and lower characters");
  //   characters.num = confirm("Click OK to confirm numeric characters");
  //   characters.symbol = confirm("Click OK to confirm special characters");