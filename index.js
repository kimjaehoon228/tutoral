//console.log(`Hello`);
//console.log(`i like pizza!`);

//window.alert(`this is an alert!`);
//window.alert(`I like pizza!`);

//this is a comment

/* 
  This
  is
  a
  comment
  */
/*
  document.getElementById("myH1").textContent = `Hello`;
  document.getElementById("myP").textContent = `I like Pizza!`
*/
// --------------------------------------------------------------

// varialbe = A container that stores a value.
//            Behaves as if it were the value it contains.

//1. declaration  let x;
//2. assgnment     x= 100;

//number
//let x;
//x = 123;
//let age= 25;
//let price =10.99;
//let gpa =2.1;
//string
//let firstName = "Bro";
//let favoriteFood = "pizza";
//let email ="Bro123@gmail.com";
//boolean
//let online = false;
//let forSale =true;
//let isStudent = true;

//console.log(`Your gpa is ${gpa}`);
//console.log(typeof age);
//console.log(typeof price);
//console.log(typeof gpa);
//console.log(typeof firstName);
//console.log(typeof email);
//console.log(`Your name is ${firstName}`);
//console.log(`You like ${favoriteFood}`);
//console.log(`Your email is ${email}`);
//console.log(typeof online);
//console.log(`Bro is online:${online}`);
//console.log(`Is this car for sale: ${forSale}`);
//console.log(`Enrolled: ${isStudent}`);

//let fullName = "bro Code";
//let age = 25;
//let Student = false;

/*
document.getElementById("p1").textContent = `Your name is${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${Student}`;
*/

//arithmetic operators = operands (values, variables, etc.)
//operators (+ - * /)
//ex. 11=x+5;

//let students=30;

//students = students +1;
//students = students -1;
//students = students *2;
//students = students /2;
//students = students **2;     //거듭제곱
//let extraStudents = students % 3;    //나머지

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;
//students--;
//console.log(students);

/*
 operator precedence
 1. parenthesis ()
 2. exponents(지수)
 3. multiplication(곱셈) & division(나눗셈) & modulo
 4. addition & subtration
*/

//let result = 1 + 2 * 3 + 4 ** 2;
//let result = 12 % 5 + 8 / 2
//console.log(result);

//How to accept user input
//1.EASY WAY = winodw prompt
//2.PROFESSIONAL WAY = HTML textbox

//let username;
//username = window.prompt("What's your name?");
//console.log(username);
/*
document.getElementById("mySubmit").onclick = function(){
  username =document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myH1").textContent=username;
}
*/

//next 5-----------------------------------------------------
//type conversion = change the datatype of a value to another
//                  (strings,numbers,booleans)

//let age = window.prompt("How old are you?");
//age += 1;
//console.log(age);
//console.log(typeof age);            //'25''1' string
//age = Number(age);
//age -= 200;
//console.log(typeof age, age);       // number


//let x = "pizza";        // Nan 'number'
//let y = "pizza";         // pizza 'string'
//let z = "pizza";         // true 'boolean'12
 
//let x = "0";     //0 'number'
//let y = "0";     //0 string
//let z = "0";     // true 'boolean'


//let x = "";     //0 'number'
//let y = "";     //string
//let z = "";     // false 'boolean'

//let x;     //NaN 'number'
//let y;     //undefined string
//let z;     //false 'boolean'

//x = Number(x); 
//y = String(y);
//z = Boolean(z);

//console.log(x, typeof x);  
//console.log(y, typeof y); 
//console.log(z, typeof z);  
//----------------------------------------------------------
//next6
// const = a varialbe that can't be changed

/*
const pi = 3.14159;    //let chenge
let radius;
let circumference;
//pi = 420.68;  //onstant variable.
//radius = window.prompt("Enter the radius of a circle");
//radius = Number(radius);  
//circumference = 2 * pi * radius; // 2ㅠr 

document.getElementById("mySubmit").onclick = function(){
  radius = document.getElementById("myText").value;
  radius = Number(radius);  
  circumference = 2 * pi * radius; // 2ㅠr 
  document.getElementById("myH3").textContent=circumference;
  console.log(circumference);
}
*/

