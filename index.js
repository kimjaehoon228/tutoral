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

for(let i=1; i <= 20; i++){
  if(i==13){
    //continue;
    break;
  }
  else{
    console.log(i);
  }
}

