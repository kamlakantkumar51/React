//most important file in the project,this is the main component that will be rendered in the index.js file.It contains the main structure of the application and the logic for the counter button .It also contains links to the documentation and social media pages of vite and react.The images used in the application are imported at the top of the file and used in the JSX code.The css file is also imported at the top of the file to style the application and make it look nice!!
//import { useState } from 'react'
import User from './user.jsx';
// function App() {
//   return(
//     <div>
//       <h1>App component</h1>
//             <User/>
//     </div>
//   );
// }



//rendering list using maps
//key is used to react tracks efficiently
// function App() {
//   let users = ["kamlakant","rahul","sonu"];
//   return (
//     <div>
//       {
//         users.map((user,index)=>{
//           <h2 key={index}>
//             {user}
//           </h2>
//         })
//       }
//     </div>
//   );
// }


//conditionaling rendering by using ternary operator
// function App(){
//   let isLoggedIn = true;
//   return(
//     <div>
//       {
//         isLoggedIn
//         ? <h1>Welcome</h1>
//         : <h1>Please Login</h1>
//       }
//     </div>
//   );
// }
// export default App;



//hook in react
//example of useState hook in react
// import { useState } from 'react';
// function App(){
//   const [count,setCount] = useState(100);
//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count-1)}>
//         Decrement
//       </button>

//       <button onClick={()=>setCount(count+1)}>
//         Increment
//       </button>
//     </div>
//   );
// }




//one more example is toggle text

import { useState } from 'react';
function App(){
  const[show,setShow] = true;
  return(
    <div>
      {
        show
        ? <h1>Hello</h1>
        : <h1>bye</h1>
      }
      <button onClick={()=>setShow(!show)}>
        Toggle
      </button>
    </div>
  )
}


import { useState } from "react";
function App() {
    const [show, setShow] = useState(true);
    return (
        <div>
            {
                show
                ? <h1>kamlakant</h1>
                : <h1>krishnakant</h1>
            }
            <button onClick={() => setShow(!show)}>
                Toggle
            </button>
        </div>
    );
}

export default App;




//toggle hook state 
// import { useState } from "react";
// function App() {
//     const [show, setShow] = useState(true);
//     return (
//         <div>
//             {
//                 show
//                 ? <h1>kamlakant</h1>
//                 : <h1>krishnakant</h1>
//             }
//             <button onClick={() => setShow(!show)}>
//                 Toggle
//             </button>
//         </div>
//     );
// }


//forms + state 
// import { useState} from "react";
// function App(){
//   const[name,setname] = useState("");
//   return(
//     <div>
//       <input 

//       type="text"
//       onChange={(e)=>e.target.value}
//       />
//       <h1>{name}</h1>
//     </div>
//   )
// }


//use-effect hook
//it is used for api call ,data fetching and important react utilities..

// import { useEffect } from "react";
// function App(){
//   useEffect(()=>{
//     console.log("component loaded");
//   },[]);
//   return (
//     <h1>Hello</h1>
//   );
// }

//understanding of dependency array
// import { useState, useEffect } from "react";
// function App() {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         console.log("Count Changed");
//     }, [count]);
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count + 1)}>
//                 Increase
//             </button>
//         </div>
//     );
// }



import { useEffect,useState } from "react";
function App(){
  const[users,setUsers] = useState([]);
  useEffect(()=>{
    async function getUsers(){
      let response = await fetch(
        "https://jsonplaceholder.typing.com"
      );
      let data = await response.json();
      setUsers(data);
    }
    getUsers();
  },[]);
  return(
    <div>
      {
        users.map((user)=>(
          <h2 key={user.id}>
            {user.name}
          </h2>
        ))
      }
    </div>
  );
}


//controlled components:-forms managed using state
//this is standard react way 
<input type
     value={name}
     onChange={(e)=>setName(e.target.value)}
/>
export default App;
