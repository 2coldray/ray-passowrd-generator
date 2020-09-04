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
  var userPrompt = prompt(
    "How many characters would you like your password to be?"
  );
  console.log(userPrompt);

  //Need if/else statement for telling user to pick number between lower case
  if (userPrompt < 8 || userPrompt > 128) {
    alert("Number must be between 8 and 128");
    var newPrompt = prompt(
      "How many characters would you like? Choose number between 8 and 128"
    );
    console.log(newPrompt);
  }

  //Make variable called upperCased letters
  var upperCased = confirm("Click OK to confirm upper case letters");
  console.log(upperCased);

  //Make variable called lowerCased letters
  var lowerCased = confirm("Click OK to confirm lower case letters");
  console.log(lowerCased);

  //Make variable called numbers
  var numCharacters = confirm("Click OK to confirm numeric characters");
  console.log(numCharacters);

  //Make variable called special characters
  var specialCharacters = confirm("Click OK to confirm special characters");
  console.log(specialCharacters);

  //Make array with just lowercase, uppercase, numbers, and special characters
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q","s","t","v","w","y","z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "S", "T", "V", "Y", "Z"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var specialCharacter = ["!", "@", "#", "$", "@", "*"];

  //Make an empty string that holds random characters given the users prompt response
  var charAvailable = [];

  //Make if === true statements for each case, then add to string
  if (upperCased === true) {
    charAvailable = charAvailable.concat(upperCase);
 
  }
  if (lowerCased === true) {
    charAvailable = charAvailable.concat(lowerCase);

  }

  if (numbers === true) {
    charAvailable = charAvailable.concat(numbers);

  }

  if (specialCharacters === true) {
    charAvailable = charAvailable.concat(specialCharacter);

  }

  if (
    upperCased === false &&
    lowerCased === false &&
    numCharacters === false &&
    specialCharacters === false
  ) {
    alert(
      "Can't Generate Password. Must choose at least 1 character type to make password"
    );
  }

  //Make Variable called Result
  var finalResult = [];

  //Make for loop to loop over charAvailable, use length of userPrompt
  for (var i = 0; i < userPrompt.length; i++) {
    var randomAmount = Math.floor(Math.random() * charAvailable.length);
    var randomIndex = charAvailable[randomAmount];
    finalResult = finalResult +=randomIndex;
    return finalResult;
    
  }

 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
