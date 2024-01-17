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

/*
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
*/
//NEXT 42. inheritance = allows a new class to inherit properties and methods
//                       from an existing class (parent -> child)
//                       helps with code reusablility.
/*
class Animal{
  alive = true;

  eat(){
    console.log(`This ${this.name} is eating`);
  }
  sleep(){
    console.log(`This ${this.name} is sleeping`);
  }
}
class Robbit extends Animal{
  name = "rabbit";
  run(){
    console.log(`This ${this.name} is runing`);
}
}
class Fish extends Animal{
  name ="fish";
  swim(){
    console.log(`This ${this.name} is swimnin`);
}
}
class Hawk extends Animal{
  name = "Hawk";
  fly(){
    console.log(`This ${this.name} is flying`);
}
}
const rabbit = new Robbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
console.log(rabbit);
console.log(fish.alive);
console.log(fish.name);
rabbit.eat();
fish.eat();
hawk.eat();
rabbit.run();
fish.swim();
hawk.fly();
*/
//NEXT 43.   super = keyword is used in classed to call the constructor or
//                   access the properties and methods of a of a parent (superclass)
//                   this = this object
//                   super = the parent
/*
class Animal{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  move(speed){
    console.log(`The ${this.name} moves at a speed of ${speed}mph`);
  }
}
  class Robbit extends Animal{
    constructor(name,age,runSpeed){
      //this.name = name;
      //this.age = age;   
      super(name,age);

      this.runSpeed = runSpeed;
    }
    run(){
      console.log(`This ${this.name} can run`);
      super.move(this.runSpeed);
    }
  }

class Fish extends Animal{
  constructor(name,age,swimSpeed){
    super(name,age);
    this.swimSpeed = swimSpeed;
  }
  swim(){
    console.log(`This ${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}

class Hawk extends Animal{
  constructor(name,age,flySpeed){
    super(name,age);
    this.flySpeed = flySpeed;
  }
  fly(){
    console.log(`This ${this.name} can fly`);
    super.move(this.flySpeed);
  }
}

const rabbit = new Robbit("rabbit",1,25);
const fish = new Fish("fish",2,12);
const hawk = new Hawk("hawk",3,50);

console.log(rabbit.name);
console.log(fish.age);
console.log(hawk.runSpeed);
rabbit.run();
*/
//NEXT 44 getter = special method that makes a property readable
//        setter = special method that makes a property writeable
//        validate and modify a value when reaing/writing a property
/*
class Rectangle{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
  set width(newWidth){
    if (newWidth > 0){
      this._width = newWidth;
    }
    else{
      console.log("Width must be a positive nember");
    }
  }
  set height(newHeight){
    if (newHeight > 0){
      this._height = newHeight;
    }
  
    else{
      console.log("Height must be a positive nember");
    }
  }
    get width(){
      return this._width.toFixed(2);
    }
    get height(){
      return this._height;
    }
    get area(){
      return `${(this._width * this._width).toFixed(1)}cm^2`;
    }
  }

const rectangle = new Rectangle(3,4);
rectangle.width = 5;
rectangle.height = 5;
console.log(rectangle.width, rectangle.height,rectangle.area);
*/
/*
class Person{
  constructor(firstName,lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set firstName(newFirstName){
    if (typeof newFirstName === "string" && newFirstName.length > 0){
      this._firstName = newFirstName;
    }
    else{
      console.error("First name must be a non-empty string");
    }
  }
  set lastName(newLastName){
    if (typeof newLastName === "string" && newLastName.length > 0){
      this._lastName = newLastName;
    }
    else{
      console.error("Last name must be a non-empty string");
    }
  }
  set age(newAge){
    if (typeof newAge === "number" && newAge > 0){
      this._age = newAge;
    }
    else{
      console.error("age must be a non-empty number");
    }
  }
  get firstName(){
    return this._firstName;
  }
  get lastName(){
    return this._lastName;
  }
  get fullName(){
    return this._firstName+this._lastName;
  }
  get age(){
    return this._age;
  }
}
const person = new Person("KIM","JAEHOON", 41);
person.firstName="kim";
person.lastName="jaehoon";
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
*/
//NEXT 45. destructuring = extract values from arrays and objects,
//                         then assing them to variables in a convenient way
//                         [] = to perform array destructuring
//                         {} = to perform objsect destructring
//                         5 examples
//example1. Swap the value of two variables
/*
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a,b);
//example2. ELEMENTS IN AN ARRAY
const colors = ["red","green","blue","black","white"];
[colors[0],colors[4]]=[colors[4],colors[0]];
console.log(colors);
//example3.ASSIGN ARRAY ELEMENTS TO VARIABLES
const [first, secondColor, thirdColor,...extraColors] = colors;
console.log(first);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
/*
//example4.EXTRACT VALUES FROM OBJECTS
/*
const person1 ={
      firstName:"Spongebob",
      lastName:"SqurePants",
      age: 30,
      job:"Fry Cook"
}
const person2 ={
  firstName:"Patrick",
  lastName:"Star",
  age: 34,
}
//const {firstName,lastName,age,job} = person1;
//const {firstName,lastName,age,job="Unemployed"} = person2;
//console.log(firstName,lastName,age,job);
*/
// example5.DESTRUCTURE IN FUNCTION PARAMETERS
/*
function displayPerson({firstName,lastName,age,job}){
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age:${age}`);
  console.log(`job:${job}`);
}

const person1 ={
  firstName:"Spongebob",
  lastName:"SqurePants",
  age: 30,
  job:"Fry Cook"
}
const person2 ={
firstName:"Patrick",
lastName:"Star",
age: 34,
}
displayPerson(person1);
displayPerson(person2);
*/
//NEXT 46. nested objects = Objsets inside of other Objects.
//                          Allows you to represent more complex data structrues
//                          Child Object is enclosed by a parent Object
//                          Person{Address{},ContactInfo{}}
//                          ShoppingCart{Keyboard{},Mouse{},Monitro{}}
/*
const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate","jellyfishing","cooking"],
  address: {
    street: "123 conch st.",
    city: "Bikini Bottom",
    country: "Int. Warer"
  }
}
console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0],person.hobbies[2]);
//console.log(person.address.street,person.address.city,person.address.country);
for(const property in person.address){
  console.log(person.address[property]);
}
*/
/*
class Person{
  constructor(name,age,...address){
    this.name = name,
    this.age = age,
    this.address = new Address(...address);
  }
}
class Address{
  constructor(street,city,country){
    this.street = street,
    this.city = city,
    this.country = country
  }
}
const person1 = new Person("mairp",30,"123 conch st.",
                                      "Bikini BOtton",
                                      "dled");
const person2 = new Person("asdf",30,"233 conch st.",
                                      "dadsf BOtton",
                                      "adfed");
const person3 = new Person("mairp",30,"653 conch st.",
                                      "dfd34 BOtton",
                                      "efd");
const {name,age} = person2;
const address2 = person2.address
function addressAll(address2){
  for(const property in address2){
    console.log(address2[property]);
  }
}
console.log(name,age);
addressAll(person1.address);
*/
//NEXT 47. ARRAYS OF OBJECTS
/*
const fruits = [{name: "apple", color:"red", calories: 95},
                {name: "orange", color:"orange", calories: 45},
                {name: "banana", color:"yellow", calories: 105},
                {name: "coconut", color:"white", calories: 159},
                {name: "grapges", color:"yellow", calories: 37}];

console.log(fruits[4].name);
fruits.push({ name: "pineapple", color:"purple", calories: 62});
fruits.pop();
fruits.splice(3,2);
console.log(fruits);
fruits.forEach((fruit,i) => console.log(i,fruit.name,fruit.color,fruit.calories))
*/
/*
//-------------map()---------
const fruitNames =fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames,fruitColors ,fruitCalories);
*/
//------------filter()------------
/*
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits =  fruits.filter(fruit => fruit.calories < 100);

console.log(yellowFruits,lowCalFruits);
*/
//------------reduce()----------------
/*
const maxFruit = fruits.reduce((max, fruit) =>
                              fruit.calories > max.calories ?
                              fruit : max);
const minFruit = fruits.reduce((min, fruit) =>
                              fruit.calories < min.calories ?
                              fruit : min );
console.log(maxFruit);
console.log(minFruit);
*/
//NEXT 48. sort() = method used to sort elements of an array in place.
//                  sorts elements as strings in lexicographic order, not alphabetical
//                  leicographic = (alphabet + numbers+symbols) as strings
/*
//let fruits =["apple","orange","banana","coconut","pineapple"];
//console.log(fruits);
//fruits.sort();
//console.log(fruits);
let numbers = [1,10,2,9,3,8,4,7,5,6];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.sort((a,b) => a - b);
console.log(numbers); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.sort((a,b) => b - a);
console.log(numbers); (10) [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const people = [{name: "Spongebob", age:30, gpa: 3.0},
                {name: "Paterick", age:37, gpa: 1.5},
                {name: "Squidward", age:51, gpa: 2.5},
                {name: "Sandy", age:27, gpa: 4.0}];
//people.sort((a,b) => a.age - b.age );
//people.sort((a,b) => b.age - a.age );
people.sort((a,b) => a.name.localeCompare(b.name));
people.sort((a,b) => b.name.localeCompare(a.name));
console.log(people);
*/
//NEXT.48 Sorting
/*
const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
cards.sort(() => Math.random() - 0.5);
console.log(cards);
console.log(Math.random()-0.5);
*/
// ----------FISHER-Yates algorithm----------------
/*
const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
shuffle(cards);
console.log(cards);

function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]];
  }
}
*/
//NEXT.49 Date objects = Objects that contain values that represent dates and times
//                       These date objects can be changed and formatted
/*
//Date(year,month,day,hour,minute,second,ms)
//const date = new Date(2024,0,1,2,3,4,5);   //Mon Jan 01 2024 02:03:04 GMT+0900 
//const date = new Date("2024-01-02T12:00:00Z") //Tue Jan 02 2024 21:00:00 GMT+0900 (한국 표준시)
//const date = new Date(0);  //Thu Jan 01 1970 09:00:00 GMT+0900 (
//const date = new Date(1700000000000); 
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day =date.getDate();
const hour =date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(date,year,month,day,hour,minutes,seconds,dayOfWeek);   //2024 0 12 22 35 10 5

date.setFullYear(2424);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);      
console.log(date);        //Mon Jan 01 2424 02:03:04 GMT+0900

const date1 = new Date(2023-12-31);
const date2 = new Date(2023-12-30);
if(date2 > date1){
  console.log("HAPPY NEW YERA!");
}
*/
//NEXT.50 closure = A function defined inside of another function,
//                  the inner function has access to the variables
//                  and scope of the outer function.
//                  Allow for private variables and state maintenance
//                  used frequently in JS framewoks: React, Vue, Angular
/*
function outer(){
    let message = "Hello";

    function inner(){
      console.log(message);      //scope            
    }
    inner();
}
message = "Goodbye";    //scope x
outer();                       // Hello
*/
/*
let count = 0;
count = 10000;
function increment(){
  count++;
  console.log(`Conut increased to ${count}`);
}
increment();
increment();
increment();
increment();
increment();
*/
/*
function createCounter(){
  let count = 0;

  function increment(){
    count++;
    console.log(`Conut increased to ${count}`);
  }
  function getCount(){
    return count;
  }
 // return {increment:increment};
  return {increment,getCount};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getCount()}`);

function createGame(){
  let score = 0;

  function increaseScore(points){
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);
  }
  function getScore(){
    return score;
  }
  return {increaseScore,decreaseScore,getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(5);
game.increaseScore(5);
game.decreaseScore(5);
console.log(`The final score is ${game.getScore()}pts`);
*/
//.NEXT52. setTimeout() = funtion in JavaScript that allows you to schedule
//                        the execution of a function after an amount of time (milliseconds)
//                        Times are approximate (varies based on the workload of the JavaScript runtime env.)
//                        setTimeout(callback,delay);
// setTimeout(callback, delay);
/*
unction sayHello(){
  window.alert("Hello");
}
setTimeout(sayHello, 3000);
setTimeout(()=> window.alert("Hello"),5000)
*/
//claerTimeout(timeoutId) = can cancel a timeout before it triggers
//const timeoutId = setTimeout(() => window.alert("Hello"),6000);
//clearTimeout(timeoutId);
/*
let timeoutId;

function startTimer(){
  timeoutId = setTimeout(() =>window.alert("Hello"),3000);
  console.log("STARTER");
}
function clearTimer(){
  clearTimeout(timeoutId);
  console.log("CLEARED");
}
*/
//NEXT53. DIGITAL CLOCK PROGRAM
/*
function updateClock(){
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM" ;
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
  document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock,1000);
*/
//NEXT54. Stopwatch program
/*
const display =document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
  if(!isRunning){
    startTime = Date.now() -  elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop(){
  if(isRunning){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
    }
  }

  function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
    
  }
  function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000*60*60));
    let minutes = Math.floor(elapsedTime / (1000 *60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }
  */
