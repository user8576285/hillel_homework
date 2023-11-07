import "./App.css";
import { useState, createContext } from "react";
import Tasks from "./components/Tasks";

export const Context = createContext(null);

function App() {
  const [tasks, setTasks] = useState(['React, Redux']);
  const [name, setName] = useState("");

  const handleAddTask = () => {
    const items = [...tasks, name];
    setTasks(items);
  };
  return (
    <Context.Provider value={tasks}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddTask}>Create new task</button>

      <Tasks />
    </Context.Provider>
  );
}

export default App;