//Next 7  COUNTER PROGRAM
/*
const decraseBtn = document.getElementById("decraseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count;
}
decraseBtn.onclick =function(){
  count--;
  countLabel.textContent = count;
}
resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}
*/

//Math = built-in object that provides a
//       collection of propetties and methods

//console.log(Math.PI);
//console.log(Math.E);
//let x =-5;
//let y =2
//let z;

//z= Math.round(x);  //반올림
//z= Math.floor(x);    //내림
//z= Math.ceil(x);     //올림   
//z= Math.trunc(x);    //소수부분제거
//z= Math.pow(x,y);      //x^y    9
//z= Math.sqrt(x);        //제곱근
//z= Math.log(x);           //로그
//z= Math.sin(x);
//z= Math.cos(x,y);
//z= Math.tan(x,y);
//z= Math.abs(x);       //절대값 
//z= Math.sign(x);        //부호
//let max= Math.max(x,y,z);
//let min= Math.min(x,y,z);
//console.log(z);
//console.log(max);
//console.log(min);

// NEXT9  RANDOM NUMBER GENERATOR----------------------
//let randomNum = Math.random();
//let randomNum = Math.floor(Math.random()*6+1);  //1~6
//console.log(randomNum);

//const min = 50;
//const max = 100;
//let randomNum = Math.floor(Math.random()*(max-min)) +min;
//console.log(randomNum);
/*
const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const max = 6;
const min = 1;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
  randomNum1=Math.floor(Math.random() * max) + min;
  randomNum2=Math.floor(Math.random() * max) + min;
  randomNum3=Math.floor(Math.random() * max) + min;
  myLabel1.textContent=randomNum1;
  myLabel2.textContent=randomNum2;
  myLabel3.textContent=randomNum3;
}
*/

//NEXT 10 
//IF STATEMENTS = if a condition is true, execute some code
//                if not, do something else
/*
let age =25;
let hasLicense = false;
if (age>=16){
  console.log("You are old enough to drive")
if(hasLicense){
  console.log("You have your license!")
}else{
  console.log("You must be  have your license yet!")
  }
}else{
  console.log("you must be 16+ to have a license")
}
*/
/*
  let time =9;
  if(time<12){
    console.log("Good morning");
  }else{
    console.log("goodafternoon");
  }
*/
/*
  let isStudent =ture;
  if(isStudent){
    console.log("You are a student");
  }else{
    console.log("You are Not a student");
  }
*/
/*
const myText= document.getElementById("myText");
const mySubmit=document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

  age = myText.value;
  age =Number(age);

if(age >=100){
  console.log("You are Too oled to enter this site");
  resultElement.textContent = `You are Too oled to enter this site`;
}
else if(age == 0){
  console.log("You can't enter. You were just born");
  resultElement.textContent =`You can't enter. You were just born`;
}
else if(age >= 18){
  console.log("You are oled enough to enter this site");
  resultElement.textContent = `You are oled enough to enter this site`
}
else if(age < 0){
  console.log("Your age can't be bebow 0");
  resultElement.textContent = `Your age can't be bebow 0`
}
else{
  console.log("You must be 18+ to enter this site");
  resultElement.textContent = `You must be 18+ to enter this site`
}
}
*/

//NEXT 11. Checked property
/*
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
  if (myCheckBox.checked){
    subResult.textContent =`You are subscribed!`;
  }
  else{
    subResult.textContent =`You are Not subscribed`;
  }
  
  if(visaBtn.checked){
    paymentResult.textContent =`You are paying with visa`;
  }
  else if(masterCardBtn.checked){
    paymentResult.textContent =`You are paying with MasterCard`;
  }
  else if(payPalBtn.checked){
    paymentResult.textContent =`You are paying with payPal`;
  }
}
*/

// NEXT 12. ternary operator = a shortcut to if{} and else{} statements
// helps to assign a variable based on a condition
// condition ? codeIfTrue : codeIfFalse;

