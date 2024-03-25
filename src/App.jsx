import React, { useState } from "react";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1> Counter </h1>
      <p> Count: {count}</p>
      <button className="inc_btn" onClick={increment}>
        Increase
      </button>
      <button className="dec_btn" onClick={decrement}>
        Decrease
      </button>
    </div>
  );
}

export default App;
