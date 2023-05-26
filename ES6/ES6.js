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

/*
let myMap= new Map();

myMap.set('key1',"Bd");
myMap.set('key2',"id");
myMap.set('key3',"br");
myMap.set('key4',"arg");
myMap.set('key5',"ch");
myMap.set('key6',"erm");

*/
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
/*
myMap.delete('key2')
for(let myvalue of myMap.values()){
    console.log(myvalue)
}
*/

//get
//console.log(myMap.get('key4'))


// has key
/*
if(myMap.has('key1')){
    console.log("yes")
}else {
    console.log("no")
}
*/


//SET
/*
let mySet = new Set();

mySet.add('1gfeyuj')
mySet.add('26778wuiyluyj')
mySet.add('3678wqhkj,huj')
mySet.add('hjk,muuj')
mySet.add('hjk,muuj')
mySet.add('77689,uy')
//console.log(mySet)

//set delete
mySet.delete('hjk,muuj')
console.log(mySet)

//size
console.log(mySet.size)

//values
console.log(mySet.values())

//has value
+if(mySet.has('1gfeyuj')){
    console.log("yes")
}else {
    console.log("no")
}
*/



//   CLASS
/*
class myClass{
    myFun1(age){
        console.log(age)
    }
    myFun2(age){
        console.log(age)
    }
    myFun3(age){
        console.log(age)
    }
    myFun4(age){
        console.log(age)
    }
}
let obj = new myClass();
//obj.myFun3(23)
//obj.myFun1(782)   */


//   COSTRUCTOR
/*
class myClass{
    constructor() {
        console.log("im constructor")
    }
}
new myClass() */


// parameter constructor
/*class myClass{
    constructor(a,b) {
       //console.log(a+b)
        this.firstNum = a;
        this.secNum=b;
    }
    add(){
        let r = this.firstNum+this.secNum;
        console.log(r)
    }
}


let obj = new myClass(2,3)
obj.add()
*/
 




























