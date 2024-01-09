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

// NEXT9  RANDOM NUMBER GENERATOR
//let randomNum = Math.random();
//let randomNum = Math.floor(Math.random()*6+1);  //1~6
//console.log(randomNum);

//const min = 50;
//const max = 100;
//let randomNum = Math.floor(Math.random()*(max-min)) +min;
//console.log(randomNum);

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