//NEXT55. ES6 Module = an external file that contains reusalbe code
//                     that can be imported into other JavaScript files.
//                     Write resusable cod for many different apps.
//                     Can contain variables, classes, function... and more
//                     Introduced as part of ECMAScript 2015 update
/*
import {PI,getCircumference,getArea,getVolume} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
const area =getArea(10);
const volume = getVolume(10);
console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^2`);
*/
//synchronous = Executes line by line consecutively in sequential manner
//              code that waits for an operation to complete.

//asynchronous = Allows multiple operations to be perfomed concurrently without waiting
//              Doesn't block the executuon flow and allows the program to continue
//              (I/O operations, network requets, fetching data)
//              Handled wiht: Callbacks, Promises, Async/ Await
/*
//async
setTimeout(() => console.log("Task 0"), 3000);
console.log("Task 1");
console.log("Task 2");
console.log("Task 3"); establishing a connection
//--------------------------- callback async =>sync
function func1(callback){
  setTimeout(() => {console.log("Task 0")
                    callback()}, 3000);
}
function func2(){
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
}
func1(func2);
*/
//NEXT. Error handing 
// ERROR = An Object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection
// try {} = encloses code that might potentially cause an errorenter a dividend
// catch {} = Catch and handle any thrown Errors from try{}
// finally {}= (optional) Always executes.. used mostly for clean up
//  ex. close files, close connections, release resources
/*
try{
console.log(x);
//NETWORK ERRORS
//PROMISE REJECTION
//SECURITY ERRORS
}
catch(error){
  console.error(error);
}
finally{
  //CLOSE FILES
  //CLOSE CONNECTIONS
  //RELEASE RESOURCES
  console.log("This always executes");
}
console.log("You have reached the end!");
*/
/*
try{
const dividend = Number(window.prompt("Enter a dividend"));
const divisor = Number(window.prompt("Enter a divisor"));

if(divisor == 0){
  throw new Error("You can't divide by zero!");
}
if(isNaN(dividend) || isNaN(divisor)){
  throw new Error("Values must be a number");
}

const result = dividend / divisor;
console.log(result);
}
catch(error){
  console.error(error);
}
console.log("You have reached the end!");
*/
//NEXT 58. Calculator program
/*
const display = document.getElementById("display");

function appendToDisplay(input){
  display.value += input;
}
function clearDisplay(){
  display.value="";
}
function calculate(){
  try{
    display.value =eval(display.value);
}
catch(error){
  display.value ="Error";
 }
}
*/
//NEXT63. Mouse events
//eventListener = Listen for specific envets to create interactive web pages
//                events: click,mouseover, mouseout
//                .addEventListener(event, callback);

