const TaskItem = ({ arr, deleteTodo, toggleTodo }) => {
  return (
    <ul>
      {arr.map((item, index) => (
        <li
          key={index}
          style={{ textDecoration: item.completed && "line-through" }}
        >
          {item.text}
          <input
            type="checkbox"
            value={item.completed}
            onChange={() => {
              toggleTodo(index);
            }}
          />
          <button
            onClick={() => {
              deleteTodo(index);
            }}
            style={{ marginLeft: "8px" }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskItem;
