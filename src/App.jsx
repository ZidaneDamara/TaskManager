import { useState } from "react";
import "./App.css";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { TaskProvider } from "./TaskContext";

function App() {
  return (
    <TaskProvider >
      <>
        <h1>Task Manager</h1>
        <TaskInput />
        <TaskList />
      </>
    </TaskProvider>
  );
}

export default App;
