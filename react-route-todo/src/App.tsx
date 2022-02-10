import React, { useState } from "react";
import Parcel from "single-spa-react/parcel";
import { v4 as uuid } from "uuid";
import { emitEvent } from "@ma/utils";

export default function App({ name }) {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emitEvent("@ma/react-route-todo/todo/add-task", {
      id: uuid(),
      describe: task,
    });
    setTask("");
  };

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={task} />
        <button type="submit">Salvar</button>
      </form>
      <Parcel config={() => System.import("@ma/react-parcel")} />
    </>
  );
}
