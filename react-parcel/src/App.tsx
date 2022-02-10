import React, { useState, useEffect } from "react";
import { listenEvent } from "@ma/utils";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    listenEvent("@ma/react-route-todo/todo/add-task", (event: any) => {
      setTasks((oldTasks) => [...oldTasks, event.detail]);
    });
  }, []);

  return (
    <>
      <h1>@ma/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
