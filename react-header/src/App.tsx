import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

export default function App({ name }) {
  return (
    <BrowserRouter>
      <header>
        <h1>{name}</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/react-single">React Single</Link>
            </li>
            <li>
              <Link to="/react-lazy">React Lazy</Link>
            </li>
            <li>
              <Link to="/react-multiples">React Multiples</Link>
            </li>
            <li>
              <Link to="/react-route-todo">React-Route-Todo</Link>
            </li>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  );
}
