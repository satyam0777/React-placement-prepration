import {useState} from "react";
import useDebounce from "../hooks/use-debounce";

const DebouncedInput = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const debouncedValue = useDebounce(inputText, 1000, () => {
    // API Call
    console.log("Function Call");
  });

  return (
    <div>
      <p>{debouncedValue}</p>
      <input
        type="text"
        value={inputText}
        placeholder="Type Something... "
        onChange={handleInputChange}
      />
    </div>
  );
};

export default DebouncedInput;


/*
   import {useEffect, useState} from "react";
   
   const useDebounce = (value, delay, callback = () => {}) => {
     const [debouncedValue, setDebouncedValue] = useState(value);
   
     useEffect(() => {
       const handler = setTimeout(() => {
         setDebouncedValue(value); // Update the debounced value after the delay
         callback();  // Call the callback function after the delay 
       }, delay);
   
       return () => clearTimeout(handler);  // Cleanup the timeout on unmount or when value or delay changes
     }, [value, delay]);
   
     return debouncedValue;  // Return the debounced value to the component 
   };
   
   export default useDebounce;
*/