import React from "react";
import { Link } from "react-router-dom";

function App({ children }) {
  return (
    <div>
      <h1>React Multiples</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default App;
