# React Quick Revision Notes 🚀

## What is React?

**React is a JavaScript library used to develop modern user interfaces (UI).**

---

## React is Component-Based

A **Component** is basically a JavaScript function.

### Example

```jsx
function App() {
    return (
        <h1>Hello React</h1>
    );
}

export default App;
```

---

## JSX (JavaScript XML)

**JSX means writing HTML inside JavaScript.**

React internally converts JSX into JavaScript.

Example:

```jsx
const element = <h1>Hello React</h1>;
```

---

# Important JSX Rules

### 1. Return Only One Parent Element

✅ Correct

```jsx
return (
    <div>
        <h1>Hello</h1>
        <p>Welcome</p>
    </div>
);
```

❌ Wrong

```jsx
return (
    <h1>Hello</h1>
    <p>Welcome</p>
);
```

---

### 2. Use `className` Instead of `class`

✅ Correct

```jsx
<h1 className="title">Hello</h1>
```

❌ Wrong

```jsx
<h1 class="title">Hello</h1>
```

---

### 3. Write JavaScript Inside Curly Braces `{}`

```jsx
const name = "John";

return <h1>Hello {name}</h1>;
```

---

## Component Reusability

One of the biggest advantages of React is that components can be reused multiple times.

Example:

```jsx
function Card() {
    return <h2>User Card</h2>;
}

function App() {
    return (
        <>
            <Card />
            <Card />
            <Card />
        </>
    );
}
```

---

# Props

**Props are used to pass data from Parent Component to Child Component.**

### Example

```jsx
function Student(props) {
    return <h1>{props.name}</h1>;
}

function App() {
    return <Student name="Rahul" />;
}
```

---

# State

**State is data that can change dynamically.**

Whenever state changes, React re-renders the component.

---

# useState Hook

Used for managing state in functional components.

### Import

```jsx
import { useState } from "react";
```

### Example

```jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </>
    );
}
```

---

# Understanding Dependency Array (`useEffect`)

### 1. Empty Dependency Array `[]`

Runs only once when the component mounts.

```jsx
useEffect(() => {
    console.log("Runs only once");
}, []);
```

Equivalent to:

```jsx
componentDidMount()
```

---

### 2. With Dependency `[count]`

Runs whenever `count` changes.

```jsx
useEffect(() => {
    console.log("Count changed");
}, [count]);
```

---

# Fetch API in React ⭐ (Very Important)

Used to fetch data from an API.

### Example

```jsx
import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}
```

---

# Quick Interview Revision

### React

* JavaScript library for building UI.
* Developed by Meta (Facebook).
* Uses Virtual DOM.

### Component

* Reusable piece of UI.
* Basically a JavaScript function.

### JSX

* HTML inside JavaScript.
* Converted by React internally.

### Props

* Pass data from Parent → Child.

### State

* Dynamic data that can change.

### useState

* Manages component state.

### useEffect

* Handles side effects.
* Used for API calls, timers, subscriptions, etc.

### Dependency Array

* `[]` → Runs once.
* `[count]` → Runs when count changes.

### Fetch API

* Used to retrieve data from servers/APIs.

---

# One-Line Revision

* React = JavaScript Library for UI.
* Component = JavaScript Function.
* JSX = HTML inside JavaScript.
* Props = Parent → Child Data Transfer.
* State = Dynamic Data.
* useState = Manage State.
* useEffect = Side Effects.
* Fetch API = Get Data from Backend/API.
