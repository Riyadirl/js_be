//ECMAScript 6

//1 hello world
//console.log("hello world");

//2 strict
/*"use strict";
function myName() {
  name = "Riyad";
}
myName();*/

//3 with spread function
//let poorC = ["Bd", "Sri"];
//let richC = [...poorC,"USA", "Canada", "Italy"];
//console.log(richC);

// without spread function
//richC.push(poorC);

//4   rest parameters
/*
function calculate(...numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum = sum + i;
  }
  console.log(sum);
}
calculate(1, 2, 3, 4, 5, 3, 2, 4, 7);*/

// 5   dynamic function
var name = function (nameValue) {
  return nameValue;
};
name();
