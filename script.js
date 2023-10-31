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
  passwordInput: [],
  passwordOutput: []
}







function getPasswordOptions(){
    do{
      var pwordLength = prompt("Choose how long you would like your password to be: Minimum length 8, Maximum length 128");//user specifies length
        if(pwordLength >= 8 && pwordLength <=128){
          validation = true;
          break;
        } else if (pwordLength > 128){
          alert("The maximum number of characters is 128. Please try again."); 
          validation = false;
        } else if (pwordLength < 8){
          alert("To ensure you get a strong password, the minimum number of characters is 8. Please try again.");
          validation = false;
        }
      }
      while (validation != true);

      password.length = Number(pwordLength);
      
      userChoiceLwr = confirm("Do you want your password to include lower case characters?");
      if(userChoiceLwr === true){
        password.incLwrCase = true;
        password.passwordInput = password.passwordInput.concat(lowerCasedCharacters);

      }
      userChoiceUppr = confirm("Do you want your password to include upper case characters?");
      if(userChoiceUppr === true){
        password.incUppCase = true;
        password.passwordInput = password.passwordInput.concat(upperCasedCharacters);
      }
      userChoiceNumb = confirm("Do you want your password to include numbers?");
      if(userChoiceNumb === true){
        password.incNumbs = true;
        password.passwordInput = password.passwordInput.concat(numericCharacters);
        password.passwordInput = password.passwordInput.concat(numericCharacters);

      }
      userChoiceSpecials = confirm("Do you want your password to include special characters?");
      if(userChoiceSpecials === true){
        password.incSpecials = true;
        password.passwordInput = password.passwordInput.concat(specialCharacters);
      
      }

      if(password.incLwrCase === false && password.incUppCase ===false && password.incNumbs === false && password.incSpecials === false){
        alert("You must select at least one character set for your password, please try again." );
        location.reload();
      }

      return password;
      
  }

  
 
getPasswordOptions();





// Function for getting a random element from an array
//Needs to be set to the total number of values within the inputArray
function getRandom() {
  var randomIndex = Math.floor(Math.random() * password.passwordInput.length) + 1;
  return(randomIndex);
}

getRandom();

// Function to generate password with user input
function generatePassword() {
  console.log(password.incLwrCase);
  //ensure that within the first 8 characters at least 2 characters from each selected set are included.
  var firstEight = [0,1,2,3,4,5,6,7]
  var randIndexInFirstEight = Math.floor(Math.random()*firstEight.length)+1;

  randLetter = Math.floor(Math.random() * upperCasedCharacters.length) + 1;
  randSpecial = Math.floor(Math.random() * specialCharacters.length) + 1;
  randNumb = Math.floor(Math.random()* numericCharacters.length)+1;

  for(var i =0;i <= password.length;i++){
    password.passwordOutput[i] = password.passwordInput[getRandom()];
  }



  if(password.incLwrCase === true){
    password.passwordOutput[randIndexInFirstEight] = lowerCasedCharacters[randLetter];
    firstEight.splice(randIndexInFirstEight,1);
  }
  if(password.incLwrCase === true){
    password.passwordOutput[randIndexInFirstEight] = lowerCasedCharacters[randLetter];
    firstEight.splice(randIndexInFirstEight,1);
  }
  if(password.incUppCase === true){
    password.passwordOutput[randIndexInFirstEight] = upperCasedCharacters[randLetter];
    firstEight.splice(randIndexInFirstEight,1);
  }
  if(password.incUppCase === true){
    password.passwordOutput[randIndexInFirstEight] = upperCasedCharacters[randLetter];
    firstEight.splice(randIndexInFirstEight,1);
  }
  if(password.incNumbs === true){
    password.passwordOutput[randIndexInFirstEight] = numericCharacters[randNumb];
    firstEight.splice(randIndexInFirstEight,1);  
  } 
  if(password.incNumbs === true){
    password.passwordOutput[randIndexInFirstEight] = numericCharacters[randNumb];
    firstEight.splice(randIndexInFirstEight,1);  
  } 
  if(password.incSpecials === true){
    password.passwordOutput[randIndexInFirstEight] = specialCharacters[randSpecial];
    firstEight.splice(randIndexInFirstEight,1); 
  }
  if(password.incSpecials === true){
    password.passwordOutput[randIndexInFirstEight] = specialCharacters[randSpecial];
    firstEight.splice(randIndexInFirstEight,1); 
  }

  console.log(firstEight);
  return  password.passwordOutput.join('');
}



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