//let age = 21;
//let massage = age >= 18 ? "You're an adult":"You're a minor"
//console.log(massage);

//let time = 9;
//let massage = time < 12 ? "Good moning" : "Good afternoon";
//console.log(massage);

//let isStudent = true;
//let massage = isStudent ? "You are a student" : "You are Not student";
//console.log(massage);

//let purchaseAmount = 110;
//let discount = purchaseAmount >=100 ? 10 : 0;
//console.log(`You total is $${purchaseAmount-purchaseAmount*(discount/100)}`)

// NEXT 13. SWITCH = can be an efficient replacemnet to many else if statements

//let day = 0;
/*
if(day == 1){
  console.log(`It is Monday`);
}
else if(day == 2){
  console.log(`It is Tuesday`);
}
else if(day == 3){
  console.log(`It is Wednesday`);
}
else if(day == 4){
  console.log("It is Thursday");
}
else if(day == 5){
  console.log('It is Friday');
}
else if(day == 6){
  console.log('It is Saturday');
}
else if(day == 7){
  console.log('It is sunday');
}
else{
  console.log('It is Not a day');
}
*/
/*
switch(day){
  case 1:
    console.log('It is Monday');
    break;
  case 2:
    console.log('It is Tuesday');
    break;
  case 3:
    console.log('It is Wednesday');
    break;
  case 4:
    console.log('It is Thursday');
    break;
  case 5:
    console.log('It is MonFridayday');
    break;
  case 6:
    console.log('It is Saturday')
    break;
  case 7:
    console.log('It is sunday');
    break;
  default:
    console.log('It is Not a day')                      
}
*/
/*
let testScore = 77;
let letterGrade;

switch(true){
  case testScore >= 90:
    letterGrade = 'A';
    break;
  case testScore >= 80:
    letterGrade = 'B';
    break;
  case testScore >= 70:
    letterGrade = 'C';
    break;
  case testScore >= 60:
    letterGrade = 'D';
    break;
  default:
    letterGrade = 'F';
}
console.log(letterGrade)
*/

//NEXT14. strung methods = allow you to manipulate and work with text (strings)
/*
let userName =" BroCode"
console.log(userName.charAt(0));  //n번째 문자 반환  B
console.log(userName.indexOf("o")) // "n" 번째 자리 반환  3
console.log(userName.length)  // 문자 길이 반환   8
console.log(userName.trim()); //문자 앞 공백 제거  BroCode
console.log(userName.toUpperCase()) //대문자  BROCODE
console.log(userName.toLowerCase()) //소문자    brocode
console.log(userName.repeat(2)) //문자열 반복  BroCode BroCode
console.log(userName.startsWith(" "))  //시작조건?비교? true
console.log(userName.endsWith(" "))   //false
console.log(userName.includes(" "))  //조건포함여부? true

let phoneNumber = "123-456-7890";
console.log(phoneNumber.replaceAll("-",""))   //1234567890
console.log(phoneNumber.padStart(14,"0"));    //00123-456-7890
*/

//NEXT15 string slicing = creating a substring
//                        from a portion of another string
//                        string.slice(start, end)
/*
const fullName ="Bro code";
console.log(fullName.slice(0,3));    //start,end  Bro
console.log(fullName.slice(-4));     //끝에서  code

let firstName = fullName.slice(0, fullName.indexOf(" ")); //Bro
let lastName = fullName.slice(fullName.indexOf(" ")+1)  //code

console.log(firstName);
console.log(lastName);

const email = "mario202@asjfla.net"
let userName = email.slice(0, email.indexOf("@")); // mario202
let extension = email.slice(email.indexOf("@")+1); //asjfla.net
console.log(userName);
console.log(extension);
*/

//NEXT 16. Method chaining = Calling one method after another
//                           in one continuous line of code.

