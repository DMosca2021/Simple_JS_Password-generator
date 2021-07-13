// Assignment Code
var body = document.body;

var characters = {
  upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  symbol: ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'],
  num: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
};

var userChoices = [];
var password = "";
var generateBtn = document.querySelector("#generate");
// var copyToClip = document.querySelector("#password")

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  clearPassword();
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

  console.log(upperChoice, lowerChoice, numberChoice, symbolChoice)


  // ------- Trying to make it redo confirms if no character types are chosen. ------//

  // if (upperChoice && lowerChoice && numberChoice && symbolChoice == false) {
  //   alert("No choice made!")
  //   generatePassword()
  // };


// Creating new array to pull new password from

  if (upperChoice === true) {
    userChoices = userChoices.concat(characters.upper)
    alert("Will include upper case letters!")
  } else {
    alert("Will not include upper case letters!")
  }

  if (lowerChoice === true) {
    userChoices = userChoices.concat(characters.lower)
    alert("Will include lower case letters!")
  } else {
    alert("Will not include lower case letters!")
  }

  if (numberChoice === true) {
    userChoices = userChoices.concat(characters.num)
    alert("Will include numbers!")
  } else {
    alert("Will not include numbers!")
  }

  if (symbolChoice === true) {
    userChoices = userChoices.concat(characters.symbol)
    alert("Will include symbols!")
  } else {
  alert("Will not include symbols!")
  }

// Creating new password from created array 

  for (var i = 0; i < userInput; i++) {
    var random = Math.floor(Math.random() * userChoices.length);
    password += userChoices[random];
  }


  console.log(password) //checking result of password with chosen combo

  return password;
}

// Function to clear text box for each new password generated.

function clearPassword() {
  var passwordText = document.querySelector("#password");
	
  if(passwordText.value == "") {
		return
	} else {
      passwordText.value = "Your Secure Password"
  }
}


// Attempt at making a copy button by appendChild() method.

// var copyBtn = document.createElement("button");

// document.cardFooter.append(copyBtn);
  
// copyBtn.textContent = "Copy Password";
// copyBtn.setAttribute("style", " border: none; background-color: hsl(360, 91%, 36%); border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%); display: inline-block; font-size: 22px; line-height: 22px; margin: 16px 16px 16px 20px; padding: 14px 34px; text-align: center; cursor: pointer;")

// function copyPassword() {
//     var copyText = document.getElementById("#password");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999)
//     document.execCommand("copy");
//     alert("Copied the text: " + copyText.value);  
// }
// copyToClip.addEventListener("click", copyPassword);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





