import React, { useState } from "react";

export default function App(props) {
  const [count, setCount] = useState(0);

  const handleChange = (type: number) => {
    setCount((oldCounter) => oldCounter + type);
  };

  console.log("props react-single", props);
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{props.name}</h1>
      <h4>Counter: {count}</h4>
      <div style={{ display: "inline-block" }}>
        <button onClick={() => handleChange(1)}>+</button>
        <button onClick={() => handleChange(-1)}>-</button>
      </div>
    </section>
  );
}