//----------NO METHOD CHAINING--------------
//let username = window.prompt("이름을 입력하세요:");
/*
username = username.trim();  //공백제거
let letter = username.charAt(0); //첫문자 선택
letter = letter.toUpperCase(); //대문자 변경

let extraChars = username.slice(1); // 첫글자 잘라냄 
console.log(extraChars);
extraChars =extraChars.toLowerCase(); //소문자 변경
username = letter +extraChars;
console.log(username);    
*/ 
//----------METHOD CHAINING--------------
/*
username = username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLocaleLowerCase();
console.log(username);   
*/

//NEXT 17. Logical operators = used to combine or manipulate boolean values
//                            (true of false)
//                            AND == &&
//                            OR  == ||
//                            NOT = !
/*
const temp =200;
if(temp > 0 && temp <= 30){
  console.log("The weather is Good");
}
else{
  console.log("The wearther is BAD");
}
*/

//NEXT 18.    = assignment operator
//           == comparison operator (compare if values are equal)
//          === strict equality operator (compare if values & datatype are equal)
//           != inequality operator
//           !== strict inequality operator
//pi = 3.14
//pi ===3.14     true
//pi=="3.14"     true
//pi==="3.14"    false

//NEXT 18. while loop = repeat some code WhILE some condition is true
/*
let username ="";
if (username ===""){
  console.log(`You didn't enter your name`);
}
else{
  console.log(`Hello ${username}`);
}
*/
/*
let username ="";
while(username ==="" || username===null){
  username =window.prompt(`Enter your name`);
} 

console.log(`Hello ${username}`);
*/

//let loggedIn;
//let username;
//let password;
/*
while(!loggedIn){
  username = window.prompt('이름입력:');
  password = window.prompt('암호입력:');

  if(username==="username" && password === "password"){
    loggedIn =true;
    console.log("You are logged in");
  }
  else{
    console.log("Invalid creedentials! Please try again")
  }
}
*/
/*
do{
  username = window.prompt('이름입력:');
  password = window.prompt('암호입력:');

  if(username==="username" && password === "password"){
    loggedIn =true;
    console.log("You are logged in");
  }
  else{
    console.log("Invalid creedentials! Please try again")
  }
}while(!loggedIn)
*/

//NEXT 20. FOR loop = repeat some code a LIMIITED amount of times
//for(let i=10; i > 0; i-=1){
//  console.log(i,"hello");
//}
/*
for(let i=1; i <= 20; i++){
  if(i==13){
    //continue;  //해당제외 계속 
    break;       //해당 멈춤
  }
  else{
    console.log(i);
  }
}
*/
//NEXT 21. NUMBER GUESSING GAME
/*
const minNum=1;
const maxNum=100;
const answer= Math.floor(Math.random() * (maxNum -minNum +1)+minNum);

let attempts = 0;
let guess;
let running = true;

while(running){
  guess = window.prompt(`Guess a number between ${minNum}-${maxNum}`);

  if(isNaN(guess)){
    window.alert("Please enter a valid number");
  }
  else if(guess < minNum || guess > maxNum ){
    window.alert("Please enter a valid number");
  }
  else{
    attempts++;
    if(guess < answer){
      window.alert("Too LOW! TRY AGAIN");55
    }
    else if(guess > answer){
      window.alert("TOO HIGH! TRY AGAIN");
    }
    else{
      window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
      running=false;
    }
  }
}
*/
//NEXT22 .function = A section of reusable code.
//                   Declare code once,use it whenever you want.
//                   Call the function to execute that code,.
/*
function happyBirthday(username,age){
  console.log("Happy birthdu to tou!");
  console.log("Happy birthdu to tou!");
  console.log(`Happy birthdu dear ${username}`);
  console.log(`You are ${age} years old`);
}
happyBirthday("jihoo",14);
happyBirthday("spongebob",30);

function add(x, y){
  let result = x + y;
  return result;
}
console.log(add(2,3));
let answer = add(2,3);
console.log(answer);

function subtract( x, y){
  return x - y;
}
function multiply(x, y){
  return x * screenY;
}
function divide(x,y){
  return x / y;
}

console.log(divide(2,3));

function isEven(number){
  return number % 2 === 0 ? true : false;
  //if(number % 2 === 0){
  //  return true;
 // }
 // else{
  //  return false;
 // }
}
console.log(isEven(66));
console.log(isValidEmail("Bor@akasfd.dkf"));
function isValidEmail(email){
  return email.includes("@") ? true : false;
  //if(email.includes("@")){
  //  return true;
  //}
  //else{
  //  retrun false;
  //}
}
*/