//const myBox = document.getElementById("myBox");
/*
function changeColor(event){
  console.log(event);
  event.target.style.backgroundColor = "tomato";
  event.target.textContent ="OUCH😎";
}
myBox.addEventListener("click", changeColor);
*/
//const myButton = document.getElementById("myButton");
/*
myBox.addEventListener("click", event => {
  event.target.style.backgrounColor = "yellow";
  event.target.textContent ="OUCH😜";
  });
  myBox.addEventListener("mouseover", event => {
    event.target.style.backgrounColor = "tomato";
    event.target.textContent ="Don't do it🤣"
  })

  myBox.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😢"
  });

  myButton.addEventListener("click", event => {
    myBox.style.backgrounColor = "yellow";
    myBox.textContent ="OUCH😜";
    });
    myButton.addEventListener("mouseover", event => {
      myBox.style.backgrounColor = "tomato";
      myBox.textContent ="Don't do it🤣"
    })
  
    myButton.addEventListener("mouseout", event => {
      myBox.style.backgroundColor = "lightgreen";
      myBox.textContent = "Click Me 😢"
    });
    */
   //NEXT 64.KEY EVENTS
// events: keydown,keyup
//         document.addEventListener(event,callback);
/*
   document.addEventListener("keyup", event => {
    console.log(`Key up: ${event.key}`);
   });
    document.addEventListener("keydown", event => {
      console.log(`Key down: ${event.key}`);
    });
*/
/*
   const mybox = document.getElementById("myBox");
 
   document.addEventListener("keydown", event => {
    mybox.textContent ="😎";
    mybox.style.backgroundColor = "tomato";
  });
  document.addEventListener("keyup", event => {
    mybox.textContent ="😘";
    mybox.style.backgroundColor ="lightblue";
  });
 
   const moveAmount = 10;
    let x = 0;
    let y = 0;
    document.addEventListener("keydown", event => {
  
      if(event.key.startsWith("Arrow")){
       event.preventDefault();
        switch(event.key){
        case "ArrowUp":
          y -= moveAmount;
          break;
        case "ArrowDown":
          y += moveAmount;
          break;
        case "ArrowLeft":
          x -= moveAmount;
          break;
        case "ArrowRight":
          x += moveAmount;
          break;
        }
      }
      mybox.style.top = `${y}px`;
      mybox.style.left = `${x}px`;
    });
*/
//*NEXT65. Hide/show HTML
/*
const myButton =document.getElementById("myButton");
const myimg = document.getElementById("myimg");

myButton.addEventListener("click", event => {

  // if(myimg.style.display === "none"){
  //   myimg.style.display = "block";
  //   myButton.textContent ="Hide";
  // }
  // else{
  // myimg.style.display ="none";
  // myButton.textContent="Show";
  // }
 
  if(myimg.style.visibility === "hidden"){
    myimg.style.visibility = "visible";
    myButton.textContent ="Hide";
  }
  else{
  myimg.style.visibility ="hidden";
  myButton.textContent="Show";
  }
});
*/
//*NEXT66. NodeList = Static collection of HTML elemnets by (id, class, element)
//                    can be created by using querySelectorALL()
//                    Similar to an array,m but no (map, filler, reduce)
//                    NodeList won't update to automatically reflect changes
/*
// ADD AN ELEMENT
const newButton = document.createElement("button");
let buttons = document.querySelectorAll(".myButtons");
console.log(buttons);
buttons.forEach(button => {
  button.style.backgroundColor = "green";
  button.textContent += "🤷‍♂️";
  button.addEventListener("click",event => {
    event.target.style.backgroundColor = "tomato";
  });
  button.addEventListener("mouseover",event => {
    event.target.style.backgroundColor = "hsl(205,100%,40%)";
  });
  button.addEventListener("mouseout",event => {
    event.target.style.backgroundColor = "hsl(205,100%,60%)";
  });
});

newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);
buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

buttons.forEach(button =>{
  button.addEventListener("click", event => {
    event.target.remove();
    console.log(buttons);
    buttons = document.querySelectorAll(".myButtons");
    console.log(buttons);
  });
});
*/
//NEXT67. classList = Element property in JavaScript used interact
//                    with an element's list of classes (CSS classes)
//                    Allows you to make reusable classes for many elements
//                    across your webpage.
//add()
//remove()
//toggle(Remove if present, Add if not)
//contains()

