console.log("write a function that takes another function as an argument and runs it.");

var f = function(name){
    console.log("hello" +  name);
    
}
var executor = function(fn,name)
{
    fn(name)
}
executor(f, "Gibson")

console.log(" write a function that takes 4 arguments. - A start value - An end value - A callback to call if the number is divisible by 3 ");

// let numbers=(601,700,300,500)
// let numberscores =function(data,callback){

//     for (let i = 0; i< data.length; i++) {
//         data[i].numbers()%3==0;
        
//         {
// //callback(data[i])
//         data[i].numbers()%5!==0
//         }
        
//     }
// }
// console.log(numbers);
function divider(strtval, endval, cbone,cbtwo){
  if((strtval % 3) ===0){
    return console.log( strtval + "is divisible by 3")
  }
  if((endval % 5) === 0){
    console.log(endval  + "is divisible by 5 ")
  }
  return console.log("non of this divisible by 3 or 5")
 }
 divider(500,500,(message)=>{
  console.log(message)
 }, (message)=>{
  console.log(message)
 });





// var list = [200, 300, 400, 600];

// function callback(list){
//     var newlist =[];
//     for (let i = 0; i < list.length; i++) {
//         if(list[i]%3==0)
//         newlist.push(list[i]);
        
//     }
//     return newlist;
// }
// function filter(list,callback){
//     return callback(list)
// }
// var filtered=filter(list,callback);
// console.log(filtered);
// console.log(" A callback to use if the number is divisible by 5");

// function callback(list){
//     var newlist =[];
//     for (let i = 0; i < list.length; i++) {
//         if(list[i]%5==0)
//         newlist.push(list[i]);
        
//     }
//     return newlist;
// }
// function filter(list,callback){
//     return callback(list)
// }
// var filtered=filter(list,callback);
// console.log(filtered);
A = "abc"; 
b = A.repeat(3);
function repeatStringNumTimes(str, num) {
    // repeat after me
    return str;
  }
  document.write(b + "<br>"); 
  repeatStringNumTimes("abc", 3);
  console.log(b);


console.log("We did some work with arrays - var arr = [1,2,3] We can also nest arrays inside arrays like this var arr2d = [[1,2], [3,4], [5,6]] (for math people you can think of this as a matrix) How would you print all the items of an array with 3 dimensions? How about with K dimensions? What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it)");


//   let temps = [
//     [35, 28, 29, 31],
//     [33, 24, 25, 29]
//  ];
 var arr2d = [[1,2], [3,4], [5,6]]
 for (let i = 0; i < 2; i++) {
    console.log("Row #" + i)
     for (let j = 0; j < 4; j++) {
       console.log(i, j, arr2d[i][j])
       for (let k = 0; k < 5; k++)
       console.log(i, k, arr2d[i][k])
    }
 }
  console.log(" Here are two functions that look like they do the something similar but they print different results. Please explain what's going on here.");
  let x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);
console.log("x is an argument in an object called y");

// var add = (function () {
//     let counter = 10;
//     return function () {counter += 6;
//          return counter}
//   })();
// console.log();
 
console.log("Write a function that would allow you to do this:")

function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add6 = makeAdder(6);
  var add6 = makeAdder(6);
  
  console.log(add6(10));  // 16
  console.log(add6(21)); // 27