//NEXT 23.Variable scope = where a varialbe is recognized
//                         and accessible (local vs global)
/*
let y = 3;             //global scope
function1();
function2();
function function1(){
  let x =1;                       //local scope
  console.log(x);
  console.log(y);
}
function function2(){
  let x=2;
  console.log(x);
}
*/
/*
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result =document.getElementById("result");
let temp;

function convert(){
  if(toFahrenheit.checked){
    temp =Number(textBox.value);
    temp = temp * 9/5 + 32;
    result.textContent=temp.toFixed(1) +"°F"
  }
  else if(toCelsius.checked){
    temp =Number(textBox.value);
    temp = (temp -32) * (9/5);
    result.textContent=temp.toFixed(1) +"°C"
  }
  else{
    result.textContent="Select a unit"
  }
}
*/
//NEXT 25. arrays = a variable like structure that can hold
//                 more than 1 value
/*
let fruits = ["apple","orange","banana"];

fruits.push("coconut");  //삽입
fruits.pop();         //제거
fruits.unshift("mango");    //앞에서 삽입
fruits.shift();              //앞에서 제거
//fruits[3] = "coconut"   //
let numOfFruits = fruits.length       //배열 길이
let index =fruits.indexOf("orange");       // 해당 인덱스  -1(없음)
console.log(numOfFruits);           //3
console.log(index);                 //1
console.log(fruits[0]);      //apple
console.log(fruits[1]);        
console.log(fruits[2]);
console.log(fruits[3]);   //undifined

fruits.sort();  //문자 정렬
fruits.sort().reverse;  //문자 정렬.반대로
//for(let i=0;i<fruits.length;i++){   //오름차순
  for(let i=fruits.length;i>=0;i--){  //내림차순
  console.log(i,fruits[i]);
}
for(let fruit of fruits){
  console.log(fruit);
}
*/
//NEXT26 spread operator = ...allows an iterable such as an
//                         array or string to be expanded
//                         into seperate elements
//                         (unpacks the elements)
/*
let numbers = [1,2,3,4,5];
let maximum=Math.max(numbers);   //NAN
let maximum1=Math.max(...numbers);  //5
let minimum=Math.min(...numbers);
console.log(numbers,maximum1,minimum)

let username="Kim jaehoon"
let letters = [...username]; //(11) ['K', 'i', 'm', ' ', 'j', 'a', 'e', 'h', 'o', 'o', 'n']
let lettersjoin = [...username].join("-");  //'K-i-m- -j-a-e-h-o-o-n'
console.log(letters,lettersjoin);

let fruits = ["apple","orange","banana"];
let vegetabel = ["carrots","celery","potatoes"];
let foods = [...fruits, ...vegetabel,"eggs","milk"];
console.log(foods);  //['apple', 'orange', 'banana', 'carrots', 'celery', 'potatoes']
*/
//NEXT 27.Rest parameters
//rest parameters = (...rest) allow a function work with a variable
//                  number of arguments by bundling them into an array
//                  spread = expands an arriay into seperate elements
//                  rest = bundles seperate elements into an array

/*
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";
*/
//function openFridge(...foods){
//  console.log(foods);
//}
//openFridge(food1,food2,food3,food4,food5);
/*
function getFood(...foods){
  return foods;
}
const foods = getFood(food1,food2,food3,food4,food5);
console.log(foods);

function sum(...numbers){
  let result = 0;
  for (let number of numbers){
    result += number;
  }
  return result;
}

function getAverage(...numbers){

  let result = 0;
  for (let number of numbers){
    result += number;
  }
  return result / numbers.length;
}
console.log(sum(5,3,4,3,2,34,4,3))
const total = getAverage(75,100,85,90,50);
console.log(total);

function combineStrings(...strings){
  return strings.join(" ");
}
const fullName = combineStrings("Mr.","Spongebob","squarepants","III");
console.log(fullName);
*/
//NEXT 28. Dice Roller program
/*
function rollDice(){
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for(let i = 0; i<numOfDice; i++){
    const value = Math.floor(Math.random() * 6) +1;
    values.push(value);
    images.push(`<img src="images/${value}.png" alt="Dice ${value}">`);
  }

  diceResult.textContent =`dice: ${values.join(`,`)}`;
  diceImages.innerHTML = images.join('');
}
*/

