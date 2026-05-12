//1.create an variable name,age and isplaced and print all of them
const name = "kamlakant";
const age = 15;
const isplaced = true;

console.log(name);
console.log(age);
console.log(isplaced);


//2.create a function of divison
const div = (a,b)=>{
    return b/a;  
}
let ans5 = div(2,4);
console.log(ans5);

//3:CREATE AN ARRAY 10,20,30,40 USE MAP() TO MULTIPLY BY 5
let num5 = [10,20,30,40];
let ans = num5.map((num5)=>{
    return num5*5;
})
console.log(ans);

//4:filter odd number from 1,2,3,4,5,6
let num6 = [1,2,3,4,5,6];
let ans1 = num6.filter((num6)=>{
    return num6 %2 != 0;
})
console.log(ans1);

//CREATE OBJECT AND DESTRUCT IT:NAME= KAMLAKANT,CITY = AHEMDABAD

let user = {
    name:"kamlakant"
}
let updatedUser = {
    ...user,
    city:"Ahemdabad"
}

console.log(updatedUser);

//use spread operator to add usa & uk in india city
let country = ["india"];
let country1 = [...country,"usa","uk"];
console.log(country1);


