/* eslint-disable */
// import "bootstrap";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };
// import "./style.css";


window.onload = () => {
   document.querySelector('.card').classList.add(generateRandomSuit());
   document.querySelector('.card').innerHTML = (generateRandomNumber());
   setTimeout(() =>{
     document.querySelector('.card').classList.remove('heart');
     document.querySelector('.card').classList.add('spade');
   }, 1000);
};

let generateRandomNumber = () => {
  let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let indexNumber = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumber]

  
};
let generateRandomSuit = () => {
  let suit = ["diamond", "spade","heart","club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit]
};