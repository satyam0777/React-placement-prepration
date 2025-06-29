# React Interview Questions & Explanations

---

## 1. JSX and Components

### Question

**What is JSX? Why do we use it in React, and how does it differ from HTML?**

Write a simple functional component that displays "Hello, [your name]!".

---

### Explanation

- **JSX** is a syntax extension for JavaScript that looks similar to HTML but is actually syntactic sugar for `React.createElement` calls.
- JSX allows you to write UI code in a declarative way, mixing HTML-like tags with JavaScript expressions.
- Unlike HTML, JSX uses `className` instead of `class`, and all tags must be closed.

---

### Example Code

```jsx
function Greeting() {
  return <h1>Hello, Satyam!</h1>;
}
```

---

## 2. Props and State

### Question

**What is the difference between props and state in React?**  
Create a component that takes a `name` prop and displays it, and also has a button to toggle the visibility of the name using state.

---

### Explanation

- **Props** are read-only data passed from parent to child components.
- **State** is local data managed within a component and can change over time.

---

### Example Code

```jsx
import { useState } from "react";

function NameToggle({ name }) {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(v => !v)}>
        {visible ? "Hide" : "Show"} Name
      </button>
      {visible && <p>{name}</p>}
    </div>
  );
}
```

---

## 3. Hooks and Lifecycle

### Question

**How does `useEffect` work?**  
Write a component that fetches data from an API when mounted and displays "Loading..." until the data arrives.

---

### Explanation

- `useEffect` lets you perform side effects (like data fetching) in functional components.
- The effect runs after the component renders. The dependency array controls when it runs.

---

### Example Code

```jsx
import { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data) return <div>Loading...</div>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

---

## 4. Conditional Rendering

### Question

**How do you conditionally render elements in React?**  
Create a component that displays "Welcome back!" if `isLoggedIn` is true, otherwise "Please log in."

---

### Explanation

- Use JavaScript expressions, ternary operators, or logical operators to conditionally render elements.

---

### Example Code

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}
```

---

## 5. Lists and Keys

### Question

**Why are keys important in React lists?**  
Write a component that renders a list of fruits and explain what happens if you use the array index as the key.

---

### Explanation

- Keys help React identify which items have changed, are added, or are removed.
- Using array index as key can cause issues if the list changes order or items are added/removed.

---

### Example Code

```jsx
const fruits = ["Apple", "Banana", "Cherry"];

function FruitList() {
  return (
    <ul>
      {fruits.map(fruit => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
```

---

## 6. Event Handling

### Question

**How do you handle events in React?**  
Create a button that, when clicked, increments a counter.

---

### Explanation

- Use camelCase event handlers (e.g., `onClick`).
- Pass a function to handle the event.

---

### Example Code

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}
```

---

## 7. Lifting State Up

### Question

**What does "lifting state up" mean?**  
Create two input fields that share the same value by lifting state up to their parent.

---

### Explanation

- Move shared state to the closest common ancestor so multiple components can access and update it.

---

### Example Code

```jsx
import { useState } from "react";

function Parent() {
  const [value, setValue] = useState("");

  return (
    <div>
      <Input value={value} onChange={setValue} />
      <Input value={value} onChange={setValue} />
    </div>
  );
}

function Input({ value, onChange }) {
  return (
    <input value={value} onChange={e => onChange(e.target.value)} />
  );
}
```

---

## 8. Controlled Components (Forms)

### Question

**What is a controlled component?**  
Create a form with a controlled input for a user's name.

---

### Explanation

- A controlled component’s value is managed by React state.

---

### Example Code

```jsx
import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");
  return (
    <form>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>Your name: {name}</p>
    </form>
  );
}
```

---

## 9. Routing

### Question

**How do you implement routing in a React app?**  
Add a `/profile` route that displays a Profile component.

---

### Explanation

- Use `react-router-dom` for client-side routing.

---

### Example Code

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}
function Profile() {
  return <h2>Profile Page</h2>;
}
```

---

## 10. Prop Drilling

### Question

