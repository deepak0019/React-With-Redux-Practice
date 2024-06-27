import { useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  // const [multipliedValue, setMultipliedValue] = useState(1);
  let multipliedValue = value * 5;
  const multiply = () => {
    setValue(value + 1);
  };

  return (
    <>
      <h1>Main value is: {value}</h1>
      <button onClick={multiply}>Multiply by 5</button>
      <h1>Multiplied Value: {multipliedValue}</h1>
    </>
  );
}

export default App;
