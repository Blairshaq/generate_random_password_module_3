// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} //end function

//Generate Password function

function generatePassword() {
  var passwordProvidedLength = 0

  do {
    var passwordLength = parseInt(prompt("Please Enter 8 to 128 characters"))


  } while (passwordLength < 8 || passwordLength > 128) //prompt user until length is not between 8 - 128

  passwordProvidedLength = passwordLength // assign the user input password length

  //initially all character types are not included in password pattern
  var includeLowerCase = false
  var includeUpperCase = false
  var includeNumericCharacters = false
  var includeSpecialCharacters = false
  var charset = "" //empty characterset


  var numberOfCharacterTypesSelected = 0 // to check atleast 1 character type is selected
  do {
    includeLowerCase = confirm("Do You Want to Add Lower Case Characters In Password")
    includeUpperCase = confirm("Do You Want to Add Upper Case Characters In Password")
    includeNumericCharacters = confirm("Do You Want to Add Number Characters In Password")
    includeSpecialCharacters = confirm("Do You Want to Add Special Characters In Password")

    //to validate atleast 1 character type is selected
    if (includeLowerCase) numberOfCharacterTypesSelected++
    if (includeUpperCase) numberOfCharacterTypesSelected++
    if (includeNumericCharacters) numberOfCharacterTypesSelected++
    if (includeSpecialCharacters) numberOfCharacterTypesSelected++

  } while (numberOfCharacterTypesSelected <= 0)

//selecting which character type is to included 
  if (includeLowerCase) {
    charset += "abcdefghijklmnopqrstuvwxyz"
  }

  if (includeUpperCase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (includeNumericCharacters) {
    charset += "0123456789"
  }

  if (includeSpecialCharacters) {
    charset += "`~!@#$%^&*()_-[]{}/*-+"
  }


  var newPassword = ""
  for (var i = 0, n = charset.length; i < passwordProvidedLength; ++i) {
    //randomly selecting the characters from character set string according to the length of password
    newPassword += charset.charAt(Math.floor(Math.random() * n))
  }

  return newPassword
} //end function



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
