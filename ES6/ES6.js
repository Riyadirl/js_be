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
//var name = function (nameValue) {
///  return nameValue;
//};
//name("giugu");

//for of loop
/*var mc = ["ers", "sdf", "dsf", "sdf"];
for (let hi of mc) {
  console.log(hi);
}
ers
sdf
dsf
sdf
*/

/*   14  object creation
var bill = {
  face: {
    color: "white",
    shape: " bollter",
  },
  shirt: {
    color: "white",
    price: "23424usd",
  },
  glass: true,
};
console.log(bill["face"]["shape"]);

//output
/*
bollter
 */

//16    for in
/*
var bill = {
  face: {
    color: "white",
    shape: " round",
  },
  shirt: {
    color: "white",
    price: "23424usd",
  },
  glass: true,
}; */

//22 Function

/*var myArrow = (x) => {
  console.log("x");
};
myArrow("efugiegfi"); */

//ARRAY

//Multi dimensional array
/*
const Bd = ["dhaka", "comilla", "Ctg"];
const Ind = ["mumbai", "kkr", "rcb"];
let China;
let asia = [Bd, Ind, China];
console.log(asia);


console.log("efesd"); */



//   MAP


let myMap= new Map();

myMap.set('key1',"Bd");
myMap.set('key2',"id");
myMap.set('key3',"br");
myMap.set('key4',"arg");
myMap.set('key5',"ch");
myMap.set('key6',"erm");


//console.log(myMap.keys())
//console.log(myMap.values())
//console.log(myMap)

//for
/*
for(let myvalue of myMap.keys()){
    console.log(myvalue)
}
for(let myvalue of myMap.values()){
    console.log(myvalue)
}*/


//delete
myMap.delete('key2')
for(let myvalue of myMap.values()){
    console.log(myvalue)
}

//




