//NEXT 29.random password generatro
/*
function generatePassword(length,
                          includeLowercase,
                           includeUppercase, 
                           includeNumbers,
                           includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    allowedChars = "";
    let password ="";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    
    if(length <= 0){
      return `(password length must be at least 1)`
    }
    if(allowedChars.length === 0){
      return `(At least 1 set of character need to be selected)`;
    }
for(let i=0; i<length; i++){
  const randomIndex = Math.floor(Math.random()*allowedChars.length)
  password += allowedChars[randomIndex];
}
   
    console.log(allowedChars); 
    return password;
}

const passwordLength =6;
const includeLowercas = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = false;

password = generatePassword(passwordLength,
                            includeLowercas,
                            includeUppercase,
                            includeNumbers,
                            includeSymbols);
console.log(`Generated password: ${password}`);
*/
//NEXT30. callback = a function that is passed as an argrument
//                   to another function.
//                   used to handle asynchronous operations.
//                   1.reading a file
//                   2.Network requests
//                   3.Interacting with databases

//                   "Hey, when you're done, call this next."
/*
hello(wait,leave,goodbye);
function hello(callback,callback2,call){
console.log("Hello");
callback();
callback2();
call();
}
function wait(){
  console.log("Wait!");
}
function leave(){
  console.log("Leave!");
}
function goodbye(){
  console.log("Goodbye!")
}

sum(displayConsole, 2, 5);
function sum(callback, x, y){
  let result = x + y;
  callback(result)
}
function displayConsole(result){
  console.log(result);
}
function displayPage(result){
  document.getElementById("myH1").textContent = result;
}
sum(displayPage,6,5);
*/
//NEXT 31. forEach() = method used to iterate over elements
//                     of an array and apply a specified function(callback)
//                     to each element
//                     array.forEach(callback)
//                     element, index, array are provided
/*
let numbers = [1,2,3,4,5];
numbers.forEach(cube);
numbers.forEach(display);
function display(element,index,array){
  console.log(element,index,array);
}

function double(element,index,array){
  array[index] = element * 2;
}
function triple(element,index,array){
  array[index] = element * 3;
}
function square(element,index,array){
  array[index] = Math.pow(element, 2);
}
function cube(element,index,array){
  array[index] = Math.pow(element, 3);
}

let fruits = ["apple","orange","BANANA","COCONUT"];
fruits.forEach(capitalize);
fruits.forEach(display);
function display(callback){
  console.log(callback);
}
function upperCase(element,index,array){
  array[index] = element.toUpperCase();
}
function lowerCase(element,index,array){
  array[index] = element.toLowerCase();
}
function capitalize(element,index,array){
  array[index] = element.charAt(0).toUpperCase()+element.slice(1);
}
*/
//NEXT. 32  .map()= accepts a callback and applies that function
//          to each element of an array, then return a new array
/*
let numbers = [1,2,3,4,5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);
function square(element){
  return Math.pow(element, 2)
}
function cube(element){
  return Math.pow(element,3);
}
console.log(numbers);
console.log(cubes);
console.log(squares);
displayPage(cubes,squares);
displayPage(squares);
function displayPage(a){
  document.getElementById("myH1").textContent = a;
}

let students = ["Spongebob","Patrick","Squidward","Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);
function upperCase(element){
  return element.toUpperCase(element);
}
function lowerCase(element){
  return element.toLowerCase(element);
}

console.log(studentsUpper,studentsLower);

const dates = ["2024-1-10","2025-2-20","2026-3--30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);
function formatDates(element){
  const parts = element.split("-");
  console.log(parts);
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
*/
//NEXT33. filter() = creates a new array by filtering
//                   out elements
/*
let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven);
let evenoddNums = numbers.filter(isOdd);
console.log(evenNums,evenoddNums);
function isEven(element){
  return element % 2 === 0;
}
function isOdd(element){
  return element % 2 !== 0;
}

let ages = [16,17,18,18,19,20,60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);
console.log(adults,children)
function isAdult(element){
  return element >= 18;
}
function isChild(element){
  return element < 18;
}

let words =["apple","orange","banana","kiwi","pomegranate","coconut"];
const shortWords = words.filter(getShortWords);
const lognWords = words.filter(getLongWords);
console.log(shortWords,lognWords);
function getShortWords(element){
  return element.length <= 6;
}
function getLongWords(element){
  return element.length > 6;
}
*/
//NEXT 34.reduce() = reduce the elements of an array to a single valus
/*
const prices = [5,30,10,25,15,20];
const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);
function sum(accumulator, element){
  return accumulator+element;
}
const grades = [75,50,90,80,65,95];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);
console.log(maximum,minimum);
function getMax(accumulator, element){
  return Math.max(accumulator, element);
}
function getMin(accumulator, element){
  return Math.min(accumulator, element);
}
*/
//NEXT 35. function declaration = define a reusable block of code
//                                that performs a specific task
/*
function hello(){
  console.log("Hello")
}
const numbers =[1,2,3,4,5,6];
const squares = numbers.map(square);
console.log(squares);
function square(element){
  return Math.pow(element, 2);
}
*/
//function expressions = a way to define functions as values or variables
//1. Callbacks in asunchronous operations
//2. Higher-Order Functions
//3. Closures
//4. Event Listeners
/*
setTimeout(function(){
  console.log("ekdslafj");
}, 3000);
const numbers =[1,2,3,4,5,6];
const squares = numbers.map(function (element){
  return Math.pow(element, 2);
});
const cubes = numbers.map(function(element){
  return Math.pow(element,3);
})
const evenNums = numbers.filter(function(element){
  return element % 2 === 0;
})
const oddNums = numbers.filter(function(element){
  return element % 2 !== 0;
})
const total = numbers.reduce(function(accumulator,element){
  return accumulator + element;
})
console.log(squares,cubes,evenNums,total);
*/
// NEXT36. Arrow functions = a concise way to write function expressions
//                           good for simple functoons that you use only ones
//                           (parameters) => some code
/*
function hello(){
  console.log("Hello");
}
const hello = function(){
  console.log("hello");
}
*/
/*
const hello = (name,age) => {console.log(`hello ${name}`);
                         console.log(`you are ${age} years old`)}
hello("ddd",32);
*/
/*
setTimeout(hello,3000);
function hello(){
  console.log("Hello");
}
setTimeout(() => {
  console.log("hello")
}, 3000);
*/
/*
const numbers = [1,2,3,4,5,6];
const squares = numbers.map((element) => Math.pow(element,2));
const cubes = numbers.map((elemnet) => Math.pow(elemnet, 3));
const evenNums = numbers.filter((element) => element % 2 ===0);
const oddNums = numbers.filter((element) => element % 2 !==0);
const total = numbers.reduce((accumulator,element) => accumulator+element );
console.log(squares,cubes,evenNums,oddNums,total)
*/
//NEXT 37. objest = A collecton of related properties and/ or methods
//                 Can represent real wordl objects(people,products,places)
//                object ={ key: value, function()}
/*
const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age:30,
  isEmployed: true,
  sayHello: function(){console.log("Hi! I am spongebob!")},
  saybye: function(){console.log("Goodbye!")}
};
const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age:42,
  isEmployed: false,
  sayHello: ()=>console.log("Hi! I am spongebob!"),
  saybye: function(){console.log("Goodbye!")}
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.saybye();
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.saybye();
*/
//NEXT 38 THIS  this = reference to the object where THIS is used
//                     (the object depends on the immediate context)
//                     person.name = this.name
/*
const person1 = {
  name: "Spongebob",
  favFood: "hamburgers",
  sayHello: function(){console.log(`Hi! I am ${this.name}`)},
  eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
const person2 = {
  name: "Patrick",
  favFood: "pizza",
 // sayHello: function(){console.log(`Hi! I am ${person2.name}`,this)},
//  eat: function(){console.log(`${this.name} is eating ${person2.favFood}`)}
sayHello: ()=>{console.log(`Hi! I am ${person2.name}`,this)},  //this winodws
eat:  ()=>{console.log(`${this.name} is eating ${person2.favFood}`)} 
}
person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();
console.log(this)  //Window
*/
//NEXT 39.Constructors = special method for defining the
//                       properties and methods of objects
/*
const car1 ={
  make: "Ford",
  model: "Mustang",
  year: 2024,
  color: "red",
  drive: function(){console.log(`You drive the ${this.model}`)}
}

const car2 ={
  make: "chevrolet",
  model: "Camaro",
  year: 2025,
  color: "blue",
  drive: function(){console.log(`You drive the ${this.model}`)}
}
const car3 ={
  make: "Dodge",
  model: "Charger",
  year: 2026,
  color: "silver",
  drive: function(){console.log(`You drive the ${this.model}`)}
}
*/
/*
function Car(make,model,year,color){
  this.make =make,
  this.model = model,
  this.year = year,
  this.color = color
  this.drive = function(){console.log(`you drive the ${this.model}`)}
}
const car1 = new Car("Ford", "Mustang",2024,"red");
const car2 = new Car("chevrolet", "Camaro",2025,"blue");
const car3 = new Car("Dodge", "Charger",2026,"silver");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car1.drive();
car2.drive();
car3.drive();
*/
//NEXT 40.class = (ES6 feature) provides a more structured and cleaner way to
//               work with objects compared to traditional constructro functions
//              ex. static keyword, encapsulation, inheritance
/*
function Product(name, price){
  this.name =name;
  this.price = price;

  this.displayProduct = function(){
    console.log(`Product: ${this.name}`);
    console.log(`{Price: $${this.price.toFixed(2)}}`);
  };
  this.calculateTotal = function(salesTax){
    return this.price + (this.price * salesTax);
  }
}
const salesTax = 0.05;

const product1 = new Product("Shirt",19.99);
const product2 = new Product("pants",22.50);
const product3 = new Product("Underwear",100.00);

product1.displayProduct();

const totalPrice = product1.calculateTotal(salesTax);
console.log(`Total Price (with tax): $${totalPrice.toFixed(2)}`);
*/
/*
class Product{
  constructor(name,price){
    this.name = name;
    this.price = price;
  }
  displayProduct(){
    console.log(`Product:${this.name}`);
    console.log(`{Price: $${this.price.toFixed(2)}}`);
  }
  calculateTotal(salesTax){
    return this.price + (this.price * salesTax);
  }
}
const salesTax = 0.05;

const product1 = new Product("Shirt",19.99);
const product2 = new Product("pants",22.50);
const product3 = new Product("Underwear",100.00);

const totalPrice = product3.calculateTotal(salesTax);
console.log(`Total Price (with tax): $${totalPrice.toFixed(2)}`);
*/
//NEXT 41.STATIC keyword
//      static = keyword that defines properties or methods that belong
//               to a class itself rather than the objects created
//               from that class (class owns anything static, not the objects)

class MathUtil{
  static PI = 3.14159;

  static getDiameter(radius){
    return radius *2;
  }
  static getCircumference(radius){
    return this.PI * radius;
  }
  static getArea(radius){
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

class User{
  static userCount = 0;

  constructor(username){
    this.username = username;
    User.userCount++;
  }
  static getUserCount(){
    console.log(`There are ${User.userCount} users online`);
  }
  sayHello(){
    console.log(`Hello, my username is ${this.username}`);
  }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");
console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(User.userCount);
user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();