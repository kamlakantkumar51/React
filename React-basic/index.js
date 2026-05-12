// //VARIABLES IN JAVASCRIPT
// console.log("lets learn basic of js before learning react");
// let age = 20;
// console.log(age);

// //types of variables in javascript
// //1.let:value can change
// let name = "kamlakant";
// name = "chandan";
// console.log(name);

// //2.const:value cannot be reassigned
// //it will give an error,mostly used in react
// // const pi = 3.14;
// // pi = 10;
// // console.log(pi);

// //3:var:value can change
// //Avoid using var in modern JavaScript.
// var x = 20;
// x = 587;
// console.log(x);


// //data-types
// //let name = "sonu";//string
// let age = 21;//number
// let isStudent = true;//boolean
// let marks = null;//Null
// let city;//undefined


// //printing something
// console.log("hello world");


//functions in javascript
//basic function
// function greet(){
//     console.log("hello");
// }
// greet();


//function with parameters
// function greet(name){
//     console.log("hello "+name);
// }
// greet("kamlakant");


//function with return

// function sum(a,b){
//     return a+b;
// }
// let ans = sum(10,20);
// console.log(ans);

// function multiply(a,b){
//     return a*b;
// }
// let ans2 = multiply(25,25);
// console.log(ans2);

// //arrows function:mostly used in react
// const add = (a,b)=>{
//     return a+b;
// }
// const ans3 = add(20,50);
// console.log(ans3);

//square of the number
const square = (num)=>{
    return num*num;
}
const ans4 = square(25);
console.log(ans4);
