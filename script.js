// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var password = {
  length: 0,
  incLwrCase: false,
  incUppCase: false,
  incNumbs: false,
  incSpecials: false,
  includeInPassword: []
}







function getPasswordOptions(){
    do{
      var pwordLenght = prompt("Choose how long you would like your password to be: Minimum length 8, Maximum length 128");//user specifies length
        if(pwordLenght >= 8 && pwordLenght <=128){
          validation = true;
          break;
        } else if (pwordLenght > 128){
          alert("You have requested a password longer than 128 characters"); 
          validation = false;
        } else if (pwordLenght < 8){
          alert("too small");
          validation = false;
        }
      }
      while (validation != true);

      password.length = pwordLenght;

      userChoiceLwr = confirm("Do you want your password to include lower case characters?");
      if(userChoiceLwr === true){
        password.incLwrCase = true;

      }
      userChoiceUppr = confirm("Do you want your password to include upper case characters?");
      if(userChoiceUppr === true){
        password.incUppCase = true;
      }
      userChoiceNumb = confirm("Do you want your password to include numbers?");
      if(userChoiceNumb === true){
        password.incNumbs = true;

      }
      userChoiceSpecials = confirm("Do you want your password to include special characters?");
      if(userChoiceSpecials === true){
        password.incSpecials = true;
      
      }

      return password;
      
  }

  
 
getPasswordOptions();
console.log(password);




// Function for getting a random element from an array
function getRandom(arr) {
}

// Function to generate password with user input
function generatePassword() {
  console.log(password.incLwrCase);
  
  if(password.incLwrCase === true){
    password.includeInPassword = password.includeInPassword.concat(lowerCasedCharacters);
  }
  
  if(password.incUppCase === true){
    password.includeInPassword = password.includeInPassword.concat(upperCasedCharacters);
  }
  
  if(password.incNumbs === true){
    password.includeInPassword = password.includeInPassword.concat(numericCharacters);
  }
  
  if(password.incSpecials === true){
    password.includeInPassword = password.includeInPassword.concat(specialCharacters);
  }
  
}

generatePassword();
console.log(password);
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);