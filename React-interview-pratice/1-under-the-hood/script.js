// 1 - Render Phase
// 2 - Commit Phase

function Counter() {
  const [count, setCount] = React.useState(0);
  // let count1 = 0; // this is not a state variable, so it will not trigger a re-render when updated
  // let message = "hello"; // this is not a state variable, so it will not trigger a re-render when updated
  // let message = "hello" + count; 

  const increment = () => {
    setCount((prevValue) => prevValue + 1);
    setCount((prevValue) => prevValue + 1);
    setCount((prevValue) => prevValue + 1);
    setCount((prevValue) => prevValue + 1);
    setCount((prevValue) => prevValue + 1);
    // here prevValue is the value of count , after the last state update
    // so it will always be 1, and the final value of count will be 5 
    
    // setCount(count + 1); // This is not the correct way to update state it update the value 1,
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // count1 = count1 + 1;

    // here count is the value of count before the state update
    // so it will always be 0, and the final value of count will be 0
    // so we should always use the previous value of state when updating state
    // setCount((prevValue) => prevValue + 1);
  };
  console.log("Count Rendered");
  
  // const counter = React.createElement(
  //   "div",
  //   null,
  //   React.createElement("p", null, `Count: ${count}`),
  //   React.createElement("button", {onClick: increment}, `Increment`)
  // );
  // return counter;
  //this is the same as below but using JSX syntax

  return (
    <div>
      <p>Count: {count}</p>
      {/* <p>Count: {count1}</p> */}
      <button onClick={increment}>Increment</button>
    </div>
  );
 // this is the same as above upper but using react form 
}

const CounterParent = () => {
  const [showMessage, setShowMessage] = React.useState(false); // this is a state variable, so it will trigger a re-render when updated
  const [showMessage2, setShowMessage2] = React.useState(false);

  const [toggleCount, setToggleCount] = React.useState(false);

  console.log("Parent Rendered");

  const toggleMessages = () => {   // this function will toggle the state of showMessage and showMessage2
    // this will cause a re-render of the component
    setShowMessage(!showMessage);
    setShowMessage2(!showMessage2);
  };

  return (
    <div>
      {toggleCount ? (
        <div>
          <h1>Counter</h1>
          <Counter />  {/* This will render the Counter component */}
        </div>
      ) : (
        <span>
          <p>Counter off</p>  {/* This will render when toggleCount is false */}
        </span>
      )}
      <button onClick={() => setToggleCount(!toggleCount)}>  
        Toggle Counter
      </button>
      <br />
      {showMessage && <b>Now you see me</b>}
      {showMessage2 && <b>Now you see me Again</b>}
      <button onClick={toggleMessages}>Show Message</button> {/* This will toggle the state of showMessage and showMessage2 */}
      <br />
      <Frameworks />
    </div>
  );
};

const Frameworks = () => {
  const [frameworks, setFrameworks] = React.useState([
    {id: 166, name: "React"},
    {id: 321, name: "Angular"},   
  ]);

  const [newFramework, setNewFramework] = useState('');

  const handleAdd = () => {
    if (newFramework.trim() === '') return;
    const newItem = {
      id: Math.floor(Math.random() * 1000),
      name: newFramework
    };
    setFrameworks([newItem, ...frameworks]);
    setNewFramework('');
  };

  return ( 
    // this just add elements to the beginning of the list
    // <div>
    //   <h3>Popular Frameworks</h3>
    //   <div>
    //     {frameworks.map((item, index) => (
    //       <p key={item.id}>{item.name}</p>  // Using item.id as key for each item 
    //     ))}
    //   </div>
    //   <button
    //     onClick={() => setFrameworks([{id: 888, name: "Vue"}, ...frameworks])} // This will add a new framework to the beginning of the list
    //   >
    //     Add New
    //   </button>
    // </div>

    //here we are adding a new framework to the list using a form input
    // and a button to add the new framework to the list
    // <div>
    //   <h3>Popular Frameworks</h3>
    //   <input
    //     type="text"
    //     value={newFramework}
    //     onChange={(e) => setNewFramework(e.target.value)}
    //     placeholder="Enter framework name"
    //   />
    //   <button onClick={handleAdd}>Add New</button>
    //   <div>
    //     {frameworks.map((item) => (
    //       <p key={item.id}>{item.name}</p>
    //     ))}
    //   </div>
    // </div>
     
    <div>
      <h3>Popular Frameworks</h3>
      <input
        type="text"
        placeholder="Enter new framework"
        value={newFramework}
        onChange={(e) => setNewFramework(e.target.value)}
      />
      <button onClick={handleAdd}>Add New</button>
      <p>Total Frameworks: {frameworks.length}</p>
      {/* //it just print or add in list */}
      {/* <div>
        {frameworks.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div> */}

      {/* it add element as well we can filter */}
      <div>
        {frameworks.map((item) => (
          <p
            key={item.id}
            onClick={() =>
              setFrameworks(frameworks.filter((f) => f.id !== item.id))
            }
            style={{ cursor: "pointer" }}
          >
            {item.name} (click to delete)
          </p>
        ))}
      </div>
    </div>

  );

};

const root = ReactDOM.createRoot(document.getElementById("root"));  // Create a root for React to render into
// ReactDOM.createRoot is used to create a root for React to render into, this is the new way of rendering in React 18 and above
// ReactDOM.render is the old way of rendering in React, it is still supported but not recommended for new projects
root.render(React.createElement(CounterParent));
