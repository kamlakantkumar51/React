# React Practice Notes & Examples 🚀

## App Component

The `App.jsx` file is usually the **main component** of a React application.

* It is rendered inside `index.js` or `main.jsx`.
* It contains the main UI structure.
* Components, CSS files, images, and hooks are imported here.
* React applications are built by combining multiple reusable components.

---

# Importing Components

```jsx
import User from "./User.jsx";

function App() {
    return (
        <div>
            <h1>App Component</h1>
            <User />
        </div>
    );
}

export default App;
```

---

# Rendering Lists Using map()

React uses `map()` to render multiple elements dynamically.

### Important:

* Always provide a `key`.
* Keys help React efficiently update the DOM.

```jsx
function App() {
    const users = ["Kamlakant", "Rahul", "Sonu"];

    return (
        <div>
            {
                users.map((user, index) => (
                    <h2 key={index}>
                        {user}
                    </h2>
                ))
            }
        </div>
    );
}
```

---

# Conditional Rendering

Use a ternary operator to display different UI based on a condition.

```jsx
function App() {
    const isLoggedIn = true;

    return (
        <div>
            {
                isLoggedIn
                ? <h1>Welcome</h1>
                : <h1>Please Login</h1>
            }
        </div>
    );
}
```

---

# useState Hook

Used to manage state in React.

```jsx
import { useState } from "react";

function App() {
    const [count, setCount] = useState(100);

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
```

---

# Toggle Example Using useState

```jsx
import { useState } from "react";

function App() {
    const [show, setShow] = useState(true);

    return (
        <div>
            {
                show
                ? <h1>Kamlakant</h1>
                : <h1>Krishnakant</h1>
            }

            <button onClick={() => setShow(!show)}>
                Toggle
            </button>
        </div>
    );
}

export default App;
```

---

# Forms + State

Store input values inside state.

```jsx
import { useState } from "react";

function App() {
    const [name, setName] = useState("");

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
            />

            <h1>{name}</h1>
        </div>
    );
}
```

---

# Controlled Components

A form element controlled by React state.

```jsx
<input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
/>
```

### Benefits

* Single source of truth.
* Easier validation.
* Better form handling.

---

# useEffect Hook

Used for:

* API Calls
* Data Fetching
* Timers
* Event Listeners
* Side Effects

Runs after component renders.

```jsx
import { useEffect } from "react";

function App() {
    useEffect(() => {
        console.log("Component Loaded");
    }, []);

    return <h1>Hello</h1>;
}
```

---

# Dependency Array

## Run Only Once

```jsx
useEffect(() => {
    console.log("Runs Once");
}, []);
```

Equivalent to:

```jsx
componentDidMount()
```

---

## Run When State Changes

```jsx
useEffect(() => {
    console.log("Count Changed");
}, [count]);
```

Whenever `count` changes, the effect runs again.

---

# Fetch API Example

Used to retrieve data from a server.

```jsx
import { useEffect, useState } from "react";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            const data = await response.json();
            setUsers(data);
        }

        getUsers();
    }, []);

    return (
        <div>
            {
                users.map((user) => (
                    <h2 key={user.id}>
                        {user.name}
                    </h2>
                ))
            }
        </div>
    );
}

export default App;
```

---

# Common Mistakes Found in Your Code

### ❌ Wrong

```jsx
const [show, setShow] = true;
```

### ✅ Correct

```jsx
const [show, setShow] = useState(true);
```

---

### ❌ Wrong Fetch URL

```jsx
https://jsonplaceholder.typing.com
```

### ✅ Correct Fetch URL

```jsx
https://jsonplaceholder.typicode.com/users
```

---

### ❌ Wrong Input Handler

```jsx
onChange={(e) => e.target.value}
```

### ✅ Correct

```jsx
onChange={(e) => setName(e.target.value)}
```

---

# React Interview Quick Revision

### React

* JavaScript Library for UI.
* Developed by Meta.
* Uses Virtual DOM.

### Component

* Reusable JavaScript Function.

### JSX

* HTML inside JavaScript.

### Props

* Parent → Child Data Transfer.

### State

* Dynamic Data.

### useState

* State Management Hook.

### useEffect

* Handles Side Effects.

### map()

* Render Lists Dynamically.

### Conditional Rendering

* Show UI based on conditions.

### Controlled Components

* Forms controlled by React state.

### Fetch API

* Used for API communication.

---

# One-Line Revision

* React = UI Library
* Component = JS Function
* JSX = HTML inside JS
* Props = Parent → Child Data
* State = Dynamic Data
* useState = Manage State
* useEffect = Side Effects
* map() = Render Lists
* Fetch API = Get Data
* Controlled Component = Form + State
