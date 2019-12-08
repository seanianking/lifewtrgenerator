var lengthEl = document.getElementById("length");
var upperEl = document.getElementById("uppercase");
var lowerEl = document.getElementById("lowercase");
var specialEl = document.getElementById("specials");
var numberEl = document.getElementById("numbers");
var submitEl = document.getElementById("generate");
var copyEl = document.getElementById("copy");
var passwordEl = document.getElementById("password");



//password generate function
passwordEl.addEventListener("click", function (){

var passwordSelector = "";
let length = parseInt(lengthEl.value);
let lowerCase = lowerEl.checked;
let upperCase = upperEl.checked;
let specials = specialEl.checked;
let numbers = numberEl.checked;

//datasets to pull from
var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerSet = "abcdefghijklmnopqrstuvwxyz";
var numbSet = "0123456789";
var specSet = "`~!@#$%^&*()_-+=|}{[]';:/?><,.";

//reading if boxes are checked, which characters will be used

if (lowerCase){
    passwordSelector += lowerSet
};
if (upperCase){
    passwordSelector += upperSet
};
if (specials){
    passwordSelector += specSet
};
if (numbers){
    passwordSelector += numbSet
};
if (length < 8 || length > 100 ) {
    alert("Password must be between 8 and 100 characters long");
};
passwordEl.innerText(length, passwordSelector);

})