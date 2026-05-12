//creation of arrays
let fruits = ["orange","banana","apple"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//modifications of arrays

fruits[0] = "grapes";
console.log(fruits);

//important array methods of js which is also useful in the case of react
//push method
let arr = [4,9,16,25];
arr.push(36);
console.log(arr);

//pop method
arr.pop();
console.log(arr);

//loop iteration
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//objects in js:it stores data in key value pairs
let student = {
    name:"kamlakant",
    course:"Btech",
    branch:"cse",
    age:21,
    city:"Ahemdabad"
};
console.log(student);

//access of object values
console.log(student.course);
console.log(student.city);

//bracket notation
console.log(student["age"]);

//modification of object
student.city = "vadodara";
console.log(student.city);

//arrays + object combination 
let users = [
    {name:"rishee verma",age:21},
    {name:"aditya",age:25},
    {name:"sunny",age:21}
];
console.log(users[0].name);

//arrays methods
//map
let nums = [2,4,6];
let ans = nums.map((num)=>{
    return num*3;
})
console.log(ans);

//react use case of map
let users1 = ["kamlakant","chandan","sonu"];
users1.map((users1)=>{
    console.log(users1);
})

//filter:use to filter the elements
let number = [2,4,6,15,27,8,10];
let even = number.filter((number)=>{
    return number % 2 === 0;
});
console.log(even);

//reduce:used to accumulate values
let numm =[1,3,4,5];
let sums = numm.reduce((acc,curr)=>{
    return acc+curr;
},0);

console.log(sums);

//destructuring:use everywhere in react
//arrays destructuring
let colors = ["Red","Blue"];
let [first,second] = colors;
console.log(first);

//object destructuring
let student1 = {
    name:"kamlakant",
    age:21
};
let{name,age} = student1;
console.log(name);

//spread operator://very important in the case of react
let n1 = [1,2];
let n2 = [...n1,3,4];
console.log(n2);

let n3 = [1,3,5,7];
let n4 = [...n3,8,10,12,14];
console.log(n4);

//object spread in modern js
let userOnInsta = {
    name:"kamlakant"
}
let updateUserOnInsta = {
    ...userOnInsta,
    city:"Ahemdabad"
}

console.log(updateUserOnInsta);

//ternary operator 
let age1 = 20;
let answer = age >= 18 ? "adult":"notAdult";
console.log(answer);

