import {useState} from "react";

const useCounter = (initialCount = 0, step = 1) => { //
  const [count, setCount] = useState(initialCount);  // Initialize count with initialCount = 0

  const increment = () => {
    setCount(count + step);  // Increment count by step count => count + step
  };
  const decrement = () => {
    setCount(count - step);  // Decrement count by step count => count - step
  };
  const reset = () => {
    setCount(initialCount);
  };

  return {
    increment,
    decrement,
    reset,
    count,
  };
};

export default useCounter;


/** 
  import useCounter from "../hooks/use-counter";

function Counter() {  // Custom hook useCounter
  // Use the custom hook useCounter with initial count 0 and step 2 and it returns an object with count, increment, decrement, and reset functions
  // which call by the usecounter hook
  const {count, increment, decrement, reset} = useCounter(0, 2);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

 */
//app.jsx call the Counter component
// import Counter from "./components/Counter";
// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// export default App;
// then it call the counter component and it calls the useCounter hook it returns an object with count, increment, decrement, and reset functions then they can be used in the Counter component.and counter component is rendered in the App component.