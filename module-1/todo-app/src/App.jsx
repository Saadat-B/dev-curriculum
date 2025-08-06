import { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [todo, setTodo] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [filterOption, setFilterOption] = useState("ALL");

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

  // const getFilteredTasks = () => {
  //   if (filterOption === "COMPLETED") {
  //     return taskList
  //       .map((task, index) => ({ ...task, originalIndex: index }))
  //       .filter((task) => task.completed == true);
  //   }
  //   if (filterOption === "PENDING") {
  //     return taskList
  //       .map((task, index) => ({ ...task, originalIndex: index }))
  //       .filter((task) => task.completed == false);
  //   }
  //   return taskList.map((task, index) => ({ ...task, originalIndex: index }));
  // };

  const getFilteredTasks = () => {
    return taskList
      .map((task, index) => ({ ...task, originalIndex: index }))
      .filter((task) => {
        if (filterOption === "COMPLETED") return task.completed;
        if (filterOption === "PENDING") return !task.completed;
        return true;
      });
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
          arr={getFilteredTasks()}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          setFilterOption={setFilterOption}
        />
      </div>
    </div>
  );
}

export default App;
