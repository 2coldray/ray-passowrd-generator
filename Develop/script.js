// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Define Function generatePassword();
function generatePassword() {
  //make var for user prompt
  var userPrompt = prompt("How many characters would you like your password to be?");
  console.log(userPrompt)

  //Need if/else statement for telling user to pick number between lower case
  if (userPrompt < 8 || userPrompt > 128) {
    alert("Number must be between 8 and 128")
  }

  //Make variable called upperCased letters
  var upperCased = confirm("Do you want uppercase letters?")
  console.log(upperCased)

  //Make variable called lowerCased letters
  var lowerCased = confirm("Do you want lowercse letters?")
  console.log(lowerCased)

  //Make variable called numbers
  var numCharacters = confirm("Do you want numeric characters?")
  console.log(numCharacters)

  //Make variable called special characters
  var specialCharacters = confirm("Do you want special characters?")
  console.log(specialCharacters)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
