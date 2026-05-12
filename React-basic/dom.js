//document object models
//when web page loads ,the browser converts html in to a tree like structure called dom
//react internally work with dom

function changeText(){
    document.getElementById("title").innerText = "React journey started";
}

let heading = document.getElementById("title");

//query selector
let heading = document.querySelector("#title");
//select by class
document.querySelector(".box");

//changing content
heading.innerText = "New Text";

//changes of css using js
heading.style.color = "red";
heading.style.fontSize = "50px";


//events in javascrript
//events are user action in js:click,hover,keypress,submit
//react is heavily event based

let btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    console.log("button clicked");
})

//arrow function event
btn.addEventListener("click",()=>{
    console.log("clicked");
})

//input event
let input = document.getElementById("inputBox");
input.addEventListener("input",(e)=>{
    console.log(e.target.value);//very important
})

//async js: javascript is ansychronous
//its takes time to perform tasks:eg-api calls,database calls,timers
//set time out

console.log("start");
setTimeOut(()=>{
    console.log("hello after 2 sec");
},2000);

console.log("end");

//promises:its handle future values
let promise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("data loaded");
    }else{
        reject("error");
    }
});

//using promise
promise.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(error);
})

promise.then((val)=>{
    console.log(val);
}).catch((error)=>{
    console.log("error found in the promise call");
})

//async/await:modern way to handle async await and it is used in react everywhere

//example of async & await in js in & it is used in the every step of react
function fetchdata(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("data recieved");
        },2000);
    });
}

function fetchInsta(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("follow back the guy who following you!");
        },2000);
    });
}

function fetchWhatsapp(){
    return new Promise((resolve)=>{
        setTimeOut(()=>{
            resolve("remove from the unwanted group from whatsapp");
        },5000);
    });
}

//using async await 
async function getData(){
    let data = await fetchdata();
    console.log(data);
}
getData();

//fetch api:-this is massive in react
async function getUser(){
    let response = await fetch(
        "https://lkjhgfghjkg.com/users"
    );
    let data = await response.json();
    console.log(data);
}
getUser();