// const myH1 = document.getElementById("myH1");
// const myButton = document.getElementById("myButton");
// //myButton.classList.add("enabled");
// //myButton.classList.remove("enabled");
// //console.log(myButton);
// // myButton.addEventListener("mouseover", event => {
// //   event.target.classList.add("hover");
// // });
// // myButton.addEventListener("mouseout", event => {
// //   event.target.classList.remove("hover");
// // });
// myH1.classList.add("enabled");
//  myButton.classList.add("enabled");
// // myButton.addEventListener("click",event =>{
// //   event.target.classList.replace("enabled","disabled");
// // });
// myH1.addEventListener("click",event =>{
//   if(event.target.classList.contains("disabled")){
//     event.target.textContent += "🐱‍🚀";
//   }
//   else{
//     event.target.classList.replace("enabled","disabled");
//   }
// });
// myButton.addEventListener("click",event =>{
//   if(event.target.classList.contains("disabled")){
//     event.target.textContent += "🐱‍🚀";
//   }
//   else{
//     event.target.classList.replace("enabled","disabled");
//   }
// });
/*
let buttons = document.querySelectorAll(".myButtons");
buttons.forEach(button => {
  button.classList.add("enabled");
});

buttons.forEach(button =>{
  button.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
  });
});

  buttons.forEach(button =>{
  button.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach(button => {
  button.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
      event.target.textContent += "💋";
    }
    else{
    event.target.classList.replace("enabled","disabled");
   }
  });
});
*/
//NEXT68. Rock Paper Scissors
/*
const choices = ["rock","paper","scissors"];
const playerDisplay =document.getElementById("playerDisplay");
const computerDisplay =document.getElementById("computerDisplay");
const resultDisplay =document.getElementById("resultDisplay");
const playerScoreDisplay =document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const tieScoreDisplay =document.getElementById("tieScoreDisplay");

let playerScore = 0;
let computerscore = 0;
let tieScore = 0;

function playGame(playerChoice){
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  let result ="";
  if(playerChoice === computerChoice){
    result ="IT's A TIE!";
    resultDisplay.classList.add("blueText");
    tieScore++;
    tieScoreDisplay.textContent = tieScore;
  }
  else{
    switch(playerChoice){
      case "rock":
        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE";
        break;
      case "paper" :
        result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE";
      case "scissors" :
        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE";
      }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent =`Computer:${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
      case "YOU WIN!":
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        resultDisplay.classList.remove("blueText");
        resultDisplay.classList.remove("redText");
        resultDisplay.classList.add("greenText");
      break;
      case "YOU LOSE":
        computerscore++;
        computerScoreDisplay.textContent = computerscore;
        resultDisplay.classList.remove("blueText");
        resultDisplay.classList.remove("greenText");
        resultDisplay.classList.add("redText");
      break;
    }
  }
  */
 //NEXT 69.IMAGE SLIDER
