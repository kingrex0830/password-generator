// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// This is where we generate the password
function generatePassword() {
  // Set default length of the password, will be changed by the user later
  var passLength= "";
  // User input for changing the length of the password
  var askLength = window.prompt("How long would you like your password? Choose between 8 and 128 characters.");
  Number(askLength);
  // Rejects user input if input is greater than 128 or less than 8. If user input is between these numbers, it becomes the new password length
  if (askLength < 8) {
    alert("Please pick a longer character limit.");
    return;
  } else if (askLength > 128) {
    alert("Please pick a smaller character limit.");
    return;
  } else if (askLength <= 128 && askLength >= 8) {
    passLength = askLength;
  } else {
    return;
  }
  // Sets characters and password as empty variables to be filled in later
  var characters = [];
  var password = "";
  // Asks user what kinds of characters they want in their password
  var useLowercase = confirm("Would you like lowercase letters in your password?");
  var useUppercase = confirm("Would you like uppercase letters in your password?");
  var useNum = confirm("Would you like numbers in your password?");
  var useSpecChar = confirm("Would you like special characters in your password?");
  // Pushes the appropriate characters onto the characters variables based on user input
  if (useLowercase) {
    characters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }
  if (useUppercase) {
    characters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }
  if (useNum) {
    characters.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
  }
  if (useSpecChar) {
    characters.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "`", "~", "[", "]", "{", "}", "|", ",", "<", ">", ".", "?", "/", " ");
  } else if (!useLowercase && !useUppercase && !useNum && !useSpecChar) {
    alert("Please choose at least one character set!")
  }
  // Uses a for loop to create a string made from random parts of the characters array, then assigns that value to the password variable
  for (i = 0 ; i < passLength ; i++) {
    var randomChar = characters[Math.floor(Math.random() * characters.length)];
    password = password + randomChar;
  }
  // Returns the new password for the user
  return password;

}
// Puts the generated password in the HTML textbox
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Runs the writePassword function on clicking the button
generateBtn.addEventListener("click", writePassword);