**What is prop drilling and how can you avoid it?**  
Show an example and refactor it using Context API.

---

### Explanation

- Prop drilling is passing data through many layers of components.
- Use Context API to avoid it for global/shared data.

---

### Example Code

```jsx
// Before: Prop Drilling
function Grandparent() {
  const user = { name: "Satyam" };
  return <Parent user={user} />;
}
function Parent({ user }) {
  return <Child user={user} />;
}
function Child({ user }) {
  return <p>Hello, {user.name}!</p>;
}

// After: Context API
import { createContext, useContext } from "react";
const UserContext = createContext();
function Grandparent() {
  const user = { name: "Satyam" };
  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}
function Parent() {
  return <Child />;
}
function Child() {
  const user = useContext(UserContext);
  return <p>Hello, {user.name}!</p>;
}
```

---

## 11. useRef

### Question

**What is `useRef` used for?**  
Create a component with an input and a button that focuses the input when clicked.

---

### Explanation

- `useRef` gives you a mutable object whose `.current` property persists across renders.
- Commonly used to access DOM nodes.

---

### Example Code

```jsx
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();
  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}
```

---

## 12. Children Prop

### Question

**What is the `children` prop in React?**  
Create a `Card` component that wraps its children in a styled box.

---

### Explanation

- `children` lets you pass elements between a component’s opening and closing tags.

---

### Example Code

```jsx
function Card({ children }) {
  return <div style={{ border: "1px solid #ccc", padding: 16 }}>{children}</div>;
}

// Usage
<Card>
  <h2>Title</h2>
  <p>Content goes here.</p>
</Card>
```

---

## 13. Custom Hooks

### Question

**What are custom hooks?**  
Write a custom hook for toggling a boolean value.

---

### Explanation

- Custom hooks let you extract and reuse logic across components.

---

### Example Code

```jsx
import { useState } from "react";

function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(v => !v);
  return [value, toggle];
}

// Usage
function ToggleButton() {
  const [on, toggle] = useToggle();
  return <button onClick={toggle}>{on ? "ON" : "OFF"}</button>;
}
```

---

## 14. Memoization and Performance

### Question

**How do you prevent unnecessary re-renders in React?**  
Show an example using `React.memo` and `useCallback`.

---

### Explanation

- Use `React.memo` to memoize components and `useCallback` to memoize functions.

---

### Example Code

```jsx
import { useState, useCallback } from "react";

const Child = React.memo(function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => setCount(c => c + 1), []);
  return <Child onClick={handleClick} />;
}
```

---

## 15. Layout and Composition

### Question

**How do you compose layouts in React?**  
Create a `Layout` component with a header, main, and footer.

---

### Explanation

- Use composition and `children` to build flexible layouts.

---

### Example Code

```jsx
function Layout({ children }) {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

// Usage
<Layout>
  <h1>Home Page</h1>
</Layout>
```

---

## 16. Rolling Up State

### Question

**What does "rolling up state" mean?**  
Build a tabbed interface where clicking a tab updates the content below.

---

### Explanation

- Move state up to the lowest common ancestor to share it among components.

---

### Example Code

```jsx
import { useState } from "react";

function Tabs() {
  const [active, setActive] = useState("Tab1");
  return (
    <div>
      <button onClick={() => setActive("Tab1")}>Tab1</button>
      <button onClick={() => setActive("Tab2")}>Tab2</button>
      <div>
        {active === "Tab1" ? <p>Content 1</p> : <p>Content 2</p>}
      </div>
    </div>
  );
}
```

---

## 17. Unoptimal Re-render

### Question

**What causes unoptimal re-renders in React and how do you fix them?**  
Identify and fix unnecessary re-renders in a component tree.

---

### Explanation

- Passing new object/array/function references or updating unrelated state can cause unnecessary re-renders.
- Use `React.memo`, `useCallback`, and `useMemo` to optimize.

---

### Example Code

```jsx
import { useState, memo, useCallback } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => setCount(c => c + 1), []);
  return <Child onClick={handleClick} />;
}
```