/*
 const slides =document.querySelectorAll(".slides img");
 let slideIndex = 0;
 let intervalId = null;

 //initializeSider();
 document.addEventListener("DOMContentLoaded", initializeSider);
 function initializeSider(){
  if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextslide,5000);
  }
 }
 function showSlide(index){
    if(index >= slides.length){
      slideIndex = 0;
    }
    else if(index < 0){
      slideIndex = slides.length -1;
    }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide")
  });
  slides[slideIndex].classList.add("displaySlide");
 }

 function prevslide(){
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
 }
 function nextslide(){
  slideIndex++;
  showSlide(slideIndex);
 }
*/
//NEXT70.Callback Hell?
//       =Situation in JavaScript where callbacks
//       are nested within other callbacks to the
//       degree where the code is difficult to read.
//       Old pattern to handle asynchronous functions.
//       Use Promises + asyne/await to avoid Callback Hell
/*
function task1(callback){
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 2000);
}
function task2(callback){
  setTimeout(()=>{
  console.log("Task 2 complete");
  callback();
  }, 1500);
}
function task3(callback){
  setTimeout(()=>{
  console.log("Task 3 complete");
  callback();
}, 3000);
}
function task4(callback){
  setTimeout(()=>{
  console.log("Task 4 complete");
  callback();
}, 1500);
}
task1(()=>{
  task2(()=>{
    task3(()=>{
      task4(()=>{
        console.log("ALL TASKS COMPLETE");
      });
    });
  });
});
*/
//NEXT71.Promise = an Object that manages asynchronous operations.
//                 Wrap a Promise Object around {asynchronous code}
//                 "I promise to return a value"
//                 PENDING -> RESOLVED or REJECTED
//                 new Promise((resolve, reject) => {asynchronous code})
// DO THESE CHORES IN ORDER
// 1. WALK THE DOG
// 2. CLEAND THE KITHEN
// 3. TAKE OUT THE TRASH
/*
function walkDog(){
  // setTimeout(()=>{
  //   console.log("You walk the dog 🐶");
  //   callback();
// }, 1500);
  return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      const dogwalked = true;

      if(dogwalked){
        resolve("You walk the dog 🐶");
      }
      else{
        reject("You DIDN'T walk the dog ")
      }
   }, 1500);
 })
}

function cleanKitchen(){
  // setTimeout(()=>{
  //   console.log("You clean the Kitchen 🕷");
  //   callback();
  // }, 2500);
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const KitchenClean = false;
      if(KitchenClean){
        resolve("You clean the Kitchen 🕷")
      }
      else{
        reject("You DIDN'T clean the Kitchen")
      }
    },2500);
  })
}
function takeOutTrash(){
  // setTimeout(()=>{
  //   console.log("You walk the trash 💩");
  //   callback();
  // }, 500);
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const takeoutrash = true;
      if(takeoutrash){
        resolve("You walk the trash 💩")
      }
      else{
        reject("You DIDN'T walk the trash")
      }
    }, 500);
  })
}
/*
// walkDog(() => {
//   cleanKitchen(()=>{
//     takeOutTrash(()=>
//       console.log("You finished all the chores!"));
//   });
// });
/*
walkDog().then(value => {console.log(value);return cleanKitchen()})
          .then(value => {console.log(value);return takeOutTrash()})
          .then(value => {console.log(value);console.log("You finished all the chores!")})
          .catch(error => console.log(error));
          */
