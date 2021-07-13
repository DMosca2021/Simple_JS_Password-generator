// Assignment Code
var body = document.body;

var characters = {
  upper: "abcdefghijklmnopqrstuvwxyz",
  lower: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  num: "012345679",
  symbol: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
};
var userChoices = [];
var password = "";
var generateBtn = document.querySelector("#generate");
var copyToClip = document.querySelector("#password")

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

  console.log(userInput)  //checking length of password

  
  var upperChoice = confirm("Include upper case letters?");
  var lowerChoice = confirm("Include lower case letters?");
  var numberChoice = confirm("Include numbers?");
  var symbolChoice = confirm("Include special characters?");


  if (upperChoice && lowerChoice && numberChoice && symbolChoice === true) {
    userChoices.push(characters[Math.floor((Math.random() * 92) + 1)])
    alert("Will include all characters.")
  } else if (upperChoice && lowerChoice && numberChoice && symbolChoice === false) {
    alert("Must include at least 1 character type!")
    generatePassword()
    return;
  }



  // if (upperChoice === true) {
  //   userChoices.push(characters.upper[Math.floor((Math.random() * 26) + 1)])
  //   alert("Will include upper case letters!")
  //   console.log(upperChoice)
  // } else {
  //   alert("Will not include upper case letters!")
  // }

  // if (lowerChoice === true) {
  //   userChoices.push(characters.lower[Math.floor((Math.random() * 26) + 1)])
  //   console.log(lowerChoice)
  // } else {
  //   alert("Will not include lower case letters!")
  // }

  // if (numberChoice === true) {
  //   userChoices.push(parseInt(characters.num[Math.floor((Math.random() * 10) + 1)]))
  //   console.log(numberChoice)
  // } else {
  //   alert("Will not include numbers!")
  // }

  // if (symbolChoice === true) {
  //   userChoices.push(characters.symbol[Math.floor((Math.random() * 30) + 1)])
  //   console.log(symbolChoice)
  // } else {
  // alert("Will not include symbols!")
  // }

  console.log(userChoices) //checking result of user choices 
 
  // for (var i = 0; i < userInput; i++) {
  //   var random = Math.floor(Math.random() * Math.floor(userChoices.length));
  //   password += userChoices[random];
  // }


  console.log(password) //checking result of password with chosen combo

  return password;
}


// console.log(document.body.getElementsByClassName("card-footer"));

  // var copyBtn = document.createElement("button");
  // var cardFooter = document.getElementsByClassName("card-footer")

  // document.cardFooter.appendChild(copyBtn);
  
  // copyBtn.textContent = "Copy Password";
  // copyBtn.setAttribute("style", " border: none; background-color: hsl(360, 91%, 36%); border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%); display: inline-block; font-size: 22px; line-height: 22px; margin: 16px 16px 16px 20px; padding: 14px 34px; text-align: center; cursor: pointer;")

// function copyPassword() {
//     var copyText = document.getElementById("#password");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999)
//     document.execCommand("copy");
//     alert("Copied the text: " + copyText.value);
  
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// copyToClip.addEventListener("click", copyPassword);

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
