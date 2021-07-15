// Assignment Code
let body = document.body;

let characters = {
  upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  symbol: ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'],
  num: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
};

let userChoices = [];
let password = "";
let generateBtn = document.querySelector("#generate");


// Attempt at making a copy button by appendChild() method. 

let copyToClip = document.querySelector("#password");

// Creating the copy button
function createCpyBtn() { 
  let copyBtn = document.createElement("button");
  let cardFooter = document.querySelector(".card-footer");
  // copyBtn.appendChild(document.createTextNode("Click Me!"));
  cardFooter.appendChild(copyBtn);
  copyBtn.textContent = "Copy Password";
  copyBtn.setAttribute("style", "border: none; background-color: hsl(360, 91%, 36%); border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%); display: inline-block; font-size: 22px; line-height: 22px; margin: 16px 16px 16px 20px; padding: 14px 34px; text-align: center; cursor: pointer;")
  // Making the copy password function
  function copyPassword() {
    let copyText = document.querySelector("#password");
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);  
  }
  copyToClip.addEventListener("click", copyPassword);
  copyBtn.addEventListener("click", copyPassword);
  console.log(copyPassword); // Checking what was copied
};

createCpyBtn()

// Write password to the #password input

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  // clearPassword(); // Clear password function, not working right now.
  passwordText.value = password;

}

// Function that creates the password based on user inputs

function generatePassword() {
  let userInput = parseInt(prompt("Choose the length of your password between 8 & 128"));
  
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

  let upperChoice = confirm("Include upper case letters?");
  let lowerChoice = confirm("Include lower case letters?");
  let numberChoice = confirm("Include numbers?");
  let symbolChoice = confirm("Include special characters?");

  console.log(upperChoice, lowerChoice, numberChoice, symbolChoice)

  if (upperChoice === false && lowerChoice === false && numberChoice === false && symbolChoice === false) {
    alert ("Please choose at least 1 criteria.")
    return;
  }

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

  for (let i = 0; i < userInput; i++) {
    let random = Math.floor(Math.random() * userChoices.length);
    password += userChoices[random];
  }

  console.log(password) //checking result of password with chosen combo

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