//NEXT72.Async/Await = Async = makes a function return a promise
//                     Await = makes an async function wait for a promise
//                     Allows you write asynchronous code in a synchronous manner
//                     async doesn't have resolve or reject parameters
//                     Everyhing after Await is placed in an event queue
/*
async function doChores(){
  try{
  const walkDogResult = await walkDog();
  console.log(walkDogResult);

  const cleanKitchenResult = await cleanKitchen();
  console.log(cleanKitchenResult);

  const takeOutTrashResult = await takeOutTrash();
  console.log(takeOutTrashResult);

  console.log("You finished all the chores!");
  }
  catch(error){
    console.log(error);
  }
}
doChores()
*/

// JSON = (JaveScript Object Notation) data - interchange format
//        Used for exchanging data between a serber and a web application
//        JSON files {key:value} OR [value1,value2, value3]

//        JSON.stringfy() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object
/*
const names = ["Spongebob","Paterick","Squidward","Sandy"];
const preson ={
                "name":"Spongebob",
                "age" : 30,
                "isEmproyed": true,
                "hobbies":["jellyfishing","Karate","Cooking"]
              }
const people = [{"name":"Spongebob","age":30,"isEmproyed": true},
                {"name":"Patrick","age" : 34,"isEmproyed": false},
                {"name":"Squidward","age" : 50,"isEmproyed": true},
                {"name":"Sandy","age" : 27,"isEmproyed": false}];
const jsonString = JSON.stringify(names);
const jsonString1 = JSON.stringify(preson);
const jsonString2 = JSON.stringify(people);
console.log(names);
console.log(jsonString);
console.log(preson);
console.log(jsonString1);
console.log(people);
console.log(jsonString2);


const jsonNames = `["Spongebob","Paterick","Squidward","Sandy"]`;
const jsonPreson =`{
                "name":"Spongebob",
                "age" : 30,
                "isEmproyed": true,
                "hobbies":["jellyfishing","Karate","Cooking"]
              }`;
const jsonPeople = `[{"name":"Spongebob","age":30,"isEmproyed": true},
                {"name":"Patrick","age" : 34,"isEmproyed": false},
                {"name":"Squidward","age" : 50,"isEmproyed": true},
                {"name":"Sandy","age" : 27,"isEmproyed": false}]`;
const parsedData = JSON.parse(jsonNames);
console.log(parsedData);
const parsedData1 = JSON.parse(jsonPreson);
console.log(parsedData1);
const parsedData2 = JSON.parse(jsonPeople);
console.log(parsedData2);

fetch("./data/person.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("./data/people.json")
.then(response => response.json())
.then(values =>values.forEach(value => console.log(value.name,value.age,value.isEmproyed)))
.catch(error => console.error());

fetch("./data/names.json")
.then(response => response.json())
.then(value => console.log(value));
*/