// Assignment code here


// Get references to the #generate element
var generateBtn = document.getElementById("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "`", "~", "[", "]", "{", "}", "|", ",", "<", ">", ".", "?", "/", " "];

function generatePassword() {

  var userOptions = {
    length: "",
    useLowercase: null,
    useUppercase: null,
    useNumbers: null,
    useSymbols: null
  }

  var askLength = window.prompt("How long would you like your password? Choose between 8 and 128 characters.");
  Number(askLength);

  if (askLength < 8) {
    alert("Please pick a longer character limit.");
    return;
  } else if (askLength > 128) {
    alert("Please pick a smaller character limit.");
    return;
  } else if (askLength <= 128 && askLength >= 8) {
    userOptions.length = askLength;
  } else {
    return;
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
