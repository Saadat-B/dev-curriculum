import { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [todo, setTodo] = useState("");

  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList((prev) => [...prev, { text: todo, completed: false }]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    const filteredArray = taskList.filter((_, index) => id != index);
    setTaskList(filteredArray);
  };

  const toggleTodo = (id) => {
    setTaskList((prev) =>
      prev.map((task, index) =>
        index == id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <div>
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Todo"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button className="submitBtn" type="submit">
            Add
          </button>
        </form>
        <TaskItem
          arr={taskList}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}

export default App;
