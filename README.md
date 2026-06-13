# ⚛️ React.js — Complete Guide (Basic to Advanced)

> A comprehensive React reference covering fundamentals to advanced patterns, with real-world code examples, best practices, and interview prep.

---

## 📚 Table of Contents

1. [Introduction](#1-introduction)
2. [Why React?](#2-why-react)
3. [Core Features](#3-core-features)
4. [Project Setup](#4-project-setup)
5. [JSX](#5-jsx)
6. [Components](#6-components)
7. [Props](#7-props)
8. [State — useState](#8-state--usestate)
9. [Event Handling](#9-event-handling)
10. [Conditional Rendering](#10-conditional-rendering)
11. [Lists and Keys](#11-lists-and-keys)
12. [Forms & Controlled Components](#12-forms--controlled-components)
13. [useEffect](#13-useeffect)
14. [API Calls](#14-api-calls)
15. [Component Lifecycle](#15-component-lifecycle)
16. [Context API](#16-context-api)
17. [React Router v6](#17-react-router-v6)
18. [Custom Hooks](#18-custom-hooks)
19. [useRef](#19-useref)
20. [useReducer](#20-usereducer)
21. [Performance Optimization](#21-performance-optimization)
22. [Error Boundaries](#22-error-boundaries)
23. [Portals](#23-portals)
24. [Lazy Loading & Suspense](#24-lazy-loading--suspense)
25. [Forwarding Refs](#25-forwarding-refs)
26. [Higher-Order Components (HOC)](#26-higher-order-components-hoc)
27. [Render Props Pattern](#27-render-props-pattern)
28. [Compound Components Pattern](#28-compound-components-pattern)
29. [State Management](#29-state-management)
30. [TypeScript with React](#30-typescript-with-react)
31. [Testing](#31-testing)
32. [Project Structure](#32-project-structure)
33. [Best Practices](#33-best-practices)
34. [Interview Questions](#34-interview-questions)
35. [Learning Roadmap](#35-learning-roadmap)

---

## 1. Introduction

React is a **JavaScript library** for building fast, interactive, and reusable User Interfaces (UI).

- Developed and maintained by **Meta (Facebook)**
- Released in **2013**
- Current major version: **React 18+**

```jsx
function App() {
  return <h1>Hello, React! 🚀</h1>;
}

export default App;
```

---

## 2. Why React?

### Problems with Vanilla JavaScript
- Direct DOM manipulation is slow and complex
- Hard to maintain large codebases
- Inefficient UI updates

### React Solutions
| Problem | React Solution |
|---------|----------------|
| Slow DOM updates | Virtual DOM |
| Hard to reuse UI | Components |
| Complex data flow | One-way data binding |
| State management | useState / Context / Redux |

---

## 3. Core Features

| Feature | Description |
|---------|-------------|
| ⚡ Virtual DOM | Lightweight copy of real DOM for fast diffing |
| 🧩 Component-Based | UI split into reusable, isolated pieces |
| 🔄 One-Way Data Flow | Predictable state changes (parent → child) |
| 🪝 Hooks | Use state/lifecycle in functional components |
| 📦 Rich Ecosystem | Router, Redux, Query, testing tools |
| 🔁 Concurrent Mode | React 18 — non-blocking rendering |

---

## 4. Project Setup

### Using Vite (Recommended)
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

### Using Create React App
```bash
npx create-react-app my-app
cd my-app
npm start
```

### Using Vite with TypeScript
```bash
npm create vite@latest my-app -- --template react-ts
```

### Folder Overview After Setup
```
my-app/
├── public/
├── src/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 5. JSX

JSX = **JavaScript XML** — write HTML-like syntax inside JS.

```jsx
const element = <h1>Hello World</h1>;
```

React compiles JSX to `React.createElement()` calls internally.

### JSX Rules

```jsx
// ✅ Must return ONE parent element
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);

// ✅ Use Fragment to avoid extra div
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);

// ✅ className instead of class
<div className="container">

// ✅ Curly braces for JS expressions
const name = "Kamal";
<h1>{name}</h1>

// ✅ Self-closing tags
<img src="logo.png" />
<input type="text" />

// ✅ Inline styles use objects
<div style={{ color: "red", fontSize: "18px" }}>Hello</div>

// ✅ Comments in JSX
{/* This is a comment */}

// ✅ htmlFor instead of for (in labels)
<label htmlFor="email">Email</label>
```

---

## 6. Components

Components are reusable, independent pieces of UI.

### Functional Component (Modern Standard)
```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Welcome;
```

### Arrow Function Component
```jsx
const Welcome = ({ name }) => <h1>Hello, {name}!</h1>;

export default Welcome;
```

### Using a Component
```jsx
import Welcome from './Welcome';

function App() {
  return <Welcome name="Kamal" />;
}
```

### Component Naming Rules
- Must start with a **capital letter**: `MyComponent` ✅ `myComponent` ❌
- Must return JSX or `null`

---

## 7. Props

Props pass data **from Parent → Child** (read-only).

### Basic Props
```jsx
function UserCard({ name, age, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// Usage
<UserCard name="Kamal" age={25} email="kamal@gmail.com" />
```

### Default Props
```jsx
function Button({ label = "Click Me", color = "blue" }) {
  return <button style={{ background: color }}>{label}</button>;
}
```

### Prop Types (Runtime Type Checking)
```bash
npm install prop-types
```
```jsx
import PropTypes from 'prop-types';

function User({ name, age }) {
  return <p>{name} is {age} years old</p>;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
```

### Children Prop
```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

// Usage
<Card>
  <h2>Title</h2>
  <p>Some content here</p>
</Card>
```

### Spread Props
```jsx
const userProps = { name: "Kamal", age: 25 };
<UserCard {...userProps} />
```

---

## 8. State — useState

State holds dynamic, changeable data within a component.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

### Functional Update (Safer for Stale State)
```jsx
setCount(prev => prev + 1);
```

### Object State
```jsx
const [user, setUser] = useState({ name: "", email: "" });

// ✅ Always spread previous state
setUser(prev => ({ ...prev, name: "Kamal" }));
```

### Array State
```jsx
const [items, setItems] = useState([]);

// Add item
setItems(prev => [...prev, newItem]);

// Remove item
setItems(prev => prev.filter(item => item.id !== id));

// Update item
setItems(prev =>
  prev.map(item => item.id === id ? { ...item, done: true } : item)
);
```

---

## 9. Event Handling

```jsx
function MyComponent() {
  // Named handler
  function handleClick() {
    alert("Button clicked!");
  }

  // Arrow function handler
  const handleHover = () => console.log("Hovered");

  // Event with argument
  const handleDelete = (id) => {
    console.log("Delete id:", id);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <button onMouseEnter={handleHover}>Hover Me</button>
      <button onClick={() => handleDelete(42)}>Delete</button>
    </div>
  );
}
```

### Event Object
```jsx
function handleChange(e) {
  console.log(e.target.value);    // input value
  console.log(e.target.name);     // input name
  console.log(e.target.checked);  // checkbox
}

<input onChange={handleChange} />
```

### Prevent Default
```jsx
function handleSubmit(e) {
  e.preventDefault(); // stops form reload
  console.log("Form submitted");
}

<form onSubmit={handleSubmit}>
```

### Common Events
| Event | Description |
|-------|-------------|
| `onClick` | Mouse click |
| `onChange` | Input change |
| `onSubmit` | Form submit |
| `onKeyDown` / `onKeyUp` | Keyboard |
| `onMouseEnter` / `onMouseLeave` | Hover |
| `onFocus` / `onBlur` | Focus |

---

## 10. Conditional Rendering

```jsx
const isLoggedIn = true;

// Ternary
{isLoggedIn ? <Dashboard /> : <Login />}

// Logical AND
{isAdmin && <AdminPanel />}

// Nullish coalescing
{user?.name ?? "Guest"}

// If-else via variable
let content;
if (isLoggedIn) {
  content = <Dashboard />;
} else {
  content = <Login />;
}
return <div>{content}</div>;

// Early return
function Greeting({ isLoggedIn }) {
  if (!isLoggedIn) return <p>Please log in</p>;
  return <h1>Welcome back!</h1>;
}
```

---

## 11. Lists and Keys

```jsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Key Rules
```jsx
// ✅ Use unique, stable IDs
key={user.id}

// ⚠️ Avoid index as key (causes bugs on reorder/delete)
key={index}

// ✅ If no ID, generate one (uuid)
import { v4 as uuidv4 } from 'uuid';
key={uuidv4()}  // Only set on create, not on render
```

---

## 12. Forms & Controlled Components

### Controlled Input
```jsx
function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

### Checkbox & Select
```jsx
// Checkbox
const [agreed, setAgreed] = useState(false);
<input
  type="checkbox"
  checked={agreed}
  onChange={e => setAgreed(e.target.checked)}
/>

// Select
const [role, setRole] = useState("user");
<select value={role} onChange={e => setRole(e.target.value)}>
  <option value="user">User</option>
  <option value="admin">Admin</option>
</select>
```

### Uncontrolled Components (useRef)
```jsx
function UncontrolledForm() {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 13. useEffect

Handles **side effects**: API calls, timers, subscriptions, DOM manipulation.

```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Side effect code here
  return () => {
    // Cleanup (runs on unmount or before next effect)
  };
}, [dependencies]);
```

### Dependency Array Cheatsheet
```jsx
// Run ONCE on mount
useEffect(() => { console.log("Mounted"); }, []);

// Run on EVERY render (no array)
useEffect(() => { console.log("Every render"); });

// Run when 'count' changes
useEffect(() => { console.log("count changed:", count); }, [count]);

// Cleanup example (timer)
useEffect(() => {
  const timer = setInterval(() => setCount(c => c + 1), 1000);
  return () => clearInterval(timer); // cleanup
}, []);
```

---

## 14. API Calls

### Using Fetch
```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

### Using Async/Await
```jsx
useEffect(() => {
  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch("https://api.example.com/data");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  fetchData();
}, []);
```

### Using Axios
```bash
npm install axios
```
```jsx
import axios from 'axios';

useEffect(() => {
  axios.get("https://api.example.com/users")
    .then(res => setUsers(res.data))
    .catch(err => setError(err.message));
}, []);
```

---

## 15. Component Lifecycle

Functional components map lifecycle using `useEffect`:

```jsx
function MyComponent({ id }) {
  useEffect(() => {
    console.log("MOUNT — Component created");

    return () => {
      console.log("UNMOUNT — Component removed");
    };
  }, []);

  useEffect(() => {
    console.log("UPDATE — id changed:", id);
  }, [id]);
}
```

### Lifecycle Mapping

| Class Component | Functional Equivalent |
|----------------|-----------------------|
| `componentDidMount` | `useEffect(() => {}, [])` |
| `componentDidUpdate` | `useEffect(() => {}, [dep])` |
| `componentWillUnmount` | `return () => {}` inside useEffect |
| `shouldComponentUpdate` | `React.memo` |

---

## 16. Context API

Solves **Prop Drilling** — share state globally without passing through every layer.

```jsx
// 1. Create Context
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

// 2. Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme(prev => prev === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook for easy consumption
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

// 4. Consume in any child component
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}

// 5. Wrap app
function App() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}
```

---

## 17. React Router v6

```bash
npm install react-router-dom
```

### Basic Setup
```jsx
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Dynamic Routes & useParams
```jsx
function UserDetail() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}
```

### Programmatic Navigation
```jsx
function LoginPage() {
  const navigate = useNavigate();

  function handleLogin() {
    // after login...
    navigate("/dashboard");
    // navigate(-1); // go back
  }
}
```

### Nested Routes
```jsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<Overview />} />
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```
```jsx
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet /> {/* nested route renders here */}
    </div>
  );
}
```

### Protected Routes
```jsx
function PrivateRoute({ children }) {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
```

### useSearchParams
```jsx
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

  return <p>Searching: {query}</p>;
}
// URL: /search?q=react
```

---

## 18. Custom Hooks

Extract and reuse stateful logic across components.

### useFetch
```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Fetch error");
        const json = await res.json();
        if (isMounted) setData(json);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();
    return () => { isMounted = false; };
  }, [url]);

  return { data, loading, error };
}

// Usage
function Users() {
  const { data, loading, error } = useFetch("https://api.example.com/users");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return <ul>{data.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

### useLocalStorage
```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage
const [theme, setTheme] = useLocalStorage("theme", "light");
```

### useDebounce
```jsx
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
const debouncedSearch = useDebounce(searchTerm, 300);
```

### useToggle
```jsx
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(v => !v);
  return [value, toggle];
}

// Usage
const [isOpen, toggleMenu] = useToggle();
```

---

## 19. useRef

Persists a mutable value across renders without causing re-renders.

### DOM Reference
```jsx
import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
```

### Storing Previous Value
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(count);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return <p>Now: {count} | Before: {prevCount.current}</p>;
}
```

### Avoiding Stale Closures (interval/timer)
```jsx
function Timer() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  useEffect(() => {
    const id = setInterval(() => {
      console.log(countRef.current); // always fresh value
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
}
```

---

## 20. useReducer

Better for **complex state logic** or when next state depends on the previous.

```jsx
import { useReducer } from 'react';

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT": return { ...state, count: state.count + state.step };
    case "DECREMENT": return { ...state, count: state.count - state.step };
    case "RESET":     return initialState;
    case "SET_STEP":  return { ...state, step: action.payload };
    default:          return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <input
        type="number"
        value={state.step}
        onChange={e => dispatch({ type: "SET_STEP", payload: Number(e.target.value) })}
      />
    </div>
  );
}
```

### useReducer vs useState

| | `useState` | `useReducer` |
|-|-----------|-------------|
| Best for | Simple values | Complex state objects |
| Logic location | Inline in component | Separate reducer function |
| Testability | Harder | Easier (pure function) |

---

## 21. Performance Optimization

### React.memo
Prevents re-render when props haven't changed.
```jsx
const UserCard = React.memo(function UserCard({ name, age }) {
  return <div>{name} — {age}</div>;
});

// With custom comparison
const UserCard = React.memo(UserCard, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
```

### useMemo
Memoizes the **result** of an expensive calculation.
```jsx
import { useMemo } from 'react';

function ProductList({ products, filterText }) {
  const filtered = useMemo(
    () => products.filter(p => p.name.includes(filterText)),
    [products, filterText]
  );

  return <ul>{filtered.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}
```

### useCallback
Memoizes a **function** so it doesn't get recreated on every render.
```jsx
import { useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []); // no deps = created once

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Re-render Parent</button>
      <Child onClick={handleClick} />
    </>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
});
```

### When to Optimize
> ⚠️ Don't premature optimize. Only add `memo`, `useMemo`, `useCallback` when:
> - You've measured a real performance problem
> - The component renders frequently with the same props
> - The calculation is genuinely expensive

---

## 22. Error Boundaries

Catches JavaScript errors in the component tree (class component only).

```jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary fallback={<p>Oops! Component failed.</p>}>
  <SomeRiskyComponent />
</ErrorBoundary>
```

---

## 23. Portals

Render a component **outside** its parent DOM node (e.g., modals, tooltips).

```jsx
import { createPortal } from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body  // renders directly in <body>
  );
}
```

---

## 24. Lazy Loading & Suspense

Load components **only when needed** — reduces initial bundle size.

```jsx
import { lazy, Suspense } from 'react';

// Lazy load
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings  = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}
```

---

## 25. Forwarding Refs

Pass a `ref` through a component to a DOM element.

```jsx
import { forwardRef } from 'react';

const TextInput = forwardRef(function TextInput({ placeholder }, ref) {
  return <input ref={ref} type="text" placeholder={placeholder} />;
});

// Usage
function Form() {
  const inputRef = useRef();

  return (
    <>
      <TextInput ref={inputRef} placeholder="Type here..." />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}
```

---

## 26. Higher-Order Components (HOC)

A function that takes a component and returns an enhanced component.

```jsx
function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) return <Navigate to="/login" />;
    return <WrappedComponent {...props} />;
  };
}

// Usage
const ProtectedDashboard = withAuth(Dashboard);
```

---

## 27. Render Props Pattern

Share logic via a **prop that is a function**.

```jsx
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

// Usage
<MouseTracker render={({ x, y }) => (
  <p>Mouse at: {x}, {y}</p>
)} />
```

---

## 28. Compound Components Pattern

Components that work together and share implicit state.

```jsx
const TabsContext = createContext();

function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ value, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    <button
      className={activeTab === value ? "active" : ""}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}

function TabPanel({ value, children }) {
  const { activeTab } = useContext(TabsContext);
  return activeTab === value ? <div>{children}</div> : null;
}

// Usage
<Tabs defaultTab="home">
  <TabList>
    <Tab value="home">Home</Tab>
    <Tab value="about">About</Tab>
  </TabList>
  <TabPanel value="home"><p>Home content</p></TabPanel>
  <TabPanel value="about"><p>About content</p></TabPanel>
</Tabs>
```

---

## 29. State Management

### When to Use What

```
Local State    →  useState / useReducer
Shared State   →  Context API (small-medium apps)
Server State   →  React Query / SWR
Global State   →  Redux Toolkit / Zustand (large apps)
```

### Redux Toolkit (RTK)
```bash
npm install @reduxjs/toolkit react-redux
```

```jsx
// store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1; },
    decrement: state => { state.value -= 1; },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

```jsx
// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: { counter: counterReducer },
});
```

```jsx
// main.jsx
import { Provider } from 'react-redux';
import { store } from './store';

<Provider store={store}><App /></Provider>
```

```jsx
// Component
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

### Zustand (Lightweight Alternative)
```bash
npm install zustand
```
```jsx
import { create } from 'zustand';

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
}));

function Counter() {
  const { count, increment, decrement } = useStore();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

### React Query (Server State)
```bash
npm install @tanstack/react-query
```
```jsx
import { useQuery, useMutation, QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Setup
const queryClient = new QueryClient();
<QueryClientProvider client={queryClient}><App /></QueryClientProvider>

// Fetch
function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(r => r.json()),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return <ul>{data.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

// Mutate
const mutation = useMutation({
  mutationFn: (newUser) => fetch('/api/users', { method: 'POST', body: JSON.stringify(newUser) }),
  onSuccess: () => queryClient.invalidateQueries(['users']),
});
```

---

## 30. TypeScript with React

```bash
npm create vite@latest my-app -- --template react-ts
```

### Typing Props
```tsx
interface UserCardProps {
  name: string;
  age: number;
  email?: string;        // optional
  onClick: () => void;
  children: React.ReactNode;
}

function UserCard({ name, age, email = "N/A", onClick, children }: UserCardProps) {
  return <div onClick={onClick}>{name}, {age} — {email}{children}</div>;
}
```

### Typing useState
```tsx
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
const [items, setItems] = useState<string[]>([]);
```

### Typing Events
```tsx
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  console.log(e.target.value);
}

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
}

function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  console.log(e.currentTarget);
}
```

### Typing useRef
```tsx
const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus();
```

---

## 31. Testing

### Setup (Vitest + Testing Library)
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### Basic Component Test
```jsx
// Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe("Button", () => {
  test("renders correctly", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Testing Async
```jsx
test("loads and displays users", async () => {
  render(<UserList />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  const users = await screen.findAllByRole("listitem");
  expect(users).toHaveLength(3);
});
```

---

## 32. Project Structure

```
src/
│
├── assets/              # Images, fonts, icons
├── components/          # Reusable UI components
│   ├── ui/              # Generic: Button, Input, Modal
│   └── layout/          # Header, Footer, Sidebar
├── pages/               # Route-level components
├── hooks/               # Custom hooks
├── context/             # Context providers
├── store/               # Redux slices (if using RTK)
├── services/            # API calls (axios instances)
├── utils/               # Helper functions
├── types/               # TypeScript interfaces (if TS)
├── constants/           # App-wide constants
├── App.jsx
└── main.jsx
```

### API Service Pattern
```jsx
// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

// Intercept requests (add auth token)
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
```

---

## 33. Best Practices

### ✅ Do

```jsx
// Use functional components
const MyComponent = () => <div>...</div>;

// Keep components small & focused
// One component = one responsibility

// Use meaningful key prop
users.map(u => <User key={u.id} {...u} />);

// Destructure props
function Card({ title, body, footer }) { ... }

// Extract reusable logic into custom hooks
const { data } = useFetch(url);

// Colocate state with the component that needs it
// Lift state only when necessary

// Use environment variables for API URLs
const API = import.meta.env.VITE_API_URL;
```

### ❌ Avoid

```jsx
// Don't mutate state directly
state.count = 5;           // ❌
setCount(5);               // ✅

// Don't use array index as key (when list changes)
key={index}                // ⚠️ (ok for static lists only)

// Don't define components inside render
function Parent() {
  function Child() { ... } // ❌ creates new component each render
  return <Child />;
}

// Don't skip useEffect dependencies
useEffect(() => {
  doSomething(value);
}, []);           // ❌ missing 'value' in deps
}, [value]);      // ✅
```

---

## 34. Interview Questions

### Conceptual

| Question | Short Answer |
|----------|-------------|
| What is React? | JS library for building UIs using components |
| What is the Virtual DOM? | Lightweight JS copy of real DOM; React diffs it for efficient updates |
| Props vs State? | Props: immutable, parent→child. State: mutable, managed within component |
| What is JSX? | HTML-like syntax compiled to React.createElement() |
| What are Hooks? | Functions to use state/lifecycle in functional components |
| What is prop drilling? | Passing props through many levels; solved by Context API |
| What is reconciliation? | React's process of comparing Virtual DOM trees to determine minimal DOM changes |
| What is a key in lists? | Unique identifier helping React track list item changes efficiently |

### Code Questions

```jsx
// Q: What is wrong here?
const [data, setData] = useState([]);
useEffect(() => {
  fetchData().then(res => setData(res));
}); // Missing dependency array — runs on every render (infinite loop risk)

// Q: How do you share state between siblings?
// Lift state to their common parent

// Q: Difference between useMemo and useCallback?
const value    = useMemo(() => compute(), [deps]);     // memoizes VALUE
const handler  = useCallback(() => doThing(), [deps]); // memoizes FUNCTION

// Q: When does useEffect cleanup run?
useEffect(() => {
  const sub = subscribe();
  return () => sub.unsubscribe(); // runs before next effect OR on unmount
}, [dep]);
```

---

## 35. Learning Roadmap

### 🟢 Beginner
- [ ] JSX syntax & rules
- [ ] Functional components
- [ ] Props & destructuring
- [ ] useState
- [ ] Event handling
- [ ] Conditional rendering
- [ ] Lists & keys
- [ ] Basic forms

### 🟡 Intermediate
- [ ] Controlled components
- [ ] useEffect & side effects
- [ ] API calls (fetch / axios)
- [ ] Component lifecycle
- [ ] React Router v6
- [ ] Context API
- [ ] useRef
- [ ] Custom hooks

### 🔴 Advanced
- [ ] useReducer
- [ ] useMemo & useCallback
- [ ] React.memo
- [ ] Error Boundaries
- [ ] Portals
- [ ] Lazy Loading & Suspense
- [ ] forwardRef
- [ ] HOC, Render Props, Compound Components
- [ ] Redux Toolkit
- [ ] React Query / SWR
- [ ] TypeScript with React
- [ ] Testing (Vitest + RTL)
- [ ] Performance profiling (React DevTools)

---

## ⚡ Quick Reference Cheatsheet

```
useState         → local state
useEffect        → side effects & lifecycle
useContext       → consume context
useRef           → DOM access & mutable values
useReducer       → complex state logic
useMemo          → memoize computed values
useCallback      → memoize functions
useId            → stable unique IDs
useTransition    → non-urgent state updates (React 18)
useDeferredValue → defer re-render for heavy updates (React 18)

React.memo       → skip re-render if props unchanged
lazy + Suspense  → code splitting
createPortal     → render outside parent DOM
forwardRef       → pass ref to child DOM
createContext    → global state sharing
```

---

> 🚀 **Master these concepts and you'll be well-prepared for React interviews and production-level applications.**

---

*React version reference: React 18+ | React Router v6 | Redux Toolkit 2.x*
